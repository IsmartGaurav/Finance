import React, { useState, useEffect, useRef } from "react";

function useInView(ref) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isInView;
}

function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  const leftImageRef = useRef(null);
  const bottomImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const preferredTextRef = useRef(null);

  const isLeftImageInView = useInView(leftImageRef);
  const isBottomImageInView = useInView(bottomImageRef);
  const isRightImageInView = useInView(rightImageRef);
  const isButton1InView = useInView(button1Ref);
  const isButton2InView = useInView(button2Ref);
  const isPreferredTextInView = useInView(preferredTextRef);

  useEffect(() => {
    // Add the fadeInPreferred class to the preferred text elements when the component mounts
    document.querySelectorAll(".fadeInPreferred").forEach((element) => {
      element.classList.add("fadeInPreferred");
    });
  }, []); // Run this effect only once when the component mounts

  return (
    <div className="flex wrap m-auto h-screen">
      <div className="w-7/12 flex-row relative">
        <div className="h-5/6 relative my-auto">
          <img
            ref={leftImageRef}
            className={`absolute w-8/12 h-4/6 object-contain overflow-hidden top-0 translate-x-2/4 -translate-y-10 ${
              isLeftImageInView ? "scroll-fadeInUp" : ""
            }`}
            src="https://res.cloudinary.com/dvovtfe0s/image/upload/v1717819672/left1_rulxyw.png"
            alt="#"
          />
          <div className="font-clash absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-11/12 m-auto ml-20 h-1/2">
            <p
              ref={preferredTextRef}
              className={`text-7xl text-black font-bold fadeInPreferred ${
                isPreferredTextInView ? "" : "invisible"
              }`}
            >
              Make The Best Financial Decisions
            </p>
            <p
              className={`mt-8 mb-5 text-xl ${
                isPreferredTextInView ? "fadeInPreferred" : ""
              }`}
            >
              Cum Et Convallis Risus Placerat Aliquam, Nunc.Scelerisque Aliquet{" "}
              <br />Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
              Porttitor.
            </p>
            <div className="flex items-center">
              <button
                ref={button1Ref}
                className={`px-6 py-3 bg-black text-white cursor-pointer rounded-md hover:bg-slate-900 hover:scale-105 ${
                  isButton1InView ? "scroll-fadeInUp" : ""
                }`}
              >
                Get Started →{" "}
              </button>
              <button
                ref={button2Ref}
                className={`cursor-pointer mx-4 flex items-center hover:font-semibold hover:bg-Rasmalai hover:ease-in-out hover:transition px-8 py-3 hover:rounded-md font-medium hover:text-white hover:scale-105 ${
                  isButton2InView ? "scroll-fadeInUp" : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered ? (
                  <img
                    className="w-4 h-4 mx-1"
                    src="https://img.icons8.com/ios-filled/50/FFFFFF/circled-play.png"
                    alt="circled-play"
                  />
                ) : (
                  <img
                    className="w-4 h-4 mx-1"
                    src="https://res.cloudinary.com/dvovtfe0s/image/upload/v1717829975/play-button_i0ea0k.png"
                    alt=""
                  />
                )}
                Watch Video
              </button>
            </div>
          </div>
        </div>
        <div className="h-2/5 w-11/12 ml-8 absolute bottom-0 left-0">
          <img
            ref={bottomImageRef}
            className={`object-contain -translate-y-5 ${
              isBottomImageInView ? "scroll-fadeInUp" : ""
            }`}
            src="https://res.cloudinary.com/dvovtfe0s/image/upload/v1717819665/left2_sfxfxr.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-5/12 flex-col m-auto overflow-hidden">
        <img
          ref={rightImageRef}
          className={`${isRightImageInView ? "scroll-fadeInUp" : ""}`}
          src="https://res.cloudinary.com/dvovtfe0s/image/upload/v1717819684/right_vdqrxs.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default HeroSection;
