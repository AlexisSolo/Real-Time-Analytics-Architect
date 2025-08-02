import React from 'react';

interface KpiCardProps {
  title: string;
  value: string | number;
  unit?: string;
  children?: React.ReactNode;
  className?: string;
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, unit, children, className }) => {
  return (
    <div className={`bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg shadow-lg ring-1 ring-slate-700 ${className}`}>
      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{title}</h3>
      <div className="mt-2 flex items-baseline space-x-2">
        <p className="text-3xl font-bold text-slate-100">{value}</p>
        {unit && <span className="text-slate-400">{unit}</span>}
      </div>
      {children}
    </div>
  );
};

export default KpiCard;
