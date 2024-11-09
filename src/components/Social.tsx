import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Social = () => {
  return (
    <div  className="text-gray-500 flex md-mx:hidden items-center gap-10 fixed -left-40 rotate-90 bottom-32 z-50">
      <a 
        href="#"
        className="text-lg hover:text-blue-500 hover:-translate-x-2 transition transform duration-300 -rotate-90"
      >
        <IconBrandGithub size={30}/>
      </a>
      <a
        href="#"
        className="text-lg hover:text-blue-500 hover:-translate-x-2 transition transform duration-300 -rotate-90"
      >
        <IconBrandLinkedin size={30}/>
      </a>
      <a
        href="#"
        className="text-lg hover:text-blue-500 hover:-translate-x-2 transition transform duration- -rotate-90"
      >
        <IconBrandLeetcode size={30}/>
      </a>
      <a
        href="#"
        className="text-lg hover:text-blue-500 hover:-translate-x-2 transition transform duration-300 -rotate-90"
      >
        <IconBrandInstagram size={30}/>
      </a>
      <hr className="border-[2px] w-40 rounded-full border-gray-500 " />
    </div>
  );
};

export default Social;
