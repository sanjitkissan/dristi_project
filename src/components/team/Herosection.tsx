import { teamArr } from "@/utils/team";
import React from "react";
import TeamHerocard from "../card/team/TeamHerocard";

export default function Herosection() {
  return (
    <section className="w-full main-container center_column gap-4 my-20">
      <span className="w-full center_column gap-4">
        <p className="text-red-600 uppercase">meet our team</p>
        <h1 className="text-2xl font-bold capitalize">professional Team</h1>
        <p className="text-gray-500 capitalize">
          Suspendisse in magna in elit hendrerit condimen. Phasellus eu justo
          mi. Proin aliquet, mauris avol lobortis erat libero condimentum metus
        </p>
      </span>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            teamArr.map((item)=>(
                <div key={item.id}>
                    <TeamHerocard item={item}/>
                </div>
            ))
        }
      </div>
    </section>
  );
}
