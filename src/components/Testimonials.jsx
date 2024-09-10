import React from "react";
import antiga from "../assets/antiga.jpg";
import dasl from "../assets/dasl.jpg";
import edukey from "../assets/edukey.jpg";
import expander from "../assets/expander.jpg";
import hs from "../assets/hs.jpg";
import itw from "../assets/itw.jpg";
import jsystems from "../assets/jsystems.jpg";
import leadenhall from "../assets/leadenhall.jpg";
import musicMore from "../assets/musicMore.png";
import oirp from "../assets/oirp.jpg";
import openedu from "../assets/openeducationgroup.jpg";
import vistula from "../assets/vistula.jpg";

const Testimonials = () => {
  return (
    <div className="w-full bg-white py-[40px]">
      <div className="md:max-w-[1480px] m-auto max-w-[600px]">
        <h1 className="text-center font-bold font-roboto text-[1.25rem] md:text-[1.5rem] lg:text-[2rem]">
          Dlaczego warto wybrać Salerezerwacje?
        </h1>
        <p className="py-[20px] text-center font-roboto font-medium text-[1rem] md:text-[1.25rem] lg:text-[1.5rem]">
          Służymy pomocą przy organizacji spotkań i eventów już od 2013 roku!{" "}
          <br /> Możemy się pochwalić współpracą z wieloma firmami, m.in.:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4 max-w-full place-items-center">
          <img src={antiga} />
          <img src={dasl} />
          <img src={edukey} />
          <img src={expander} />
          <img src={hs} />
          <img src={itw} />
          <img src={jsystems} />
          <img src={leadenhall} />
          <img src={musicMore} />
          <img src={oirp} />
          <img src={openedu} />
          <img src={vistula} />
        </div>
        <div className="text-center py-20 text-[1rem] md:text-[1.25rem] lg:text-[1.5rem]">
          <button className="py-2 px-4 bg-orange font-bold text-lg rounded-lg border-4 border-transparent group transition-all duration-300 ease-in-out hover:border-black hover:text-white">
            CHCĘ DO NICH DOŁĄCZYĆ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
