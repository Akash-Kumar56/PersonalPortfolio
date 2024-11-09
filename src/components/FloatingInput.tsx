const FloatingInput = (props: any) => {
  return (
    <div>
    <div className="relative">
    {props.id!="message"?<input type="text" id={props.id} value={props.value} onChange={(e)=>props.handleChange(props.id, e.target.value)} className="block px-2.5 sm-mx:px-1 pb-2.5 sm-mx:pb-1 pt-4 sm-mx:pt-2 w-full text-xl md-mx:text-sm text-white bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    :<textarea value={props.value} name={props.id} id={props.id} onChange={(e) => props.handleChange(props.id, e.target.value)} rows={4} className="block px-2.5 pb-2.5 pt-4 w-full text-xl text-white bg-transparent md-mx:text-sm rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"></textarea>}
    <label htmlFor={props.id} className="absolute text-xl md-mx:text-base bg-[#0A192F] text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{props.name}</label>
</div>
{props.error && <div className="text-red-500 text-start">{props.error}</div>}
</div>
  );
};

export default FloatingInput;
