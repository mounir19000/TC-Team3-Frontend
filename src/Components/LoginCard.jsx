import { useState } from "react";
import { FaLock, FaUnlock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Logincard = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    console.log(password)

    return (
        <>
            <div className="max-w-[600px] w-full max-h-[700px] pt-16 pb-16 p-6 bg-[#F5F2F2] rounded-2xl shadow-md flex flex-col justify-center items-center">
                <div className="w-auto flex flex-col justify-center items-center mb-6">
                    <h1 className="text-5xl font-bold mb-4 text-[#00083E]">Se connecter</h1>
                    <hr className="border-t-2 border-solid border-[#627E94] mb-2 w-full" />
                    <p className="text-[#627E94]">Veuillez remplir le formulaire pour continuer</p>
                </div>
                    
                <div className="w-full flex flex-col">
                    <input
                        className="w-full h-12 mt-2 mb-3 py-2 px-4 border border-gray-300 rounded-2xl"
                        name="mail"
                        type="email"
                        placeholder="Email ou identifiant"
                    />


                    <p className="text-[#736A6A] cursor-pointer self-end">Mot de passe oublié?</p>


                    <label className=" block relative h-12">
                        <input
                            className="w-full h-full py-2 px-4 border border-gray-300 rounded-2xl"
                            name="pass"
                            type={showPassword ? "text" : "password"}
                            placeholder="Mot de passe"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                            className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? <FaUnlock /> : <FaLock />}
                        </span>
                    </label>
                </div>

                <div className="flex self-start items-center ml-2 mt-4 text-[#736A6A]">
                    <input type="checkbox" className="mr-2" />
                    <p>Se rappeler de moi</p>
                </div>

                <Link to="/Patients" className="w-full  ">
                    <button
                        className="bg-[#00CED0] w-full h-12 text-white  mt-1 rounded-2xl hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                        onClick={() => console.log("Login clicked")}
                    >
                        Se connecter
                    </button>
                </Link>
                    

                <div className="flex items-center mt-4">
                    <p className="mr-2">Vous n’avez pas de compte?</p>
                    <p className="text-[#00CED0] cursor-pointer">S’inscrire</p>
                </div>
            </div>
        </>
    );
};

export default Logincard;
