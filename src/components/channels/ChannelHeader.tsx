// components/channels/ChannelHeader.tsx
import { Plus } from 'lucide-react';

interface ChannelHeaderProps {
  onNewChannel?: () => void;
}

export default function ChannelHeader({ onNewChannel }: ChannelHeaderProps) {
  return (
    <div className="px-4 py-5 sm:px-6 bg-white shadow-sm rounded-lg mb-6">
      <div className="flex items-center justify-between flex-wrap sm:flex-nowrap">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">My Channels</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage and monitor your IoT data channels
          </p>
        </div>
        <div className="flex-shrink-0">
          <button
            type="button"
            onClick={onNewChannel}
            className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            <Plus size={16} className="mr-2" />
            New Channel
          </button>
        </div>
      </div>
    </div>
  );
}