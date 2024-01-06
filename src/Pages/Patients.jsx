import React from 'react';
import { useEffect  , useState } from 'react';
import axios from 'axios'
import SearchLogo from '../assets/search.svg';
import AddLogo from '../assets/Add.png';
import Patient from '../Components/Patient';
import OptionsLogo from "../assets/options.png"
import Navbar from "../Components/Navbar";
import { Link } from 'react-router-dom';

const Patients = () => {
  // These are for testing,
  // If we run backend server we will use the fetching function with axios
    const patients = [
    { id: 1, name: 'John Doe', birthDate: '12/30/1990', image: 'path-to-image-1.jpg' },
    { id: 2, name: 'Jane Smith', birthDate: '05/15/1985', image: 'path-to-image-2.jpg' },
    { id: 3, name: 'John Doe', birthDate: '12/30/1990', image: 'path-to-image-1.jpg' },
    { id: 4, name: 'Jane Smith', birthDate: '05/15/1985', image: 'path-to-image-2.jpg' },
    { id: 5, name: 'John Doe', birthDate: '12/30/1990', image: 'path-to-image-1.jpg' },
    { id: 6, name: 'Jane Smith', birthDate: '05/15/1985', image: 'path-to-image-2.jpg' },
    { id: 7, name: 'John Doe', birthDate: '12/30/1990', image: 'path-to-image-1.jpg' },
    { id: 8, name: 'Jane Smith', birthDate: '05/15/1985', image: 'path-to-image-2.jpg' },
    { id: 9, name: 'John Doe', birthDate: '12/30/1990', image: 'path-to-image-1.jpg' },
    { id: 10, name: 'Jane Smith', birthDate: '05/15/1985', image: 'path-to-image-2.jpg' },
    { id: 11, name: 'John Doe', birthDate: '12/30/1990', image: 'path-to-image-1.jpg' },
    { id: 12, name: 'Jane Smith', birthDate: '05/15/1985', image: 'path-to-image-2.jpg' },
    { id: 13, name: 'John Doe', birthDate: '12/30/1990', image: 'path-to-image-1.jpg' },
    { id: 14, name: 'Jane Smith', birthDate: '05/15/1985', image: 'path-to-image-2.jpg' },
];



    const [Patients , setPatients] = useState([])
    console.log(Patients)

     /* Function to fetch all the patients with axios  */
     useEffect(() => {
        const apiUrl = 'http://localhost:3004/Doctors/Doctor/Patient';
       // console.log("request") ;
        axios.get(apiUrl)
        
             .then((response) => {
             // console.log("end") ;

              setPatients(response.data);
             })
             .catch((error) => {
                 console.error('Error fetching data:', error);
             });
     }, []);

  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
        <Navbar></Navbar>

        <div className="px-[7vw]">
            

            <h1 className="text-5xl font-bold my-4">Mes patients:</h1>

            <div className='my-6 flex gap-10  items-center space-x-40'>
                <div className='  flex items-center justify-start'> 
                    <Link to="/AddPatient">       
                        <div className="flex items-center px-4 py-2 rounded-2xl bg-[#00CED0]">
                            <img className="w-6 h-6" src={AddLogo} alt="Add Logo" />
                            <h1>Ajouter un patient</h1>
                        </div>
                    </Link>
                </div>

                <div className='flex flex-1  justify-center items-center space-x-2'>
                    <img
                        className='w-6 h-6'
                        src={OptionsLogo}
                        alt="option to filter"
                    />

                    <div className="w-full relative cursor-pointer h-[40px]">
                        <input
                            className="h-full w-full py-2 px-12 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
                            name="searched"
                            type="text"
                            placeholder="Rechercher"    
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <img
                            className="absolute inset-y-0 left-0 flex items-center pl-4 w-10 h-10"
                            src={SearchLogo}
                            alt="Search Logo"
                        />
                    </div>
                </div>
            </div> 

        <div className="flex flex-col space-y-4 w-full max-h-[60vh] overflow-y-auto mt-4">
            {filteredPatients.map((patient) => (
            <Patient key={patient.id} name={patient.name} birthDate={patient.birthDate} image={patient.image} />
            ))}
        </div>
        </div>
    </>
  );
};

export default Patients;
