// components/ui/ChannelListItem.tsx
import Link from 'next/link';
import { Eye, Settings, Share2, Key } from 'lucide-react';
import { Channel } from '@/types/channel';

interface ChannelListItemProps {
  channel: Channel;
}

export default function ChannelListItem({ channel }: ChannelListItemProps) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div>
            <div className="text-sm font-medium text-gray-900">{channel.name}</div>
            <div className="text-sm text-gray-500">ID: {channel.id}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 py-1 text-xs rounded-full ${
          channel.access === 'Private' 
            ? 'bg-yellow-100 text-yellow-800' 
            : 'bg-green-100 text-green-800'
        }`}>
          {channel.access}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {channel.entries}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {channel.lastUpdate}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex space-x-2">
          <Link href={`/channels/${channel.id}`}>
            <span className="text-emerald-600 hover:text-emerald-900">
              <Eye size={18} />
            </span>
          </Link>
          <Link href={`/channels/${channel.id}/settings`}>
            <span className="text-gray-600 hover:text-gray-900">
              <Settings size={18} />
            </span>
          </Link>
          <Link href={`/channels/${channel.id}/share`}>
            <span className="text-gray-600 hover:text-gray-900">
              <Share2 size={18} />
            </span>
          </Link>
          <Link href={`/channels/${channel.id}/api`}>
            <span className="text-gray-600 hover:text-gray-900">
              <Key size={18} />
            </span>
          </Link>
        </div>
      </td>
    </tr>
  );
}