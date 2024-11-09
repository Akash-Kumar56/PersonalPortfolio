import  Mail  from "./Mail";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Skill from "./Skill";
import Social from "./Social";
import Projects from "./Projects";
import Particles from "./ui/particles";
import {Toaster} from "react-hot-toast";



const HomePage = () => {
  return (
    <div className="relative min-h-[100vh] bg-[#0A192F]">
       <Particles
        className="absolute inset-0"
        quantity={2500}
        ease={80}
        color="#0D92F4"
        refresh
      />
     <Toaster/>
     <Navbar></Navbar>
     <Mail></Mail>
     <Social></Social>
     <Hero></Hero>
     <Projects/>
     <Skill></Skill>
     <Experience></Experience>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  )
}

export default HomePage;