import React from 'react';
import dollerImg from "../../assets/Currency.png"

const Navbar = () => {
    return (
      <div>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="flex-none">
            <button className="flex justify-between btn  font-bold text-xl ">
                0 Coins
              <img src={dollerImg} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
};

export default Navbar;