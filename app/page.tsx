import {  ChartNoAxesCombined, ChevronRight, Handshake, LayoutTemplate, MoveRightIcon, PenLine, PenTool, Sparkle, SquareArrowUpRight, User2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className=" flex justify-between px-10 py-5">
            <Image src={'/propmtly.png'}  alt='logo' width={150} height={150} />
            <div className="flex justify-center items-center gap-2">
               <User2Icon className="text-gray-500 text-sm" />
              <h1 className="text-gray-500 text-sm">Get Started</h1>
            </div>
      </div>
         
      <div className=" h-[58vh] flex flex-col justify-center items-center gap-2">
      <div className="flex gap-1">
      <h2 className="text-center text-gray-500 text-xs md:text-sm" >Onestop solution to your content creation journey </h2>
      <ChevronRight className="text-gray-500  text-sm"/>
      </div>
        <h1 className="text-3xl md:text-6xl font-bold">AI Content <span className="text-primary">Generator</span></h1>
        <p className="text-center w-2/3 md:w-[30%] text-gray-500 text-xs md:text-sm">Revolutionize your content creation with our AI-powered app,delivering engaging and high-quality text in seconds.</p>
        <Link href='/dashboard'>
        <button className="flex mt-4 items-center justify-center text-white gap-2 bg-gradient-to-br from-purple-400 via-primary to-blue-600  hover:bg-gradient-to-br hover:from-gray-500 hover:via-gray-700 hover:to-gray-600   px-5 py-2 rounded-md"><h1>Get started</h1> 
        <ChevronRight/>
        </button>
        </Link>

      </div>

      <div className=" px-10">
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 ">
            <div className=" text-white flex flex-col items-start pl-8 justify-center px-2 py-4 lg:py-10  md:py-8 gap-1 md:gap-3 border border-gray-200 rounded-md">
              <LayoutTemplate className="text-primary text-md md:text-xl"/>
              <h1 className="text-md md:text-lg text-gray-700">25+ templates</h1>
              <p className="text-sm md:text-md text-gray-500 w-full md:w-[80%]">Discover 25+ content generation templates</p>
            </div>

            <div className=" text-white flex flex-col items-start pl-8 justify-center px-2 py-4 lg:py-10  md:py-8 gap-1 md:gap-3 border border-gray-200 rounded-md">
              <PenLine className="text-primary text-md md:text-xl"/>
              <h1 className="text-md md:text-lg text-gray-700">Customisable</h1>
              <p className="text-sm md:text-md text-gray-500 w-full md:w-[80%]">Templates can be easily cutomised & modified.</p>
            </div>

            <div className=" text-white flex flex-col items-start pl-8 justify-center px-2 py-4 lg:py-10  md:py-8 gap-1 md:gap-3 border border-gray-200 rounded-md">
              <Handshake className="text-primary text-md md:text-xl"/>
              <h1 className="text-md md:text-lg text-gray-700">Free To Use</h1>
              <p className="text-sm md:text-md text-gray-500 w-full md:w-[80%]">All the templates are absolutely free to use.</p>
            </div>

            <div className=" text-white flex flex-col items-start pl-8 justify-center px-2 py-4 lg:py-10  md:py-8 gap-1 md:gap-3 border border-gray-200 rounded-md">
              <ChartNoAxesCombined className="text-primary text-md md:text-xl"/>
              <h1 className="text-md md:text-lg text-gray-700">Boost Content</h1>
              <p className="text-sm md:text-md text-gray-500 w-full md:w-[80%]">Increases the productivity by faster content generation.</p>
            </div>

           


         </div>
      </div>

      <div className="px-6 md:px-10  py-10 flex justify-center items-center ">
        <div className=" flex  flex-col justify-center items-center">
           <h1 className="text-primary mb-2 text-sm md:text-base font-semibold">Promptly - AI Content Generator</h1>
           <h1 className="text-gray-500 text-xs md:text-sm">All Rights Reserved | ©2025 | Made by Swapnil</h1>
        </div>
      </div>
    </div>
  );
}
