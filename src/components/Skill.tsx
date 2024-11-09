import SparklesText from "./magicui/sparkles-text";
import SkillsCard from "./SkillsCard";
import { SkillInfo } from "./User";


const Skill = () => {
  return (
    <div className="  text-white px-16 xl-mx:px-12 sm-mx:px-2 " id="Skills">
      <SparklesText text="Skills" className="text-4xl mb-12 mt-10"/>
      <div className="flex flex-wrap bs-mx:flex-col gap-5 justify-between bs-mx:items-center px-16 md-mx:px-14 sm-mx:px-4">
      {
        SkillInfo.map((skill:any, index:number)=><SkillsCard key={index} title={skill.title} skills={skill.skills}/>)
      }
      </div>
    </div>
  )
}

export default Skill;