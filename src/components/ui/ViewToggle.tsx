// components/ui/ViewToggle.tsx
import { Grid, List } from 'lucide-react';
import { ViewMode } from '../../types';

interface ViewToggleProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

export default function ViewToggle({ viewMode, setViewMode }: ViewToggleProps) {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm text-gray-500">View:</span>
      <button
        onClick={() => setViewMode('grid')}
        className={`p-1.5 rounded ${
          viewMode === 'grid' ? 'bg-emerald-100 text-emerald-600' : 'text-gray-400 hover:text-gray-500'
        }`}
      >
        <Grid size={20} />
      </button>
      <button
        onClick={() => setViewMode('list')}
        className={`p-1.5 rounded ${
          viewMode === 'list' ? 'bg-emerald-100 text-emerald-600' : 'text-gray-400 hover:text-gray-500'
        }`}
      >
        <List size={20} />
      </button>
    </div>
  );
}