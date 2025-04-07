// components/layout/Navbar.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Bell } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  active: boolean;
}

export default function Navbar() {
  const navItems: NavItem[] = [
    { name: 'Channels', href: '/', active: true },
    { name: 'Analytics', href: '/analytics', active: false },
    { name: 'Devices', href: '/devices', active: false },
    { name: 'Alerts', href: '/alerts', active: false },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-emerald-600">SensorHub</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className={`${
                    item.active 
                      ? 'border-emerald-500 text-gray-900' 
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                    {item.name}
                  </span>
                </Link>
              ))}
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
  );
}