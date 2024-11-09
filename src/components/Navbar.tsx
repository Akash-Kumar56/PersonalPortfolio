import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { IconBrandAngular } from "@tabler/icons-react";


const links = ["About", "Projects", "Skills", "Experience", "Contact"];
const navLinks=( clicked:any) =>{
  const handleClick = (event: any, link: any) => {
    event.preventDefault();
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if(clicked)clicked();
  };
  return links.map((link, index)=>{
    return <a onClick={(event) => handleClick(event, link)} className="hover:text-blue-500" href={`#${link}`} key={index}>{link}</a>
  })
}
const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shadow, setShadow] = useState(false);
  const controlNavbar = () => {
    if(window.scrollY>lastScrollY && window.scrollY>70)setShow(false);
    else setShow(true);
    if(window.scrollY>70)setShadow(true);
    else setShadow(false);
    setLastScrollY(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return ()=>window.removeEventListener('scroll', controlNavbar)
  })

  return (
    <nav className={`${show?"translate-y-0":"-translate-y-16"} ${shadow?"shadow-[0px_10px_30px_-10px_#020c1b]":""} transition-transform duration-500 ease-in-out bg-[#0A192F] text-white px-8 fixed md:px-16 lg:px-24 top-0 left-0 w-full z-50 sm-mx:px-5`}>
      <div className="py-2 flex justify-between items-center mt-2">
        <IconBrandAngular size={40}/>
        <div className="space-x-6 text-white bs-mx:hidden">
          {navLinks(false)}
        </div>
       <SideBar />
      </div>
    </nav>
  )
}

export default Navbar;
export {navLinks};

