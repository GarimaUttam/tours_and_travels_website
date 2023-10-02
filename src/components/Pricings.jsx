import React from "react";
import PriceCard from "./PriceCard";

const Pricings = ({ pricingapi: { title, text, btn1, btn2, plans } }) => {
  return (
    <>
      <div className="pt-15 pb-16 relative bg-gradient-to-b from-[#657487] to-[hsl(0,0%,0%)]  ">
        <div className="travigo-container">
          <div className="grid items-center justify-items-center mb-11 md:mb-7 text-center gap-2 ">
            <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg text-[#f5f6f8]">
              {title}
            </h1>
            <p
              className="text-xl lg:text-sm text-[#62bcdc]"
            >
              {text}
            </p>
            <div className="ring-1 ring-slate- rounded-full py-1.5 px-2 flex items-center justify-between gap-5 my-5 shadow-md shadow-[#5ea4c0]">
              <button type="button" className="button-emrald sm:w-auto">
                {btn1}
              </button>
              <button
                type="btuton"
                className="button-light sm:w-auto shadow-slate-400 bg-slate-700"
              >
                {btn2}
              </button>
            </div>
          </div>
          <div className="grid items-center grid-cols-2 md:grid-cols-1 w-full max-w-5xl md:max-w-md gap-9 lg:gap-5 m-auto bg-gradient-to-b from-[#260261] to-[hsl(289,95%,17%)]  ">
            {plans?.map((plan, i) => (
              <PriceCard key={i} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricings;
