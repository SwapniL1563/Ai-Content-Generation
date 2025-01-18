"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserSubscriptionContext } from '../(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const [totalUsage,setTotalUsage] = useState<Number>(0);
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const [userSubscription,setUserSubscription] = useState<boolean>(false);
    const [updateCreditUsage,setUpdateCreditUsage] = useState<any>()
  return (
    <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
      <UserSubscriptionContext.Provider value={{userSubscription,setUserSubscription}}>
        <UpdateCreditUsageContext.Provider value={{updateCreditUsage,setUpdateCreditUsage}} >
    <div className='bg-slate-100 '>
        <div className='md:w-64 fixed hidden md:block'>
        <SideNav/>
        
        </div>

        <div className='md:ml-64'>
            <Header/>
            {children}
            
        </div>
    </div>
    </UpdateCreditUsageContext.Provider>
    </UserSubscriptionContext.Provider>
    </TotalUsageContext.Provider>
  )
}

export default layout