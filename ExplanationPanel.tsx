import React from 'react';
import type { ArchitectureComponent } from '../types';

interface ExplanationPanelProps {
  selectedComponent: ArchitectureComponent | null;
}

const ExplanationPanel: React.FC<ExplanationPanelProps> = ({ selectedComponent }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-2xl h-full flex flex-col p-6 ring-1 ring-slate-700">
      {selectedComponent ? (
        <>
          <div className="flex items-center space-x-4 pb-4 border-b border-slate-700 mb-4">
            <div className="flex-shrink-0 text-amber-400">{selectedComponent.icon}</div>
            <h2 className="text-2xl font-bold text-slate-100">{selectedComponent.name}</h2>
          </div>
          <div className="flex-grow overflow-y-auto pr-2 text-slate-300">
            <div
                className="prose prose-invert prose-p:text-slate-300 prose-headings:text-slate-100 whitespace-pre-wrap"
              >
                {selectedComponent.fullExplanation}
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center h-full text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-xl font-semibold text-slate-400">Select a Component</h2>
          <p className="text-slate-500 mt-2 max-w-sm">Click on a component from the diagram to view its detailed technical specification and role within the architecture.</p>
        </div>
      )}
    </div>
  );
};

export default ExplanationPanel;