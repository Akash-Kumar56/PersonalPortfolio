import { Timeline } from '@mantine/core';
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { ExperienceInfo } from './User';
import SparklesText from './magicui/sparkles-text';


const TimeLineItem = (items: any) => {
  return items.map((item: any, index: number) => <Timeline.Item data-aos="zoom-in"
  data-aos-duration="1000" className='py-5' key={index} bullet={<IconBriefcaseFilled size={18} />} >
  <div className='flex flex-col gap-2 border border-cyan-600 p-4 rounded-2xl text-white mt-14 shadow-[0_0_10px_1px_#6070f2] '>
    <div className='flex gap-2 items-center'>
        <img className='rounded-lg w-16' src={`/${item.company}.png`} alt='company' />
        <div className='flex flex-col'>
          <div>{item.role}</div>
          <div>{item.company} &#x2022; {item.date}</div>
        </div>
    </div>
    <div className='text-gray-300 text-justify leading-6 md-mx:text-sm'>
      {item.desc}
    </div>
    <div><span className='font-semibold text-lg md-mx:text-base text-white'>Skills:</span>
     {item.skills.map((skill: any, index: number)=> <span key={index}> &#x2022; {skill} </span>)}
    </div>
  </div>
</Timeline.Item> )
}

const Experience = () => {  
  return (
    <div className='' id='Experience'>
        <div className=" text-white px-14 mx-20 sm-mx:mx-10 sm-mx:ml-5 xs-mx:mx-8 xs-mx:ml-5 pt-10 xl-mx:py-10 xl-mx:px-10 bs-mx:px-6 md-mx:px-10 sm-mx:px-0">
          <SparklesText text="Experience" className='text-4xl'/>
          <Timeline active={4} bulletSize={30} lineWidth={2}>
          {TimeLineItem(ExperienceInfo)}
          <Timeline.Item  bullet={<IconBriefcaseFilled size={18} />} ></Timeline.Item>
          </Timeline>
        </div>
    </div>
  )
}

export default Experience;