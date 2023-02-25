import React from "react";
import PriceCard from "./PriceCard";

const Pricing = ({ pricingapi: { title, text, btn1, btn2, plans } }) => {
  return (
    <>
      <div className="my-16 relative">
        <div className=" travigo-container">
          <div
            className="grid items-center justify-items-center
          m-11 md:m-7 text-center gap-2"
          >
            <h1
              className="font-bold text-slate-900 text-5xl lg:text-4xl 
            md:text-3xl sm:text-2xl xsm:text-xl drop-shadow-lg"
            >
              {title}
            </h1>
            <p className="text-xl lg:text-sm drop-shadow-lg text-gray-900">
              {text}
            </p>
            <div
              className="ring-1 ring-slate-100 py-1.5 px-2 flex items-center
            justify-between gap-5 my-5 shadow-md shadow-slate-200 rounded-full"
            >
              <button type="button" className="button-emerald sm:w-auto">
                {btn1}
              </button>
              <button
                type="button"
                className="button-light sm:w-auto  shadow-slate-200 bg-slate-100"
              >
                {btn2}
              </button>
            </div>
          </div>
          <div
            className="flex flex-row md:flex-col  items-center justify-center
           gap-4 m-auto w-full max-w-5xl md:max-w-md md:items-center md:justify-center
           md:gap-8 "
          >
            {plans?.map((plan, i) => (
              <PriceCard key={i} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
