import React from "react";

const Support = () => {
  return (
    <div className="w-full relative shadow-md bg-gradient-to-r from-orange to-white h-[23rem] lg:h-[29rem] overflow-hidden flex flex-col items-center justify-start pt-0 pb-28 px-6 md:px-12 lg:px-24 box-border gap-4 text-center text-2xl text-black font-roboto">
      <div className="text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] absolute top-0 left-0 w-full h-24 flex items-center justify-center z-0">
        <div className="py-[1rem] px-5 w-full max-w-screen-lg relative leading-[1.4] font-bold flex items-end justify-center h-[6.2rem] shrink-0">
          Nie wiesz którą salę wybrać? Zgłoś się do nas!
        </div>
      </div>
      <div className="px-5 text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] w-full max-w-screen-xl absolute top-24 md:top-32 lg:top-40 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 z-1">
        <div className="flex-1 text-left leading-relaxed font-medium mb-4 md:mb-0">
          <p className="m-0">Jak dokonać wyboru właściwie?</p>
          <ol className="m-0 pl-4 list-disc text-lg">
            <li>Określ termin konferencji</li>
            <li>
              Określ, jakiego rodzaju będzie organizowany przez Ciebie event
            </li>
            <li>Oszacuj liczbę uczestników</li>
            <li>Napisz do nas!</li>
          </ol>
        </div>
        <button className="flex items-center justify-center py-2 px-4 bg-orange font-bold text-lg rounded-lg border-4 border-transparent group transition-all duration-300 ease-in-out hover:border-black hover:text-white">
          CHCĘ DO WAS NAPISAĆ
        </button>
      </div>
    </div>
  );
};

export default Support;
