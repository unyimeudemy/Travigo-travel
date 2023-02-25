import React from "react";

const PriceCard = ({
  plan: { planicon, title, text, plantype, plancontent, buttonText },
}) => {
  return (
    <>
      <div
        className="p-5 rounded-lg bg-slate-50/2 ring-1 
      ring-slate-100 shadow-md shadow-slate-200 
      hover:scale-105 duration-300 transition-all cursor-pointer"
      >
        <div className="flex flex-col items-center justify-between  ">
          <div className="flex  items-center gap-5">
            <div className="grid items-center">
              <img
                src={planicon}
                alt="planicon/image"
                className="w-14 h-14 object-cover
              lg:h-12 lg:w-12"
              />
            </div>
            <div className="grid items-center">
              <h1
                className="text-gray-900 font-semibold text-lg 
              filter lg:text-base md:text-sm "
              >
                {title}
              </h1>
              <p className="text-slate-900 text-sm lg:text-xsm font-normal">
                {text}
              </p>
            </div>
            <div className="grid items-center">
              <h1
                className="text-gray-900 font-bold text-lg 
              filter lg:text-base md:text-sm "
              >
                {plantype}
              </h1>
            </div>
          </div>
          <div className="h-[0.1vh] bg-slate-200 my-5"></div>
          <div className="grid items-center gap-3 px-5">
            {plancontent?.map((val, i) => (
              <div id={i} className="flex items-center justify-start gap-5">
                <div className="grid items-center">
                  <img
                    src={val.iconbox}
                    alt="iconbox"
                    className="lg:w-5 lg:h-5"
                  />
                </div>
                <div className="grid items-center ">
                  <p
                    className="font-normal text-lg text-gray-900 
                  filter drop-shadow-lg lg:text-base"
                  >
                    {val.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="button-emerald-price grid items-center
          justify-center mt-7 text-base"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default PriceCard;
