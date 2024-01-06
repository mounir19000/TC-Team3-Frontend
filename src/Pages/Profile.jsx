import Profilepic from "../assets/Profile.png";
import Changepfp from "../assets/add.png";
import Navbar from "../Components/Navbar";

const Profile = () => {
  return (
    <>
      <div className="h-[100vh] flex flex-col">
        <Navbar></Navbar>

        <div className="px-[4vw] h-full flex items-center justify-center flex-1">
          <div className="px-20 py-8 flex-1 relative bg-[#F5F2F2] p-5 rounded-xl">{/*  The big box */}
            <div className="absolute -top-10 right-24 sm:-top-20 sm:right-24">
              <div className="relative">
                <img
                  className="w-20 h-20 rounded-full sm:w-40 sm:h-40"
                  src={Profilepic}
                  alt="PFP"
                />
                <img
                  className="w-5 h-5 absolute bottom-0 right-0 sm:w-10 sm:h-10"
                  src={Changepfp}
                  alt="ChangePfp"
                />
              </div>
            </div>

            <h1 className="font-semibold text-5xl px-5 pb-4">Profile</h1>

            <div className="flex flex-row items-center justify-evenly">
              <div className="grid grid-cols-1 gap-y-3 w-full sm:w-1/3 p-5">
                <div className="bg-[#FAFAFA] px-5 py-2 rounded-xl font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  <h1>Nom :</h1>
                </div>
                <div className="bg-[#FAFAFA] px-5 py-2 rounded-xl font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    <h1>Prenom : </h1>
                </div>
                <div className="bg-[#FAFAFA] px-5 py-2 rounded-xl font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    <h1>Spetialitée : </h1>
                </div>
                <div className="bg-[#FAFAFA] px-5 py-2 rounded-xl font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    <h1>Addresse cabinet : </h1>
                </div>
                <div className="bg-[#FAFAFA] px-5 py-2 rounded-xl font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    <h1>Age : </h1>
                </div>
                <div className="bg-[#FAFAFA] px-5 py-2 rounded-xl font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    <h1>Experience : </h1>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-y-3 w-full sm:w-2/3 p-5">
                <input
                  className="px-5 py-2 rounded-xl bg-[#FAFAFA] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                  type="text"
                  name="NomProfile"
                  placeholder={"props.name"}
                />
                 <input 
                    className="px-5 py-2 rounded-xl bg-[#FAFAFA] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                    type="text"
                    name="PrenomProfile"
                    placeholder={"props.prenom"}
                />
                <input 
                    className="px-5 py-2 rounded-xl bg-[#FAFAFA] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                    type="text"
                    name="SpetialiteeProfile"
                    placeholder={"props.spetialite"}
                />
                <input 
                    className="px-5 py-2 rounded-xl bg-[#FAFAFA] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                    type="text"
                    name="AddressProfile"
                    placeholder={"props.address"}
                />
                <input 
                    className="px-5 py-2 rounded-xl bg-[#FAFAFA] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                    type="text"
                    name="AgeProfile"
                    placeholder={"props.age"}
                />
                <input 
                    className="px-5 py-2 rounded-xl bg-[#FAFAFA] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                    type="text"
                    name="ExperienceProfile"
                    placeholder={"props.exp"}
                />
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <div className="flex justify-evenly w-full sm:w-2/3 px-5 space-x-4">
                <button className="w-full h-12 py-2 bg-[#00CED0] text-black rounded-xl hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                  Modifier le profile
                </button>
                <button className="w-full h-12 py-2 bg-[#00CED0] text-black rounded-xl hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                  Changer le mot de passe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
