import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE {
    name:string,
    desc:string,
    icon:string,
    category:string,
    slug:string,
    aiPrompt:string,
    form?:FORM[]
}

export interface FORM{
    label:string,
    field:string,
    name:string,
    required?:boolean
}

const TemplateSection = ({userSearchInput}:any) => {
  const [templateList,setTemplateList] = useState(Templates)
  useEffect(()=> {
    if(userSearchInput){
      const filteredData = Templates.filter(item=> 
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filteredData)
    }
    else{
      setTemplateList(Templates);
    }
  },[userSearchInput])
  return (
    <div className='p-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3'>{
        templateList.map((item:TEMPLATE,index:number)=> (
          <TemplateCard {...item} key={index}/>

        ))
    }</div>
  )
}

export default TemplateSection