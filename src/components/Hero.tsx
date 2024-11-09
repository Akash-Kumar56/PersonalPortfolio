import HeroImg from "../assets/images/Boy.png";
import ResumeView from "./ResumeView";
import { useDisclosure } from "@mantine/hooks";
import { Mypdf } from "./User";
import FlipText from "./ui/flip-text";
import GradualSpacing from "./ui/gradual-spacing";
import HyperText from "./ui/hyper-text";


const Hero = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <div data-aos="zoom-out-down" data-aos-duration="1000" className="relative flex h-[600px] w-full overflow-hidden flex-col items-center justify-around mx:justify-between " id="About">
        <div className=" flex justify-between items-center text-white bs-mx:flex-wrap bs-mx:flex-col-reverse xl:gap-60 lg:gap-20 xl:mt-12 lg:mt-10">
          <div className="text-start bs-mx:text-center space-y-2 bs:ml-12 xl:mr-20 px-3">
            <FlipText
              className="text-4xl lg-mx:text-3xl bs-mx:text-2xl xs-mx:text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent"
              word="Hi, Myself"
            />
            <GradualSpacing
              className="bs-mx:ml-14 text-6xl lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl font-bold text-white"
              text="Akash Behera"
            />
        
            <HyperText
              className="text-4xl lg-mx:text-2xl sm-mx:text-xl font-medium bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent"
              text="I'm a Full-Stack Developer"
            />
            <p className="text-lg text-gray-300xl-mx:text-base lg-mx:text-base sm-mx:text-sm xs-mx:text-xs">
              I'm a passionate and dedicated full stack developer specialized<br/>in creating dynamic, responsive and user-friendly applications.<br/> I'm driven by a love for development and excited to showcase<br/> my projects. lets connect and create somthing amazing togather.
            </p>
            <div className="flex justify-start bs-mx:justify-center gap-5">
            <button  className="w-40 sm-mx:w-36 sm-mx:h-10 xs-mx:h-8 xs-mx:text-sm xs-mx:w-32 bg-gradient-to-r from-purple-400 to-blue-600 text-white border-white border-2 transform transition-transform duration-300 hover:scale-105 px-4 py-2 sm-mx:py-0 sm-mx:px-0 rounded-xl mt-2">
              <a href="/akashbehera_resume.pdf" download="akashbehera_resume.pdf">Download CV</a>
            </button>
            <button onClick={open} className="w-40 sm-mx:w-36 sm-mx:h-10 xs-mx:h-8 xs-mx:text-sm xs-mx:w-32 bg-transparent border-2 shadow-[0_0_10px_1px_#6070f2] border-blue-500 text-blue-400 transform transition-transform duration-300 hover:scale-105 px-4 py-2 sm-mx:py-0 sm-mx:px-0 rounded-xl mt-2">
              Check CV
            </button>
            </div>
          </div>
          <div className="relative flex h-[300px] w-[300px] sm-mx:w-[250px] sm-mx:h-[250px] flex-col items-center justify-center rounded-full bg-transparent xl:ml-0">
              <div className="bs-mx:mt-12 sm-mx:mt-4 transform transition-transform duration-300 hover:scale-105 mr-10 bs-mx:mr-0">
                <img
                  className="max-auto  w-64 lg-mx:w-56 md-mx:w-52 sm-mx:w-48 h-64 lg-mx:h-56 md-mx:h-52 sm-mx:h-48 rounded-full object-cover !shadow-[0_0_10px_1px_#6070f2] border-2"
                  src={HeroImg}
                  alt=""
                />
              </div>
          </div>
        </div>
      </div>
      {Mypdf.map((pdf: any, index: number) => (
          <ResumeView key={index} opened={opened} close={close} image={pdf.image}/>
        ))}
      
      
      </>
    
  );
};

export default Hero;
