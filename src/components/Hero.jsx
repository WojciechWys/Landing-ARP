import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-full bg-center bg-cover bg-[url('./assets/heroBg.jpg')]">
      <div className="relative w-full h-full flex flex-col justify-center items-center text-center text-white font-roboto bg-black bg-opacity-50">
        <div className="relative max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-[4rem] md:text-[5rem] lg:text-[6rem] leading-[140%] font-medium">
            MIEJSCE MA ZNACZENIE.
          </h1>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 pb-8">
          <div className="absolute top-[25%] left-0 right-0"></div>
          <div className="relative text-[1.5rem] md:text-[1rem] lg:text-[2rem] leading-[140%] font-medium mx-4">
            <p className="m-0">
              <span className="text-white">{`Chcesz zorganizować `}</span>
              <span className="text-black bg-orange">niezapomniane</span>
              <span> przedsięwzięcie, ale nie wiesz, jak zacząć?</span>
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              <span className="text-black bg-orange">Zgłoś się do nas</span>
              <span>
                {" "}
                - wspólnie wybierzemy odpowiednią salę i zaplanujemy wszystko
                krok po kroku!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
