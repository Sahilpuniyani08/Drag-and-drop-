import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full  shadow-sm  rounded-es-xl rounded-ee-xl bg-[#ffffff]">
      <div className="flex items-center justify-between h-[10vh] p-6 ">
        <div className="flex items-center gap-3 ">
          <div>
            <IoArrowBackOutline size={"20px"} color="inherit" />
          </div>
          <h2 className="font-semibold text-xl ">Run Workout</h2>
          <div>
            <FiEdit2 size={"20px"} color="gray" />
          </div>
        </div>
        <div className="flex items-center">
            <button className="bg-gradient-to-r from-[#5946eb]  to-[#7a35ea] text-sm font-medium text-white py-2 px-3 rounded-full">
              Save Workout
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
