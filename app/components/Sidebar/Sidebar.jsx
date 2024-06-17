'use client'

import sidebarItems from '@/public/data/sidebar';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const path = usePathname();

    return (
        <div className='p-3 lg:p-6 shadow lg:rounded-xl'>
            <div className='lg:flex items-center gap-4 hidden'>
                <h1 className='text-2xl bg-black text-white h-10 w-10 rounded-full flex items-center justify-center'>R</h1>
                <h3 className='text-lg lg:text-2xl font-medium'>FHR</h3>
            </div>

            <div className='flex flex-row justify-between lg:justify-start lg:flex-col items-center lg:items-start gap-4 px-4 lg:px-0 lg:mt-12'>
                {
                    sidebarItems?.map((item, index) => {
                        const isActive = path === item.route;
                        return (
                            <Link href={item.route} key={index} className={`flex items-center gap-4 py-4 ${isActive ? 'font-semibold text-orange-600' : ''}`}>
                                <span>{item.icon}</span>
                                <h3 className='hidden lg:flex'>
                                    {item.name}
                                </h3>
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Sidebar;
