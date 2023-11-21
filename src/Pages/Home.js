import React from "react";
import BottomBar from "../Component/BottomBar";
import Dashboard from "../Component/Dashboard";
import Header from "../Component/Header";
import pic from "../assets/moptro logo@2x.png";

const Home = () => {
  return (
    <div className="pt-16 bg-black min-h-[calc(100vh)]">
      <Header />
      <div
        className="absolute top-200 left-1/2 transform -translate-x-1/2 w-71 h-70 bg-transparent bg-no-repeat bg-center"
        style={{ mixBlendMode: "normal", opacity: 1 }}
      >
        <img src={pic} alt="" className="w-full h-full object-cover" />
      </div>
      <div
  className="absolute top-60 left-1/2 transform -translate-x-1/2  text-center font-bold text-white text-opacity-84"
  style={{
    fontSize: '18px',
    lineHeight: '25px',
    letterSpacing: '0.01px',
    color: '#FFFFFFB3',
    opacity: 0.84,
  }}
>
  Employee Productivity Dashboard
</div>


<Dashboard/>
<BottomBar/>

    </div>
  );
};

export default Home;
