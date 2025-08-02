import React from 'react';
import type { ArchitectureComponent } from '../types';

interface ArchitectureNodeProps {
  component: ArchitectureComponent;
  onClick: (component: ArchitectureComponent) => void;
  isSelected: boolean;
}

const ArchitectureNode: React.FC<ArchitectureNodeProps> = ({ component, onClick, isSelected }) => {
  const selectedClasses = isSelected 
    ? 'ring-2 ring-offset-2 ring-offset-slate-900 ring-amber-400 scale-105' 
    : 'ring-1 ring-slate-700';

  return (
    <div
      onClick={() => onClick(component)}
      className={`bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg shadow-lg flex items-center space-x-4 cursor-pointer transition-all duration-200 hover:bg-slate-700/70 hover:scale-105 ${selectedClasses}`}
    >
      <div className="flex-shrink-0">
        {component.icon}
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-slate-100 text-base">{component.name}</h3>
        <p className="text-slate-400 text-sm">{component.description}</p>
      </div>
    </div>
  );
};

export default ArchitectureNode;