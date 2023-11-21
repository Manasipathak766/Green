import React, { useState } from 'react';
import BottomBar from '../Component/BottomBar';
import Header from '../Component/Header';
import SearchBar from '../Component/SearchBar';
import companyLogo from '../assets/moptro logo.jpg'; // Replace this with your image path

const Employee = () => {
  const employeesData = [
    { id: 1, name: 'Arjun', dob: '16-11-2000', role: 'Software Engineer' },
    { id: 2, name: 'Mahesh', dob: '15-01-2000', role: 'Web Developer' },
    // ... add more employees as needed
  ];

  const [employees, setEmployees] = useState(employeesData);

  const handleSearch = (searchValue) => {
    const filteredEmployees = employeesData.filter((employee) =>
      employee.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setEmployees(filteredEmployees);
  };

  return (
    <div className='pt-16 bg-black min-h-[calc(100vh)]'>
      <Header/>
      <div className="bg-gray-900 text-white min-h-screen p-4">
        <div className="flex flex-col items-center pb-6">
          <img src={companyLogo} alt="Company Logo" className="w-24 h-24 mb-2" />
          <SearchBar onChange={handleSearch} />
        </div>
        <div className="space-y-4">
          <div className="flex flex-col items-center space-y-4">
            {employees.map((employee, index) => (
              <div
                key={employee.id}
                className="relative w-full sm:w-2/3 md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="absolute top-2 right-2 text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center border-2 border-black">
                  {index + 1}
                </div>

                <div className="font-semibold text-lg mb-2">EMP ID : {employee.id}</div>
                <div>Name : {employee.name}</div>
                <div>DOB: <span className='text-orange-500'>{employee.dob}</span></div>
                <div>Role: <span className='text-green-500'>{employee.role}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default Employee;