import React from "react";

const Advertisement: React.FC = () => {
  return (
    <div className="advertisement relative flex h-[511px]  w-[237px] flex-col gap-5 bg-light-secondary p-2 dark:bg-dark-secondary">
      <img
        className="h-[218px] w-[217px]"
        src="/playeriamges/adver.jpg"
        alt="advertisement"
      />
      <div className="p-2">
        <h4 className="mb-1 text-xl font-semibold text-[#222D3A] dark:text-dark-text">
          Advertisement title
        </h4>
        <p className="text-[12.8px] font-normal text-light-paragraph dark:text-dark-paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est iste
          inventore ratione? Aut ipsam amet cum, inventore quibusdam iste. Ab
          molestias iure rem aliquam illum at sunt sequi ullam! Suscipit debitis
          voluptatum numquam sapiente pariatur sequi ullam Aut ipsam amet Aut
          ipsam amet.
        </p>
      </div>
    </div>
  );
};

export default Advertisement;
