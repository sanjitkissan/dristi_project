import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { choose_your_plane_img } from "@/assets/services";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
export default function ChooseYourPlane() {
  return (
    <section className="w-full main-container flex flex-col lg:flex-row items-center justify-between my-24">
      <div className="w-full lg:relative">
        <div className="w-full p-4 bg-white lg:flex flex-col items-start justify-center gap-6 absolute  top-1/2 -right-10 -translate-y-1/2 hidden">
          <h1 className="text-2xl text-gray-800 font-bold capitalize">
            business
          </h1>
          <p className="text-gray-600 ">
            Proin ullamcorper pretium orci. Donec nec scelerisque leo.
          </p>
          <span className="w-full bg-gray-800 h-[1px] "></span>
          <div className="flex flex-col items-start justify-center gap-4">
            <span className="flex items-center justify-start gap-2">
              <CheckCircleIcon className="!text-red-600" />
              <p className="text-gray-600 capitalize">Digital Advertising</p>
            </span>
            <span className="flex items-center justify-start gap-2">
              <CheckCircleIcon className="!text-red-600 " />
              <p className="text-gray-600 capitalize">Special Billboard</p>
            </span>
            <span className="flex items-center justify-start gap-2">
              <CheckCircleIcon className="!text-red-600 " />
              <p className="text-gray-600 capitalize">
                Installation & Maintenance
              </p>
            </span>
            <span className="flex items-center justify-start gap-2">
              <CheckCircleIcon className="!text-red-600 " />
              <p className="text-gray-600 capitalize">24/7 Support</p>
            </span>
            <span className="flex items-center justify-start gap-2">
              <CheckCircleIcon className="!text-red-600 " />
              <p className="text-gray-600 capitalize">100% Guarantee</p>
            </span>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-3">
            <h1 className="text-4xl font-bold ">$97</h1>
            <p className="text-xl text-gray-600">
              Up to 10 users+ 32$ per user
            </p>
            <button className="px-12 py-3 bg-red-600 text-white text-xl uppercase tracking-widest">
              purchase now
            </button>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${choose_your_plane_img.src})` }}
        className="w-full h-[60vh] bg-center bg-cover bg-no-repeat"
      ></div>
      <div className="w-full flex flex-col items-start justify-between gap-6 p-4">
        <h1 className="text-2xl text-red-600 tracking-widest uppercase">
          pricing & plan
        </h1>
        <h1 className="text-5xl font-bold capitalize">choose your plan</h1>
        <p>
          Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa
          dolor imperdiet nec consequa tacon uedisem. Maecenas malesuada
          faucibus finibus consequata congue idsem.
        </p>
        <span className="w-full h-[1px] bg-gray-800"></span>
        <div className="w-full flex items-center justify-start gap-6">
          <span className="flex flex-col items-start justify-center gap-2">
            <ThumbUpAltIcon className="!text-red-600 !text-3xl" />
            <h1 className="text-2xl font-bold capitalize">100% Guarantee</h1>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
            <button className="text-red-600 tracking-widest uppercase">learn more</button>
          </span>
          <span className="flex flex-col items-start justify-center gap-2">
          <SupportAgentIcon className="!text-red-600 !text-3xl" />
            <h1 className="text-2xl font-bold capitalize">24/7 Support</h1>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
            <button className="text-red-600 tracking-widest uppercase">learn more</button>
          </span>
        </div>
      </div>
    </section>
  );
}
