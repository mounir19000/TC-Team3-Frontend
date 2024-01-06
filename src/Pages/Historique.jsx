import SearchLogo from "../assets/search.svg";
import Navbar from "../Components/Navbar";


const  Historique = () => {
    return ( 
    <div>
        <Navbar></Navbar>

        <div className="relative cursor-pointer h-[40px]">
            <input
                className="w-full h-full py-2 px-8 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500 text-center"
                name="searched"
                type="text"
                placeholder="Rechercher"
            />
            <img 
                className="absolute inset-y-0 left-0 flex items-center pl-4 w-10 h-10"
                src={SearchLogo}  
            />
        </div>

        
        


    </div>
    );
}
 
export default Historique;