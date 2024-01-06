import { Link } from 'react-router-dom';

const Patient = (props) => {
    return (
        <div className="flex justify-between items-center h-26 bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="flex space-x-4 items-center h-full">
                <img 
                    className="w-10 h-10 rounded-full"
                    src={props.image} 
                    alt="Patient Avatar"
                />
                <h1 className="text-lg font-semibold">{props.name}</h1>
            </div>
            <div className="h-full">
                <p>Date de naissance : {props.birthDate}</p>
            </div>
            <Link to="/PatientInfo">
                <div className="bg-[#00CED0] w-auto h-full px-4 py-2 rounded-md">
                    <p className="text-white text-center">Plus d`info</p>
                </div>
            </Link> 
        </div>
    );
}


export default Patient;