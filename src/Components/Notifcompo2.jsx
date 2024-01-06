function Notifcompo(props) {
    return (
    <>
      <div className='border border-solid bg-[#00CED0] border-[#00CED0] rounded-xl  py-3 my-5'>
        
        <div className="h-full flex justify-evenly items-center flex-row">   
          {/* Titres et photo */}
          <div className="w-[50%] h-full flex justify-evenly px-5">
            <img 
              className="border border-solid border-black rounded-full h-10 w-10"
              src={props.pfp} 
              alt="pfp" 
            />
            <p className="p-2 font-semibold">{props.name}</p>
          </div>
          {/* Date et patient */}
          <div className="w-[50%] h-full flex justify-evenly">
            <p className="font-semibold">{props.date}</p>
            <p className="font-semibold">{props.heure}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notifcompo;
