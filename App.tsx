import React, { useState, useEffect } from 'react';
import type { ArchitectureComponent, LiveStats } from './types';
import { ARCHITECTURE_COMPONENTS_LIST } from './constants';
import ArchitectureNode from './components/ArchitectureNode';
import ExplanationPanel from './components/ExplanationPanel';
import LiveDashboard from './components/LiveDashboard';

const MAX_DATA_POINTS = 30; // Show data for the last minute (30 * 2s)

const generateInitialState = (): LiveStats => {
  const now = new Date();
  const labels = Array.from({ length: MAX_DATA_POINTS }, (_, i) => {
    const time = new Date(now.getTime() - (MAX_DATA_POINTS - 1 - i) * 2000);
    return time.toLocaleTimeString('en-US', { minute: '2-digit', second: '2-digit' });
  });

  const orders: number[] = [];
  const forecast: number[] = [];
  
  for(let i = 0; i < MAX_DATA_POINTS; i++) {
    const baseOrders = 10 + Math.sin(i / 5) * 5 + Math.random() * 4;
    orders.push(Math.max(0, Math.round(baseOrders)));
    forecast.push(Math.max(0, Math.round(baseOrders + (Math.random() * 6 - 3))));
  }

  const backlog = 5 + Math.floor(Math.random() * 10);
  const recommendedStaff = Math.ceil(backlog / 5);
  const alertStatus = recommendedStaff >= 3 ? 'Red' : recommendedStaff >= 2 ? 'Yellow' : 'Green';

  return { labels, orders, forecast, backlog, recommendedStaff, alertStatus };
};

const App: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<ArchitectureComponent | null>(null);
  const [liveStats, setLiveStats] = useState<LiveStats>(generateInitialState);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prevStats => {
        const newLabels = [...prevStats.labels.slice(1), new Date().toLocaleTimeString('en-US', { minute: '2-digit', second: '2-digit' })];
        
        const lastOrder = prevStats.orders[prevStats.orders.length - 1];
        const newOrderValue = Math.round(Math.max(5, lastOrder + (Math.random() * 6 - 3)));
        const newOrders = [...prevStats.orders.slice(1), newOrderValue];

        const newForecastValue = Math.round(Math.max(5, newOrderValue + (Math.random() * 4 - 2)));
        const newForecast = [...prevStats.forecast.slice(1), newForecastValue];
        
        const newBacklog = Math.max(0, prevStats.backlog + newOrderValue - (prevStats.recommendedStaff * 1.5) + Math.random() * 2);
        const recommendedStaff = Math.ceil(newBacklog / 5);
        const alertStatus = recommendedStaff >= 3 ? 'Red' : recommendedStaff >= 2 ? 'Yellow' : 'Green';

        return {
          labels: newLabels,
          orders: newOrders,
          forecast: newForecast,
          backlog: Math.round(newBacklog),
          recommendedStaff,
          alertStatus,
        };
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNodeClick = (component: ArchitectureComponent) => {
    setSelectedComponent(component);
  };

  const renderCategory = (category: ArchitectureComponent['category']) => {
    return (
      <div key={category}>
        <h3 className="text-sm font-semibold uppercase text-slate-500 tracking-wider mb-3 mt-6">{category}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ARCHITECTURE_COMPONENTS_LIST.filter(c => c.category === category).map(component => (
            <ArchitectureNode
              key={component.id}
              component={component}
              onClick={handleNodeClick}
              isSelected={selectedComponent?.id === component.id}
            />
          ))}
        </div>
      </div>
    );
  };

  const categories: ArchitectureComponent['category'][] = [
    'Ingestion',
    'Processing',
    'Storage',
    'Transformation',
    'Forecasting',
    'Visualization & Alerting',
  ];

  return (
    <main className="bg-slate-900 text-slate-200 min-h-screen font-sans">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-700/[0.2] [mask-image:linear-gradient(to_bottom,white_5%,transparent_95%)]"></div>
      <div className="relative container mx-auto px-4 py-8">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            Real-Time Analytics Architect
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
            A technical deep-dive into a demand forecasting and staffing system. Click a component for a detailed explanation.
          </p>
        </header>

        <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-200 mb-6 text-center">Live System Monitor</h2>
            <LiveDashboard stats={liveStats} />
        </section>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Panel: Diagram */}
          <div className="lg:w-3/5 w-full">
              {categories.map(category => renderCategory(category))}
          </div>

          {/* Right Panel: Explanation */}
          <div className="lg:w-2/5 w-full sticky top-8 self-start" style={{height: 'calc(100vh - 8rem)'}}>
            <ExplanationPanel
              selectedComponent={selectedComponent}
            />
          </div>
        </div>
        
        <footer className="text-center py-8 mt-12 text-slate-500 text-sm">
            <p>Built with React, Chart.js & Tailwind CSS.</p>
        </footer>
      </div>
    </main>
  );
};

export default App;
