import React from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";


function Modal({title, content, btnText, btnFunction}) {
  return (
    <>
     <div className=' fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex justify-center items-center'>
        <div className=" w-1/3 bg-white shadow-lg rounded-md p-4 ">
        <div className=' border-b py-3 flex items-center justify-between'>
            <div className=' text-2xl '> {title} </div>
            <IoMdCloseCircleOutline size={24} />

        </div>
      {/* https://www.youtube.com/watch?v=pdSviluj-5Y&ab_channel=BerkantKAYA */}
        </div>
        
     </div>
    </>
  )
}

export default Modal
