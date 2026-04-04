import React from 'react';
import dollerImg from "../../assets/Currency.png"
import logo from "../../assets/logo.png"

const Navbar = ({coin}) => {
  // console.log(coin);
    return (
      <div className="max-w-7xl mx-auto">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <img src={logo} alt="" />
          </div>
          <div className="flex-none">
            <button className="flex justify-between btn  font-bold text-xl ">
             {coin}
              <img src={dollerImg} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
};

export default Navbar;