// pages/index.js
'use client';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Bell, 
  Settings, 
  LineChart, 
  PlusCircle, 
  Eye, 
  Share2, 
  Key, 
  FileText, 
  Grid, 
  List, 
  Search,
  Plus
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [viewMode, setViewMode] = useState('grid');
  const [channels, setChannels] = useState([
    {
      id: '2875636',
      name: 'Farm Sensor',
      author: 'mwa0000037188024',
      access: 'Private',
      created: '25 days ago',
      entries: 1243,
      fields: 8,
      lastUpdate: '5 minutes ago',
      description: 'Temperature and humidity sensors for the north field',
      tags: ['agriculture', 'temperature', 'humidity']
    },
    {
      id: '2875637',
      name: 'Weather Station',
      author: 'mwa0000037188024',
      access: 'Public',
      created: '14 days ago',
      entries: 4322,
      fields: 6,
      lastUpdate: '1 minute ago',
      description: 'Local weather monitoring station',
      tags: ['weather', 'wind', 'precipitation']
    },
    {
      id: '2875638',
      name: 'Soil Moisture',
      author: 'mwa0000037188024',
      access: 'Private',
      created: '32 days ago',
      entries: 2150,
      fields: 4,
      lastUpdate: '10 minutes ago',
      description: 'Soil moisture sensors across farm plots',
      tags: ['soil', 'moisture', 'agriculture']
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>SensorHub | Your IoT Data Platform</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-emerald-600">SensorHub</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                <Link href="/">
                  <span className="border-emerald-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Channels
                  </span>
                </Link>
                <Link href="/analytics">
                  <span className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Analytics
                  </span>
                </Link>
                <Link href="/devices">
                  <span className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Devices
                  </span>
                </Link>
                <Link href="/alerts">
                  <span className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Alerts
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-emerald-600 p-1 rounded-full text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                <Bell size={20} />
              </button>
              <div className="ml-3 relative">
                <div>
                  <button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                    <Image
                      className="h-8 w-8 rounded-full"
                      src="/placeholder.png"
                      alt="User profile"
                      width={32}
                      height={32}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Page header */}
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
                className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                <Plus size={16} className="mr-2" />
                New Channel
              </button>
            </div>
          </div>
        </div>

        {/* Search and filters */}
        <div className="bg-white shadow-sm rounded-lg mb-6 p-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                placeholder="Search channels"
              />
            </div>
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
          </div>
        </div>

        {/* Channel grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((channel) => (
              <div key={channel.id} className="bg-white overflow-hidden shadow-sm rounded-lg">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">{channel.name}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      channel.access === 'Private' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {channel.access}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500 truncate">{channel.description}</p>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {channel.tags.map(tag => (
                        <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    <div className="flex justify-between py-1">
                      <span>Fields:</span>
                      <span className="font-medium">{channel.fields}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Entries:</span>
                      <span className="font-medium">{channel.entries}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Last update:</span>
                      <span className="font-medium">{channel.lastUpdate}</span>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Link href={`/channels/${channel.id}`}>
                      <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
                        <Eye size={14} className="mr-1" /> View
                      </span>
                    </Link>
                    <Link href={`/channels/${channel.id}/settings`}>
                      <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-gray-50 text-gray-700 hover:bg-gray-100">
                        <Settings size={14} className="mr-1" /> Settings
                      </span>
                    </Link>
                    <Link href={`/channels/${channel.id}/share`}>
                      <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-gray-50 text-gray-700 hover:bg-gray-100">
                        <Share2 size={14} className="mr-1" /> Share
                      </span>
                    </Link>
                    <Link href={`/channels/${channel.id}/api`}>
                      <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-gray-50 text-gray-700 hover:bg-gray-100">
                        <Key size={14} className="mr-1" /> API
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
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
                {channels.map((channel) => (
                  <tr key={channel.id}>
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
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 pt-6">
            <p className="text-center text-sm text-gray-500">
              © 2025 SensorHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}