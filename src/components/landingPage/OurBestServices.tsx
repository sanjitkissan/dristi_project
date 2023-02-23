import { serviceArr } from "@/utils/landinPage";
import React from "react";
import SpecialServiceCard from "../card/landingPage/SpecialServiceCard";

export default function OurBestServices() {
  return (
    <section className="w-full main-container center_column gap-6 my-24">
      <span className="w-full center_column gap-4">
        <p className="text-red-500 uppercase">our services</p>
        <h1 className="text-3xl font-bold capitalize">our best services</h1>
        <p className=" text-gray-400 w-full lg:w-2/5 tracking-wider text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut in
          temporibus eaque obcaecati odit optio, facere error dolorum maiores,
          quos, aliquid modi perferendis consectetur vel.
        </p>
      </span>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                serviceArr.map((item)=>(
                    <SpecialServiceCard item={item}/>
                ))
            }
      </div>
    </section>
  );
}
