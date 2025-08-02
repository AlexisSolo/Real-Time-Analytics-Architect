import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
} from 'chart.js';
import type { LiveStats } from '../types';
import KpiCard from './KpiCard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface LiveDashboardProps {
  stats: LiveStats;
}

const AlertStatus: React.FC<{ status: LiveStats['alertStatus'] }> = ({ status }) => {
  const statusConfig = {
    Green: { text: 'Optimal', color: 'bg-emerald-500' },
    Yellow: { text: 'Understaffed', color: 'bg-yellow-500' },
    Red: { text: 'Critical', color: 'bg-red-500' },
  };

  return (
    <div className="flex items-center space-x-2">
      <span className={`h-3 w-3 rounded-full ${statusConfig[status].color}`}></span>
      <span className="text-slate-200 font-medium">{statusConfig[status].text}</span>
    </div>
  );
};

const LiveDashboard: React.FC<LiveDashboardProps> = ({ stats }) => {
  const chartData = {
    labels: stats.labels,
    datasets: [
      {
        label: 'Forecasted Demand',
        data: stats.forecast,
        borderColor: 'rgb(100, 116, 139)',
        backgroundColor: 'rgba(100, 116, 139, 0.2)',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4,
        borderDash: [5, 5],
        fill: true,
      },
      {
        label: 'Actual Orders',
        data: stats.orders,
        borderColor: 'rgb(251, 191, 36)',
        backgroundColor: 'rgba(251, 191, 36, 0.2)',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
            color: '#cbd5e1'
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#94a3b8',
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 10
        },
        grid: {
          color: 'rgba(100, 116, 139, 0.2)',
        },
      },
      y: {
        ticks: {
          color: '#94a3b8',
        },
        grid: {
          color: 'rgba(100, 116, 139, 0.2)',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KpiCard title="Current Order Backlog" value={stats.backlog} unit="orders" />
        <KpiCard title="Recommended Staff" value={stats.recommendedStaff} unit="pickers" />
        <KpiCard title="Alert Status" value="">
            <div className="mt-3">
                <AlertStatus status={stats.alertStatus} />
            </div>
        </KpiCard>
      </div>
      <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg shadow-lg ring-1 ring-slate-700 h-80">
        <Line options={chartOptions} data={chartData} />
      </div>
    </div>
  );
};

export default LiveDashboard;
