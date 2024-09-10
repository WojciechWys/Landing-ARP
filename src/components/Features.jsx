import React from "react";
import food from "../assets/food.jpg";
import equipment from "../assets/equipment.jpg";
import entertainment from "../assets/entertainment.jpg";

const FeatureCard = ({ image, title, description }) => (
  <div className="flex-1 flex flex-col items-start justify-start">
    <img
      className="w-[30rem] h-[15.625rem] object-cover"
      alt={title}
      src={image}
    />
    <div className="mt-4 text-center leading-[140%] text-[1.25rem] underline">
      {title}
    </div>
    <div className="mt-2 text-justify text-[1rem]">{description}</div>
  </div>
);

const Features = () => {
  return (
    <div className="w-full relative bg-grey h-full overflow-hidden flex flex-col items-center justify-start pt-0 pb-[7rem] px-5 md:px-8 lg:px-12 box-border gap-[2rem] text-center text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] text-white font-roboto">
      <div className="w-full max-w-screen-lg relative leading-[1.4] font-bold flex items-end justify-center h-[6.2rem] shrink-0">
        Kompleksowa obsługa konferencji od A do Z
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-8">
        <FeatureCard
          image={food}
          title="Usługi gastronomiczne"
          description="Catering lub organizacja przerwy kawowej."
        />
        <FeatureCard
          image={equipment}
          title="Wyposażenie specjalistyczne"
          description="Umożliwiamy dostęp również do sprzętu takiego jak pracownie komputerowe, kosmetyczne czy stomatologiczne."
        />
        <FeatureCard
          image={entertainment}
          title="Rozrywki"
          description="Organizujemy również nietypowe atrakcje i umożliwiamy dostęp do sal sportowych, miejsc prób artystycznych, ścianek wspinaczkowych, przestrzeni przygotowanych pod warsztaty kulinarne."
        />
      </div>
    </div>
  );
};

export default Features;
