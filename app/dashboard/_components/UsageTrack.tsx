"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput, UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react'
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import Link from 'next/link';

const UsageTrack = () => {

    const { user } = useUser();
    const { totalUsage,setTotalUsage} = useContext(TotalUsageContext)
    const {userSubscription,setUserSubscription} = useContext(UserSubscriptionContext)
    const[maxWords,setMaxWords] = useState(10000);
    const {updateCreditUsage,setUpdateCreditUsage} = useContext(UpdateCreditUsageContext)

    useEffect(()=>{
        user&&GetData();
        user&&isUserSub();
    },[user]);

    useEffect(()=>{
      user&&GetData()
    },[updateCreditUsage&&user])



    const GetData = async () => {
       {/* @ts-ignore */}
        const result:HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress))

        GetTotalUsage(result)
    }

    const isUserSub = async () => {
      if (!user?.primaryEmailAddress?.emailAddress) {
        console.error("User email is undefined.");
        return;
      }
    
      const result = await db.select().from(UserSubscription)
        .where(eq(UserSubscription.email, user.primaryEmailAddress.emailAddress));
    
      if (result.length > 0) {
        setUserSubscription(true);
        setMaxWords(100000);
      }
    };

    const GetTotalUsage = (result:HISTORY[]) => {
       let total:number = 0;
       result.forEach(element => {
        total = total+Number(element.aiResponse?.length)
        setTotalUsage(total);
       }) 
    }
  return (
    <div className='m-5'>
        <div className='bg-primary p-3 text-white rounded-lg'>
            <h2>Credits</h2>
            <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3 '>
             <div className='h-2 bg-white rounded-full' style={{
                width:(totalUsage/maxWords)*100 + "%"
             }}>

             </div>
            </div>
            <h2 className='text-sm font-light'>{totalUsage}/{maxWords}credits used</h2>
        </div>
       <Link href='/dashboard/billing'> <Button variant={'secondary'} className='w-full border  border-[#E5E5E5] my-3 text-primary'>Upgrade</Button></Link>
    </div>
  )
}

export default UsageTrack