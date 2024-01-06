import { useState } from "react";
import { FaLock, FaUnlock } from "react-icons/fa";

const SignupCard = () => {
    const [password1, setPassword1] = useState("");
    const [showPassword1, setShowPassword1] = useState(false);
    const [password2, setPassword2] = useState("");
    const [showPassword2, setShowPassword2] = useState(false);

    // Juste pour mettre l'erreur en muet
    console.log(password1)
    console.log(password2)

    return (
        <>
            <div className="max-w-[900px] w-full max-h-[700px] pt-16 pb-16 p-6 bg-[#F5F2F2] rounded-2xl shadow-md flex flex-col justify-center items-center">
                
                <div className="w-auto flex flex-col justify-center items-center mb-6">
                    <h1 className="text-5xl font-bold mb-4 text-[#00083E]">S`inscrire</h1>
                    <hr className="border-t-2 border-solid border-[#627E94] mb-2 w-full" />
                    <p className="text-[#627E94]">Veuillez remplir le formulaire pour continuer</p>
                </div>
                    
                <div className="w-full flex space-x-4">
                    <input
                        className="w-full h-12 my-2 py-2 px-4 border border-gray-300 rounded-2xl"
                        name="name"
                        type="text"
                        placeholder="Nom"
                    />
                    <input
                        className="w-full h-12 my-2 py-2 px-4 border border-gray-300 rounded-2xl"
                        name="prename"
                        type="text"
                        placeholder="Prénom"
                    />
                </div>

                <input
                    className="w-full h-12 my-2 py-2 px-4 border border-gray-300 rounded-2xl"
                    name="spetiality"
                    type="text"
                    placeholder="Spetialitée"
                />

                <input
                    className="w-full h-12 my-2 py-2 px-4 border border-gray-300 rounded-2xl"
                    name="mail"
                    type="email"
                    placeholder="Email"
                />

                <div className="w-full flex space-x-4">
                    {/* First Password */}
                    <div className="relative flex-1 my-2 h-12">
                        <input
                            className="w-full h-full py-2 px-4 border border-gray-300 
                            rounded-2xl pr-10"
                            name="pass1"
                            type={showPassword1 ? "text" : "password"}
                            placeholder="Mot de passe"
                            onChange={(e) => setPassword1(e.target.value)}
                        />
                        <span
                            className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
                            onClick={() => setShowPassword1((prev) => !prev)}
                        >
                            {showPassword1 ? <FaUnlock /> : <FaLock />}
                        </span>
                    </div>

                    {/* Second Password */}
                    <div className="relative flex-1 my-2 h-12">
                        <input
                            className="w-full h-full py-2 px-4 border border-gray-300 rounded-2xl pr-10"
                            name="pass2"
                            type={showPassword2 ? "text" : "password"}
                            placeholder="Confirmer le mot de passe"
                            onChange={(e) => setPassword2(e.target.value)}
                        />
                        <span
                            className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
                            onClick={() => setShowPassword2((prev) => !prev)}
                        >
                            {showPassword2 ? <FaUnlock /> : <FaLock />}
                        </span>
                    </div>
                </div>




                <button
                    className="bg-[#00CED0] w-full h-12 text-white  mt-4 rounded-2xl hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                    onClick={() => console.log("Login clicked")}
                >
                    Se connecter
                </button>
            </div>
        </>
    );
};

export default SignupCard;
