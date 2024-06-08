import React from "react";
 // Assuming the CSS file containing the animation is named Second.css

function Second() {
  return (
    <div className="flex justify-between items-center font-clash fadeIn">
      <div className="w-4/6 mt-40">
        <img
          className="h-auto"
          src="https://res.cloudinary.com/dvovtfe0s/image/upload/v1717836041/block2imag1_el9bqs.png"
          alt=""
        />
      </div>
      <div className="w-1/2 relative flex justify-end items-start mt-28">
        <div className="absolute text-black translate-y-1/2 mr-4">
          <h6 className="font-clash text-2xl text-Rasmalai">FEATURES</h6>
          <h1 className="font-clash text-5xl font-bold my-2">Uifry Premium</h1>
          <h3 className="flex font-semibold mt-8 text-lg">
            <img className="mr-2" src="https://res.cloudinary.com/dvovtfe0s/image/upload/v1717837055/star-05_xznccq.png" alt="" />Budgeting Intervals
          </h3>
          <p className="my-3">
            Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>
          <h3 className="flex font-semibold mt-8 text-lg">
            <img className="mr-2" src="https://res.cloudinary.com/dvovtfe0s/image/upload/v1717837054/cube-02_fhnc0f.png" alt="" />Budgeting Intervals
          </h3>
          <p>
            Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>
          <h3 className="flex font-semibold mt-8 text-lg">
            <img className="mr-2" src="https://res.cloudinary.com/dvovtfe0s/image/upload/v1717837047/cube-04_tpoij5.png" alt="" />Budgeting Intervals
          </h3>
          <p>
            Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>
        </div>
        <img
          className="h-3/4"
          src="https://res.cloudinary.com/dvovtfe0s/image/upload/v1717836049/block2img2_dtmnlp.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Second;
