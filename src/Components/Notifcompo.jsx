import Supprimer from "../assets/delete.svg";

function Notifcompo(props) {
  return (
    <>
      <div className='relative border border-solid border-[#00CED0] rounded-xl  py-3 my-5'>
        <img 
          className="absolute z-10 -top-3 -left-3 w-5 h-5 border border-solid border-black rounded-full"
          src={Supprimer}
          alt="Delete button" 
        />
        
        <div className="h-full flex justify-evenly items-center flex-row">   
          {/* Titres */}
          <div className="w-[50%] h-full px-5">
            <p>{props.titre}</p>
          </div>
          {/* Date et patient */}
          <div className="w-[50%] h-full flex justify-evenly">
            <p>{props.date}</p>
            <p>{props.heure}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notifcompo;
