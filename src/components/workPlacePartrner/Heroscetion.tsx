import { wpimg2 } from "@/assets/workplacePartners/breadCrumb";
import React from "react";

export default function Heroscetion() {
  return (
    <section className="main-container h-[70vh] px-0  w-full flex items-center justify-between gap-6 my-24 bg-gradient-to-br from-blue-500 to-red-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md overflow-hidden" >
      <div style={{backgroundImage:`url(${wpimg2.src})`}} className="w-full h-[70vh] bg-cover bg-no-repeat bg-center">
        {/* <img src={wpimg2.src} alt="" className="w-full h-full" /> */}
      </div>
      <div className="w-full  flex flex-col items-center justify-between gap-2">
        <h1 className=" text-red-500 text-3xl font-bold capitalize ">
          workplace
        </h1>
        <p className="text-gray-100 text-lg ">
          {" "}
          Millennials or Gen Y constitute 50% of today's working professionals
          and this number is projected to reach over 75% by the year 2025. This
          ever-evolving and aspirational workforce thrives on an ecosystem of
          modern workplaces with a strong sense of community and employee
          engagement
        </p>
        <p className="text-gray-100 text-lg ">
          Happy people are an essential part of every living, breathing habitat.
          Studies show that 90% of corporate professionals find a fun work
          environment extremely motivating and have shown increased productivity
        </p>
        <p className="text-gray-100 text-lg ">
          With our many industry-first initiatives and innovations, we offer
          unparalleled solutions to the campus managements that add to the fun
          and vibrancy of the workplace and elevates the overall experience for
          the working professionals
        </p>
        <p className="text-gray-100 text-lg ">
          All this, while generating incremental revenue to the campus
          management through our corporate brand partnerships
        </p>
      </div>
    </section>
  );
}
