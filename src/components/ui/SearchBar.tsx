// components/ui/SearchBar.tsx
import { Search } from 'lucide-react';
import { ChangeEvent } from 'react';

interface SearchBarProps {
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export default function SearchBar({ 
  placeholder = 'Search', 
  onChange,
  value = ''
}: SearchBarProps) {
  return (
    <div className="relative flex-grow max-w-lg">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search size={18} className="text-gray-400" />
      </div>
      <input
        type="text"
        className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}