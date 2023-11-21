import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, UsersIcon } from '@heroicons/react/20/solid'; // Import Tailwind icons
import "./Style.css"

const BottomBar = () => {
    return (
      <div className="bottom-bar flex justify-center fixed w-full">
        <Link to="/home" className="text-gray-600 hover:text-gray-900 mr-12">
          <HomeIcon className="h-8 w-8" />
        </Link>
        <Link to="/employees" className="text-gray-600 hover:text-gray-900 ">
          <UsersIcon className="h-8 w-8" />
        </Link>
        
      </div>
    );
  };

export default BottomBar;