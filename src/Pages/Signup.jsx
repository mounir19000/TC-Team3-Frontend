import Signupcard from "../Components/SingupCard"
import Logo from "../assets/Logo.svg"


const Signup  =  () => {
    return ( 
    <>
        <div className="flex flex-col items-center justify-center h-[100vh]">
            <img src={Logo} alt="Doc Space Logo" />
            <Signupcard></Signupcard>
        </div>
    </>
    );
}
 
export default Signup;