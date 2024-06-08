import React from 'react'

function Navbar() {
  return (
    <div className='w-10/12 mx-auto my-3 flex justify-between'>
        <div className='flex flex-0 items-center justify-center'>
        <img className="hover:scale-105 cursor-pointer " src='https://res.cloudinary.com/dvovtfe0s/image/upload/v1717814282/logo_euz2ce.png' alt='logo' />
        <div className='flex flex-shrink-0 items-center mx-10'>
        <ul className='font-clash text-xl'>
                <li className='flex space-x-4 font-medium transition ease-in-out'>
                    <a href='##' className='font-bold hover:text-Rasmalai hover:scale-105'>Home</a>
                    <a href='##' className='hover:text-Rasmalai hover:font-bold hover:scale-105'>About Us</a> 
                    <a href='##' className='hover:text-Rasmalai hover:font-bold hover:scale-105'>Pricing</a>
                    <a href='##' className='hover:text-Rasmalai hover:font-bold hover:scale-105'>Features</a>
                </li>
            </ul>
            </div>
        </div>
        <div className='bg-black text-white m-5 px-8 py-3 font-clash cursor-pointer rounded-sm hover:scale-105 hover:shadow-xl hover:bg-gray-900'>
            <button>Download</button>
        </div>
    </div>
  )
}

export default Navbar