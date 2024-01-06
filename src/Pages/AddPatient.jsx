import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const AddPatient = () => {
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [profession, setProfession] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isChild, setIsChild] = useState(false);

  const handleAddPatient = () => {
    // Add logic here to handle adding a patient
    console.log('Adding patient:', {
      patientName,
      patientAge,
      dateOfBirth,
      placeOfBirth,
      profession,
      address,
      phoneNumber,
      isChild,
    });
    // You can connect this to your backend or update state as needed
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 px-[7vw]">
        <h2 className="font-bold mb-4 text-5xl">Add Patient</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Rounded div for Name and Age */}
          <div className="col-span-2 rounded-md overflow-hidden bg-gray-100 p-4 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patientName">
                Patient Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="patientName"
                type="text"
                placeholder="Enter patient name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patientAge">
                Patient Age
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="patientAge"
                type="number"
                placeholder="Enter patient age"
                value={patientAge}
                onChange={(e) => setPatientAge(e.target.value)}
              />
            </div>
          </div>
          {/* Container for other fields */}
          <div className="col-span-2 rounded-md overflow-hidden bg-gray-100 p-4 mb-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateOfBirth">
                  Date of Birth
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="dateOfBirth"
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="placeOfBirth">
                  Place of Birth
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="placeOfBirth"
                  type="text"
                  placeholder="Enter place of birth"
                  value={placeOfBirth}
                  onChange={(e) => setPlaceOfBirth(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profession">
                  Profession
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="profession"
                  type="text"
                  placeholder="Enter profession"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                  Address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="address"
                  type="text"
                  placeholder="Enter address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phoneNumber"
                  type="tel"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Is the patient a child?
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isChild"
                    name="isChild"
                    className="form-checkbox h-5 w-5 text-blue-500"
                    checked={isChild}
                    onChange={() => setIsChild(!isChild)}
                  />
                  <label className="ml-2 text-gray-700" htmlFor="isChild">
                    Yes, the patient is a child
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleAddPatient}
        >
          Add Patient
        </button>
      </div>
    </div>
  );
};

export default AddPatient;
