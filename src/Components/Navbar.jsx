import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import Notif from "../assets/Notif.png";
import Profile from "../assets/Profile.png"

const Navbar = () => {
  return (
    <div className='h-[90px]'>
      <div className="flex flex-row items-center justify-evenly w-full h-[90px]">
        <img src={Logo} alt="Logo" className="h-10" />
        <Link to="/patients">
          <button className="text-gray-500">Patients</button>
        </Link>
        <Link to="/planning">
          <button className="text-gray-500">Planning</button>
        </Link>
        <Link to="/historique">
          <button className="text-gray-500">Historique</button>
        </Link>
        <Link to="/Notifications">
          <img src={Notif} alt="Notif" style={{ cursor: 'pointer' }} />
        </Link>
        <Link to="/profile">
          <button className="flex flex-row items-center border border-gray-300 rounded px-2 py-1">
            <img src={Profile} alt="Icon" />Profile
          </button>
        </Link>
      </div>
      <div className="h-0.5 border border-gray-300"></div>
    </div>
  );
};

export default Navbar;
