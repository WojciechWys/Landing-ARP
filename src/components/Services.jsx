import React from "react";
import map from "../assets/map.jpg";

const Services = () => {
  return (
    <div className="w-full relative bg-white h-full overflow-hidden flex flex-col items-center justify-start pt-0 pb-[3rem] px-5 md:px-8 lg:px-12 box-border gap-[2rem] text-center text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] text-black font-roboto">
      <div className="w-full max-w-screen-lg relative leading-[1.4] font-bold flex items-end justify-center h-[6.2rem] shrink-0">
        Sale konferencyjne w całej Polsce stają przed Tobą otworem
      </div>
      <div className="w-full max-w-screen-lg flex flex-col lg:flex-row items-center justify-center gap-8 text-justify text-[1rem] md:text-[1.25rem] lg:text-[1.5rem]">
        <div className="flex-1 leading-[1.4] font-light">
          <p className="m-0">
            Przejrzyj naszą ofertę i wybierz salę konferencyjną odpowiadającą
            Twoim potrzebom w kilka minut!
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            W naszej bazie znajdują się miejsca z każdego zakątka Polski.
            Wszystkie umożliwiają Ci zorganizowanie profesjonalnego wydarzenia
            dzięki odpowiedniemu wyposażeniu.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Nasze usługi obejmują także profesjonalne i bardzo wszechstronne
            przygotowanie konferencji.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-center justify-center gap-4 text-black lg:text-left">
          <button className="relative flex items-center justify-center py-2 px-4 bg-orange font-bold text-lg rounded-lg border-4 border-transparent group transition-all duration-300 ease-in-out hover:border-black hover:text-white">
            WYSZUKAJ SALĘ SWOICH MARZEŃ
          </button>
          <img
            className="w-full max-w-[20rem] h-auto object-cover"
            alt="Map"
            src={map}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
