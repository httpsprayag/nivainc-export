"use client";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoGoal } from "react-icons/go";
import { AiFillEye } from "react-icons/ai";
import { GiTargetArrows } from "react-icons/gi";
import CountUp from "react-countup";
import { Heading } from "@/components";
import { ImCircleRight } from "react-icons/im";
const aboutUsImages = [
  "assets/images/about1.png",
  "assets/images/about2.png",
  "assets/images/about3.png",
  "assets/images/about4.png",
];

const AboutUs = () => {
  return (
    <section className="p-4">
      <section className="grid place-items-center ">
        <div className="md:flex md:max-w-6xl md:mx-auto items-center gap-3 min-w-[30px] min-h-[30px] rounded-[50%] md:mt-0  py-2 pw-fit:">
          <div className="md:start md:items-center md:max-w-lg text-justify md:text-left">
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-3">
                <ImCircleRight className="text-xl text-[#034d94]" />
                <Heading>Leading the way</Heading>
              </div>
            </div>
            <p className="text-2xl mt-5 text-[#034d94]">
              Let’s build a better world together
            </p>
            <p className="mt-5">
              Welcome to NIVA Inc, a global powerhouse in Ceramic and porcelain
              tile manufacturing and exporting. Based in the vibrant city of
              Morbi, Gujarat, India, our legacy is steeped in a rich tradition
              of craftsmanship that has evolved to meet the demands of modern
              design. NIVA Inc takes immense pride in delivering tiles of
              unparalleled quality and aesthetic appeal to more than 50
              countries worldwide.
            </p>

            {/* Include the 6 points here */}
          </div>
          <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 gap-3">
            {aboutUsImages.map((imgUrl) => {
              return (
                <img
                  src={imgUrl}
                  alt="#"
                  className="h-full w-full rounded-md"
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="mt-8 md:max-w-6xl md:mx-auto md:mt-0 py-2 pw-fit:mx-auto">
        <div className="flex start md:items-center gap-3 mt-4">
          <div className="flex items-center gap-3">
            <ImCircleRight className="text-xl text-[#034d94]" />
            <Heading>Best company ever & best service ever</Heading>
          </div>
        </div>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li className="flex gap-2 items-center space-x-2">
            <span className="min-w-[30px] min-h-[30px] rounded-[50%]  py-2 w-fit bg-[#034d94] flex items-start md:items-center justify-center text-white font-bold">
              1
            </span>
            Discover Our Range: Explore our diverse ceramic and porcelain tile
            collection designed to elevate your spaces.
          </li>
          <li className="flex gap-2 items-center space-x-2">
            <span className="min-w-[30px] min-h-[30px] rounded-[50%]  py-2 w-fit bg-[#034d94] flex items-start md:items-center justify-center text-white font-bold">
              2
            </span>
            Personalized Assistance: Our expert team is ready to assist,
            offering personalized guidance to meet your project needs.
          </li>
          <li className="flex gap-2 items-center space-x-2">
            <span className="min-w-[30px] min-h-[30px] rounded-[50%]  py-2 w-fit bg-[#034d94] flex items-start md:items-center justify-center text-white font-bold">
              3
            </span>
            Transparent Ordering: Navigate our user-friendly ordering process
            with transparency and ease.
          </li>
          <li className="flex gap-2 items-center space-x-2">
            <span className="min-w-[30px] min-h-[30px] rounded-[50%]  py-2 w-fit bg-[#034d94] flex items-start md:items-center justify-center text-white font-bold">
              4
            </span>
            Swift Export Services: Experience efficient and secure tile exports
            with NIVA Inc.
          </li>
          <li className="flex gap-2 items-center space-x-2">
            <span className="min-w-[30px] min-h-[30px] rounded-[50%]  py-2 w-fit bg-[#034d94] flex items-start md:items-center justify-center text-white font-bold">
              5
            </span>
            Constant Communication: Stay informed with regular updates and
            responsive communication.
          </li>
          <li className="flex gap-2 items-center space-x-2">
            <span className="min-w-[30px] min-h-[30px] rounded-[50%]  py-2 w-fit bg-[#034d94] flex items-start md:items-center justify-center text-white font-bold">
              6
            </span>
            Quality Assurance: Expect top-notch quality as we deliver tiles that
            meet the highest standards.
          </li>
        </ul>
      </section>
      <section className="mt-8 p-4">
        <div className="md:max-w-5xl md:mx-auto mt-8 grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {/* Mission Card */}
          <div className="bg-transparent border text-[#034d94] border-blue-600 p-4 rounded-lg shadow-xl shadow-blue-200">
            <div className="flex items-center gap-2">
              <GiTargetArrows className="text-[#034d94] text-2xl" />
              <h2 className="text-xl font-semibold">Mission</h2>
            </div>
            <p className="text-sm mt-2 text-black">
              At NIVA Inc, our mission is to redefine the way the world
              experiences spaces. We are dedicated to providing innovative,
              high-quality ceramic and porcelain tiles.
            </p>
          </div>

          {/* Vision Card */}
          <div
            className="bg-transparent border text-[#034d94] border-blue-600 p-4 shadow-blue-200 rounded-lg shadow-xl"
          >
            <div className="flex items-center gap-2">
              <AiFillEye className="text-[#034d94] text-2xl" />
              <h2 className="text-xl font-semibold">Vision</h2>
            </div>
            <p className="text-sm mt-2 text-black">
              We strive to inspire creativity and transform spaces by providing
              a diverse range of tiles that cater to the unique needs and
              preferences of our customers worldwide.
            </p>
          </div>

          {/* Goal Card */}
          <div className="border  text-[#034d94] border-blue-500 p-4 rounded-lg shadow-xl shadow-blue-200">
            <div className="flex items-center gap-2">
              <GoGoal className="text-2xl text-[#034d94]" />
              <h2 className="text-xl font-semibold">Goal</h2>
            </div>
            <p className="text-sm mt-2 text-black">
              NIVA Inc's overarching goal is to be the undisputed leader in the
              global ceramic and porcelain tile market.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
