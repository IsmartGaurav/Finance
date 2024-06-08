import React from "react";

const Fifth = () => {
  return (
    <div className=" font-clash">
    <div className="top-0 flex justify-center -translate-y-56 flex-col items-center">
        <h4 className="font-medium text-3xl">TESTIMONIAL</h4>
        <h1 className="font-bold text-5xl">What Our Users Say About Us?</h1>
    </div>
      <div className="flex justify-between ">
        <div className="w-7/12 -translate-y-1/4 ">
          <img
            src="https://res.cloudinary.com/dvovtfe0s/image/upload/v1717842720/testin_h9nmtu.png"
            alt=""
          ></img>
        </div>
        <div className="w-5/12 mt-40 -translate-y-1/4 mr-auto">
          <h1 className="font-bold text-3xl flex items-center mb-8 mr-24">
            The Best Financial Accounting App Ever!
          </h1>
          <p className="text-xl mr-24">
            Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies.
            In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus,
            Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse
            Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien,
            Suspendisse Aliquam.
          </p>
          <div className="flex jus">
          <img className="h-20 w-20 mt-5 mb-5 hover:scale-105" src="https://res.cloudinary.com/dvovtfe0s/image/upload/v1717845039/Group_28_k3gs0i.png" alt="" />
          </div>
          <p className="font-bold text-2xl hover:text-Rasmalai">Nick Joans</p>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
