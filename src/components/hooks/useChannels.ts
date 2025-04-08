// hooks/useChannels.ts
import { useState, useCallback, useMemo } from 'react';
import { Channel } from '@/types/channel';

const initialChannels: Channel[] = [
  
];

export function useChannels(searchQuery: string = '') {
  const [channels, setChannels] = useState<Channel[]>(initialChannels);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const filteredChannels = useMemo(() => 
    channels.filter(channel => 
      channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      channel.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      channel.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    ), 
    [channels, searchQuery]
  );

  const addChannel = useCallback((channel: Omit<Channel, 'id'>) => {
    const newChannel: Channel = {
      ...channel,
      id: Math.random().toString(36).substr(2, 9), // Simple id generation
    };
    
    setChannels(prevChannels => [...prevChannels, newChannel]);
    return newChannel;
  }, []);

  const updateChannel = useCallback((id: string, updates: Partial<Channel>) => {
    setChannels(prevChannels => 
      prevChannels.map(channel => 
        channel.id === id ? { ...channel, ...updates } : channel
      )
    );
  }, []);

  const deleteChannel = useCallback((id: string) => {
    setChannels(prevChannels => 
      prevChannels.filter(channel => channel.id !== id)
    );
  }, []);

  const fetchChannels = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // TODO In a real app, this would be an API call
      setChannels(initialChannels);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    channels: filteredChannels,
    isLoading,
    error,
    addChannel,
    updateChannel,
    deleteChannel,
    fetchChannels,
  };
}