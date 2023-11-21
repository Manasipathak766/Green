import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/Group 46@2x.png";

const Header = () => {
  return (
    <div className="fixed top-0 right-0 z-50 m-4">
      <Link to={""}>
        <img src={image} alt="" className="h-12" />
      </Link>
    </div>
  );
};

export default Header;
