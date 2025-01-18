import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>
        <div className='flex gap-2 items-center p-2 rounded-md border max-w-lg bg-white '>
            <Search/>
            <input type="text"  placeholder='Search...' className='outline-none ' />
        </div>

        <div className='gap-5 flex items-center'>
            <h2 className='hidden sm:block bg-primary p-[0.35rem] border rounded-full text-white px-2 text-xs '>🔥Join the membership just for $9.99/month</h2>
            <UserButton/>
        </div>
    </div>
  )
}

export default Header