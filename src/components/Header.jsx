import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { modalFunction } from "../redux/modalSlice";

function Header() {
  const dispatch = useDispatch();

  return (
    <>
      <div className=" flex items-center justify-between bg-purple-800 text-white px-4 py-4 ">
        <div className="text-3xl text-yellow-400 font-bold">React Uygulama</div>
        <div className=" flex items-center  gap-5" >
          <div className=" text-black">
            <select name="" id="" className=" h-10 rounded-lg">
              <option value="artan">Artan</option>
              <option value="azalan">Azalan</option>
            </select>
          </div>
          <div>
            <input className=" h-10 rounded-lg w-72 text-center px-4" type="text" placeholder="uygun anahtar kelimeyi giriniz" / >
          </div>
          <div onClick={()=>dispatch(modalFunction())} className=" bg-purple-900 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
            <IoMdAddCircleOutline size={25}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
