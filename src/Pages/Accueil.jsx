import { Link } from 'react-router-dom';
import Doctorpic from "../assets/Doctor.png"
import Logo from "../assets/Logo.png"

const Accueil = () => {

    return (
        <>
        <div className="flex flex-col h-[100vh]">
            <div className=" flex flex-row items-center justify-between w-full px-16 py-2 ">
                <img src={Logo} alt="Logo" className="w-62 h-28 "/>
                <div className="flex flex-row justify-center items-center gap-6">
                    <Link to="/Signup">
                        <button className="teal-color">S`inscrire</button>
                    </Link>
                    <Link to="/Login">
                        <button className="w-52 h-10 px-3 py-1 font-bold bg-[#00CED0] border-none
                     text-white rounded-lg">Se connecter</button>
                    </Link>     
                </div>
                
            </div>


            <div className=" flex-1 flex justify-between items-center mx-16 ">
            <div className="w-[50%] flex-col items-start space-y-10">
            <h3 className="text-[3.75rem] leading-tight font-bold my-4 " >
            Welcome to our  <br /><span className="text-[#00CED0]">Doctor</span> useful <br />website!
            </h3>
        
            <p className="gray-color text-[1.5rem] w-full pr-24 ">
            We are dedicated to providing high-quality medical care and personalized attention to your patients. Our website serves as a convenient platform for you to learn more about our practice, schedule appointments,and access valuable resources to support your journey.
            </p>

            <button className=" w-170 h-30 px-4 py-2 font-bold bg-white border 
            text-black border-[#00CED0] text-xl rounded-lg my-10 animate-bounce ">Rejoignez-nous !</button>
            </div>

            <div  className="w-[50%] flex justify-end items-center">
                <img src={Doctorpic} className="w-[40vw]" alt="doctor"/>
            </div>
            </div>
        </div>
         </>
        );
}
 
export default  Accueil ;