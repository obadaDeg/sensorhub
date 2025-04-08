import { Channel } from '@/types/channel';
import ChannelListItem from '../ui/ChannelListItem';
import { useEffect, useState } from 'react';

interface ChannelListProps {
  channels: Channel[];
}

export default function ChannelList({ channels }: ChannelListProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden transition-all duration-300 transform">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr className={`transition-all duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Channel
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Entries
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Update
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {channels.map((channel, index) => (
            <ChannelListItem 
              key={channel.id} 
              channel={channel} 
              isVisible={isVisible}
              animationDelay={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}