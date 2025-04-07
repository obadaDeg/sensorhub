'use client';
import Link from 'next/link';
import { Bell } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => (
  <nav className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="flex-shrink-0 flex items-center text-2xl font-bold text-emerald-600">
            SensorHub
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
            {['/', '/analytics', '/devices', '/alerts'].map((href, i) => (
              <Link key={i} href={href}>
                <span className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  {href === '/' ? 'Channels' : href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-emerald-600 p-1 rounded-full text-white hover:bg-emerald-700 focus:outline-none">
            <Bell size={20} />
          </button>
          <Image className="h-8 w-8 rounded-full" src="/placeholder.png" alt="User" width={32} height={32} />
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
