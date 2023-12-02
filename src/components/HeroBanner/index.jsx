import React from "react";

export const HeroBanner = ({ heroImg, heroTitle }) => {
  return (
    <div className="h-60 w-full">
      <p>{heroTitle}</p>
      <img src={heroImg} alt="#" className="" />
    </div>
  );
};
