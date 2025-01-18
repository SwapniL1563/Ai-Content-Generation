"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateSection from './_components/TemplateSection'

const page = () => {
  const [ userSearchInput,setUserSearchInput] = useState<string>()
  return (
    <div>
      {/* Search Section */}
      <SearchSection onSearchInput={(value:string)=> setUserSearchInput(value)}/>

      {/* Template Section */}
      <TemplateSection userSearchInput={userSearchInput}/>
    </div>
  )
}

export default page