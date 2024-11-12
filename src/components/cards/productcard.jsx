import React from 'react'
import ItemImg from "../../assets/images/firstshow/Yoghurt.png"
// import { ToastContainer, toast } from 'react-toastify';


function Productcard({item}) {
  return (
    <>
    <div className='text-center bg-  shadow-sm w-[30vmin] h-[40vmin] ' onClick={() => {
      notify;
    }}>
    <div className='h-[60%] '>
<img className='m-auto' src={item.image} alt="" />

    </div>

    <div className='p-5'>

      <h2 className='text-lg font-bold'>{item.title}</h2>
      <p>{item.description}</p>
      <h2 className='text-md font-bold text-emerald'>{item.price}</h2>
    </div>

    </div>
    </>
  )
}

export default Productcard
