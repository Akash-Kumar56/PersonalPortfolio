import { useState } from "react";
import FloatingInput from "./FloatingInput";
import SparklesText from "./magicui/sparkles-text";
import validation from "./validation";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebase";
import toast from "react-hot-toast";
const Contact = () => {

  const form = {
    name: "",
    email: "",
    phone: "",
    message: "",
  }

  const [formData, setFormData] = useState<{[key:string]: string}>(form);
  const [formError, setFormError] = useState<{[key:string]: string}>(form);
  const handleChange = (id:string, value:string) => {
    setFormData({...formData, [id]:value});
    setFormError({...formError, [id]: validation(id, value)})
  }
  const handleSubmit=async()=>{
    let valid=true;
    let newFormError:{[key:string]: string}={};
    for(let key in formData){
      const error = validation(key, formData[key]);
      if(error.length>0){
        newFormError[key]=error;
        valid=false;
      }
    }
    setFormError(newFormError);
    if(valid){
      setFormData(form);
      await addDoc(collection(db, "portfolio"), formData);
      toast.success('Successfully Submitted!', {duration:4000});
    }
    else{
      toast.error("Some error occurred!", {duration:4000});
    }

  }


  return (
    <div data-aos="flip-right" data-aos-duration="2000" className=" text-white  h-[600px] w-full px-80 xl-mx:px-60 lg-mx:px-40 bs-mx:px-32 sm-mx:px-14 xs-mx:px-6"id="Contact">
          <SparklesText text="Contacts" className="text-4xl mb-10"/>
          <div className="flex flex-col gap-6 sm-mx:gap-3 border border-blue-300 p-8 rounded-3xl px-10 sm-mx:p-5 shadow-[0_0_10px_1px_#6070f2] ">
            <div className="text-3xl md-mx:text-2xl text-white font-semibold text-start ">
              Lets Connect
            </div> 
            <FloatingInput id="name" name="Name" value={formData.name} handleChange = {handleChange} error={formError.name}/>
            <FloatingInput id="email" name="Email" value={formData.email} handleChange = {handleChange} error={formError.email}/>
            <FloatingInput id="phone" name="Phone" value={formData.phone} handleChange = {handleChange} error={formError.phone}/>
            <FloatingInput id="message" name="Message" value={formData.message} handleChange = {handleChange} error={formError.message}/>
            <div className="flex justify-center">
            <button type="button" onClick={handleSubmit} className="text-white bg-transparent hover:ring-4 font-medium rounded-lg text-xl sm-mx:text-base w-80 sm-mx:w-60 py-2.5 sm-mx:py-1.5 text-center me-2 mb-2 border-2 border-blue-300 shadow-[0_0_10px_1px_#6070f2] transform transition-transform duration-300 hover:scale-105">Send</button>
            </div>
          </div>

    </div>
  )
}

export default Contact;