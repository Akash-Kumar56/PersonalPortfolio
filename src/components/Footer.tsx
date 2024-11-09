import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="h-[250px] pt-44 md-mx:pt-28 md-mx:h-[250px] sm-mx:pt-0 sm-mx:h-[130px]">
      <div  className="text-gray-500 flex justify-center items-center gap-10 pb-5 md:pb-0 md:hidden xs-mx:gap-6">
      <a 
        href="#"
        className="text-lg hover:text-blue-500 hover:scale-105 transition transform duration-300 "
      >
        <IconBrandGithub size={35}/>
      </a>
      <a
        href="#"
        className="text-lg hover:text-blue-500 hover:scale-105 transition transform duration-300"
      >
        <IconBrandLinkedin size={35}/>
      </a>
      <a
        href="#"
        className="text-lg hover:text-blue-500 hover:scale-105 transition transform duration-300"
      >
        <IconBrandLeetcode size={35}/>
      </a>
      <a
        href="#"
        className="text-lg hover:text-blue-500 hover:scale-105 transition transform duration-300"
      >
        <IconBrandInstagram size={35}/>
      </a>
      <a
        href="#"
        className="text-lg hover:text-blue-500 hover:scale-105 transition transform duration-300"
      >
        <IconMail size={35}/>
      </a>  
    </div>
        <div className="text-3xl md-mx:text-2xl text-blue-300 font-semibold">Akash Behera</div>
        <div className="md-mx:flex hidden text-textColor gap-8 sm-mx:gap-6"></div>
        <div className="text-gray-400 text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm xs-mx:flex flex-col items-center">Copyright &copy; {new Date().getFullYear()} Akash Behera <span className="xs-mx:hidden">|</span> <span>All is well</span></div>
    </div>
  )
}

export default Footer;