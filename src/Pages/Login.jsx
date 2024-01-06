import Logincard from "../Components/LoginCard"
import Logo from "../assets/Logo.svg"


const Login  =  () => {
    return ( 
    <>
        <div className="flex flex-col items-center justify-center h-[100vh]">
            <img src={Logo} alt="Doc Space Logo" />
            <Logincard></Logincard>
        </div>
    </>
    );
}
 
export default Login;