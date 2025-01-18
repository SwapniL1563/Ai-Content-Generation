"use client"
import { History, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import React, { useEffect } from 'react'
import UsageTrack from './UsageTrack'
import Link from 'next/link'

const SideNav = () => {
    const MenuList = [
        {
            name:'Home',
            icon:Home,
            path:'/dashboard'
        },
        {
            name:'History',
            icon:History,
            path:'/dashboard/history'
        },
        {
            name:'Billing',
            icon:WalletCards,
            path:'/dashboard/billing'
        },
        {
            name:'Setting',
            icon:Settings,
            path:'/dashboard/setting'
        },
    ]
    
    const path = usePathname();
    // useEffect(()=>{
    //     console.log(path);
    // },[])



  return (
    <div className='h-screen relative p-5 shadow-sm border bg-white'>
        <div className='flex '>
        <Link href='/'>
        <Image src={'/propmtly.png'}  alt='logo' width={150} height={150} />
        </Link>
        </div>
        
        <hr className='my-4  border' />
        <div className='mt-3'>
            {MenuList.map((item,index)=> (
                   <Link href={item.path} key={index}>
                   <div
                     className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${
                       path === item.path && "bg-primary text-white"
                     }`}
                   >
                     <item.icon className="h-7 w-6" />
                     <h2 className="text-lg">{item.name}</h2>
                   </div>
                 </Link>
            ))}
        </div>

        <div className='absolute w-full bottom-10 left-0'>
            <UsageTrack/>
        </div>
    </div>
  )
}

export default SideNav