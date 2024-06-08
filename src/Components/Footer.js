import React from 'react';

function Footer() {
  return (
    <div className='w-11/12 mx-auto mt-40 '>
      <footer className= "bg-white text-black">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <h1 className="max-w-lg text-xl font-semibold tracking-tight text-black xl:text-2xl dark:text-black">Subscribe our newsletter to get update.</h1>
              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-black dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />
                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Subscribe
                </button>
              </div>
            </div>
            <div>
              <p className="font-semibold text-black">Quick Link</p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <a href="##" className=" transition-colors duration-300 text-black dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                <a href="##" className=" transition-colors duration-300 text-black dark:hover:text-blue-400 hover:underline hover:text-blue-500">About Us</a>
                <a href="##" className=" transition-colors duration-300 text-black dark:hover:text-blue-400 hover:underline hover:text-blue-500">Blog</a>
              </div>
            </div>
            <div>
              <p className="font-semibold text-black">Product</p>
              <div className="flex flex-col items-start mt-5 space-y-2">
                <a href="##" className=" transition-colors duration-300 text-black dark:hover:text-blue-400 hover:underline hover:text-blue-500">Take a Tour</a>
                <a href="##" className=" transition-colors duration-300 text-black dark:hover:text-blue-400 hover:underline hover:text-blue-500">Live Chat</a>
                <a href="##" className=" transition-colors duration-300 text-black dark:hover:text-blue-400 hover:underline hover:text-blue-500">Reviews </a>
              </div>
            </div>
            
          </div>
          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />
          <div className="flex items-center justify-center">
            <a href="##">
              <img className="w-auto h-10 items-center justify-center flex" src="https://res.cloudinary.com/dvovtfe0s/image/upload/v1717814282/logo_euz2ce.png" alt="" />
</a>
            </div>
          </div>
      </footer>
    </div>
  );
}

export default Footer;
