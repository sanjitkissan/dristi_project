import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export default function ChooseYourPlane() {
  return (
    <section className="w-full main-container flex  items-center justify-between ">
      <div className="w-full p-4 bg-white flex flex-col items-start justify-center gap-6">
        <h1 className="text-xl text-gray-800 font-bold capitalize">business</h1>
        <p className="text-gray-600 ">
          Proin ullamcorper pretium orci. Donec nec scelerisque leo.
        </p>
        <span className="w-full bg-gray-800 h-[1px] "></span>
        <div className="flex flex-col items-start justify-center gap-2">
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
            <p className="text-gray-600 capitalize">
            24/7 Support
            </p>
          </span>
          <span className="flex items-center justify-start gap-2">
          <CheckCircleIcon className="!text-red-600 " />
            <p className="text-gray-600 capitalize">
            100% Guarantee
            </p>
          </span>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-3">
          <h1></h1>
          <p></p>
          <button></button>
        </div>
      </div>
      <div className="w-full "></div>
      <div className="w-full "></div>
    </section>
  );
}
