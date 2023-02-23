import { BreadcrumbBG, BreadcrumbBG_TWO } from "@/assets/LandingPage/breadcrumb";
import { breadcrumbArr } from "@/utils/landinPage";
import React from "react";
import BreadcrumbCard from "../card/landingPage/BreadcrumbCard";

export default function Breadcrumb() {
  return (
    <section className="w-full bg-gray-100 mb-24 lg:mb-96 ">
      <section className="w-full main-container flex items-center justify-between ">
        <div className="w-[20%] h-full">
          <span className="flex flex-col items-start justify-center gap-4 -rotate-90 h-full w-full">
            <h1 className="text-3xl text-gray-400">THE</h1>
            <h1 className="text-7xl text-gray-400 font-bold pl-10">NATURE</h1>
          </span>
        </div>
        <div
          style={{
            backgroundImage: `url(${BreadcrumbBG.src})`,
          }}
          className="w-[80%] bg-cover bg-no-repeat bg-center h-[100vh] lg:h-[60vh] relative"
        >
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-60 center">
            <span className="absolute w-60 h-48 top-1/2 -left-16 bg-white -translate-y-1/2 p-4 ">
              <img
                src={BreadcrumbBG_TWO.src}
                alt=""
                className="w-full h-full"
              />
            </span>
            <span className="lg:w-1/2 w-full flex flex-col items-start justify-center gap-4">
              <p className="text-red-600 font-bold ">ADDS FOR REALITY </p>
              <h1 className="lg:text-5xl text-2xl font-bold text-white capitalize">
                the new level for billboard advertising
              </h1>
              <p className="text-sm text-white ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                temporibus minima, distinctio, ex reprehenderit possimus
                necessitatibus provident fugiat, in excepturi quam! Iure
                perspiciatis beatae aliquid fuga in ullam magni quam tempora
                consectetur dolorum, similique non reiciendis quidem
                necessitatibus quisquam ratione?
              </p>
              <button className="border-white px-8 py-3 font-bold text-white border">
                GET STARTED
              </button>
            </span>
          </div>
        </div>
      </section>
      <div className="relative w-full main-container hidden lg:flex">
        <div className="absolute left-1/2 -top-20 w-[70vw] -translate-x-1/2 flex items-center justify-between gap-6 ">
          {breadcrumbArr.map((item) => (
            <BreadcrumbCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
