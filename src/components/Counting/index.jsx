"use client";
import CountUp from "react-countup";

export const Counting = ({ count, text, icon }) => {
  return (
    <div className="grid gap-1 place-items-center">
      <div className="text-6xl p-3 rounded-3xl box-content border-blue-400 border text-[#034d94] hover:bg-[#034d94] hover:text-white transition ">
      {icon}
      </div>
      <div className="flex items-center gap-1 text-2xl">
        <CountUp end={count} className="text-xl md:text-3xl text-[#034d94]" />
        <span className="text-[#034d94]">+</span>
      </div>
      <p className="text-xl text-center text-black">{text}</p>
    </div>
  );
};
