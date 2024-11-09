import { Avatar } from "@mantine/core";
const SkillBadge = (skills: []) => {
  return skills.map((skill: any, index: number) => (
    <div 
      key={index}
      className="flex gap-2 border border-gray-400 p-3 lg-mx:px-1.5 lg-mx:gap-1.5 bs-mx:px-1.5 lg-mx:py-0 sm-mx:px-1 sm-mx:gap-1 rounded-2xl items-center"
    >
      <Avatar
        className="!w-[24px] !p-1"
        variant="transparent"
        radius="xs"
        src={`/Icons/${skill}.png`}
      />
      <div className="text-gray-500 text-xl font-medium">{skill}</div>
    </div>
  ));
};

const SkillsCard = (props: any) => {
  return (
    <div  data-aos="zoom-in"
      data-aos-duration="1000"
      className="w-[49%] xl-mx:w-[48%] bs-mx:w-[80%] md-mx:w-[85%] sm-mx:w-[95%] rounded-2xl shadow-[0_0_10px_0_#6070f2]  border-2 p-5"
    >
      <div className="text-3xl sm-mx:text-2xl text-white text-center font-bold">
        {props.title}
      </div>
      <div className="flex flex-wrap gap-3 justify-center py-5 ">
        {SkillBadge(props.skills)}
      </div>
    </div>
  );
};

export default SkillsCard;
