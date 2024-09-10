import React from "react";
import logo from "../assets/sale_rezerwacje_logo.png";
const Header = () => {
  return (
    <div className="w-full h-[70px] bg-white border-b">
      <img className="m-auto py-[17px]" src={logo} />
    </div>
  );
};

export default Header;
