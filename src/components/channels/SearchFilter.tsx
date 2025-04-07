// components/channels/SearchFilter.tsx
import { ChangeEvent } from 'react';
import SearchBar from '../ui/SearchBar';
import ViewToggle from '../ui/ViewToggle';
import { ViewMode } from '../../types';

interface SearchFilterProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  searchQuery?: string;
  onSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchFilter({ 
  viewMode, 
  setViewMode, 
  searchQuery = '', 
  onSearchChange 
}: SearchFilterProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg mb-6 p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <SearchBar 
          placeholder="Search channels" 
          value={searchQuery} 
          onChange={onSearchChange} 
        />
        <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
      </div>
    </div>
  );
}