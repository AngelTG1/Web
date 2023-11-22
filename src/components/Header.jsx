import React, { useState } from "react";
import yo from '../assets/yo.jpg'
import logo from '../assets/logoLM.png'
import { useAuth } from "../context/AuthContext";

export default function Header({ onClick }) {
  // const [active, setActive ] = useState(false);




  return (
    <div>
      {/* Header */}
      <header className="  lg:hidden h-[80px] z-50  duration-300 ease-in-out  p-4 shadow-lg dark:bg-[#1E2139]  bg-[#5D17F0] flex items-center justify-end   ">
        {/* Logo img */}

        <img src={logo} className='h-[80px] absolute top-0 left-0' alt="logo-image" />
   

        {/* Right side */}
        <div className="  flex  items-center  ">
          {/* darkMode Button */}

          {/* {colorTheme === "light" ? <motion.img onClick={toggleDarkMode} initial={{ scale: 0.6, rotate: 90 }} animate={{ scale: 1, rotate: 360, transition }} whileTap={{ scale: 0.9, rotate: 15 }} src={moon} className='cursor-pointer h-6'
          />

            : <motion.img className='cursor-pointer h-7' onClick={toggleDarkMode} whileTap={{ scale: 0.9, rotate: 15 }} initial={{ rotate: 45 }} animate={{ rotate: 360, transition }} src={sun} />
          } */}

          <div className=" h-[80px] border-dotted border-l border-[#494e6e] mx-6"></div>

          <button onClick={onClick} className=" relative  ">
            {/* perfil */}
            <img src={yo} className="h-[50px] rounded-full" />
          </button>
        </div>
      </header>

      {/* SideBar */}
      <div className=" z-50 hidden lg:block ">
        <div className=" fixed overflow-hidden  z-50  w-[100px] rounded-r-3xl  flex-col  top-0 left-0 shadow-lg h-screen dark:bg-[#1E2139]  bg-[#373b53]">
          <div className="  h-full w-full flex flex-col justify-between items-center">
            {/* Logo */}
            {/* logo */}
            <img src={logo} className="relative w-full -top-1" />
  
            {/* Bottom Side */}
            <div>
              {/* {colorTheme === "light" ? 
              <motion.img onClick={toggleDarkMode} initial={{ scale: 0.6, rotate: 90 }} animate={{ scale: 1, rotate: 360, transition }} whileTap={{ scale: 0.9, rotate: 15 }} src={moon} className='cursor-pointer ml-8 h-6'
              />

                : <motion.img className='cursor-pointer ml-8 h-7' onClick={toggleDarkMode} whileTap={{ scale: 0.9, rotate: 15 }} initial={{ rotate: 45 }} animate={{ rotate: 360, transition }} src={sun} />
              } */}

              <div className=" w-[100px] border-dotted border-t border-[#494e6e] my-6"></div>

              <button onClick={onClick} className=" relative  ml-4 mb-4 cursor-pointer">
                {/* perfil */}
                <img src={yo} className="h-[50px] rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
