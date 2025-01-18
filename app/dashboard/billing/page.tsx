"use client"
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Loader2Icon } from 'lucide-react';
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';

const billing = () => {
  
  const[loading,setLoading] = useState(false);
  const{user} = useUser();
   const {userSubscription,setUserSubscription} = useContext(UserSubscriptionContext)

  const onPaymentSubscr =()=> {
      axios.post('/api/create-subscription',{})
      .then(resp=>{ console.log(resp.data)
        onPayment(resp.data.id)
      }),(error)=>{
        setLoading(false);
      }
  }

  const onPayment = (subId:string)=> {
    const options = {
      "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID  ,
      "subscription_id":subId,
      "name":"Promptly - Ai Content Generator",
      description:"Monthly Subscription",
      handler:async(resp:any)=>{
        console.log(resp)
        if(resp){
          SaveSubscription(resp?.razorpay_payment_id);
        }
        setLoading(false)
      }
    }
    
    // @ts-ignore
    const  rzp = new window.Razorpay(options);
    rzp.open();

    const SaveSubscription = async (paymentId:string) => {
      const result = await db.insert(UserSubscription)
      .values({
        email:user?.primaryEmailAddress?.emailAddress,
        userName:user?.fullName,
        active:true,
        paymentId:paymentId,
        joinDate:moment().format('DD/MM/yyyy')
      })


      console.log(result);
      if(result){
        window.location.reload();
      }
    }
  }
  return (
    <div>
    <script src='https://checkout.razorpay.com/v1/checkout.js'></script>
    <div className="flex flex-col items-center p-8 font-sans">
      
      <h1 className="text-2xl font-bold mb-6">Upgrade With Monthly Plan</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Free Plan */}
        <div className="border border-gray-300 rounded-lg p-6 w-64 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Free </h2>
          <p className="text-lg text-gray-600 mb-4"><span className='text-4xl text-black font-semibold  '>$0</span>/month</p>
          <p className="text-sm text-gray-500 mb-2">✅10,000 Words/Month</p>
          <p className="text-sm text-gray-500 mb-2">✅50+ Content Templates</p>
          <p className="text-sm text-gray-500 mb-6">✅1 month of history</p>
          <button
            className="bg-primary w-full text-white py-2 px-4 rounded hover:bg-gray-700 transition"
           
          >
            Free Plan
          </button>
        </div>

        {/* Monthly Plan */}
        <div className="border border-gray-300 rounded-lg p-6 w-64 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Monthly Plan</h2>
          <p className="text-lg text-gray-600 mb-4"><span className='text-4xl text-black font-semibold  '>$10</span>/month</p>
          <p className="text-sm text-gray-500 mb-2">✅1,00,000 Words/Month</p>
          <p className="text-sm text-gray-500 mb-2">✅50+ Content Templates</p>
          <p className="text-sm text-gray-500 mb-6">✅1 year of history</p>
          <button disabled={loading} onClick={()=>onPaymentSubscr()}
            className="bg-primary w-full pl-14 flex gap-2 items-center text-white py-2 px-4 rounded hover:bg-gray-700 transition"
          
          > { loading&&<Loader2Icon className='animate-spin'/>}
            {userSubscription?'Active Plan':'Upgrade Now'}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default billing