// components/channels/ChannelGrid.tsx
import ChannelCard from '../ui/ChannelCard';
import { Channel } from '@/types/channel';

interface ChannelGridProps {
  channels: Channel[];
}

export default function ChannelGrid({ channels }: ChannelGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {channels.map((channel) => (
        <ChannelCard key={channel.id} channel={channel} />
      ))}
    </div>
  );
}