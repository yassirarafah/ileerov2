import React from "react";

const HowWorksCard = ({ color }) => {
  return (
    <div className="md:h-[330px] rounded-lg px-3 py-[30px] md:py-[57px] hover:shadow-2xl shadow-[#0085F629]">
      <div className="flex flex-col items-start  h-full">
        <div className={`h-20 w-20 rounded-md ${color}`} />

        <div className="mt-2  md:mt-10">
          <p className="font-bold text-2xl text-black text-start">Lorem Ipsum</p>
          <span className="text-xs font-semibold text-black">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
          </span>
        </div>
      </div>
    </div>
  );
};

export default HowWorksCard;
