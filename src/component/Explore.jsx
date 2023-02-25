import React from "react";

const explore = ({ title, placesAPI }) => {
  return (
    <>
      <div className="relative my-7 md:mt-3">
        <div className="travigo-container">
          <div className="flex items-center mb-11 md:mb-7">
            <h1
              className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl
            font-bold filter drop-shadow-lg text-slate-900"
            >
              {title}
            </h1>
          </div>
          <div
            className="grid items-center grid-cols-4  md:grid-cols-2 lg:grid-cols-3
             gap-5 "
          >
            {placesAPI?.map((val, i) => (
              <div
                id={i}
                className="flex items-center gap-5 sm:gap-3 rounded-lg
                 hover:bg-emerald-300 transition-all duration-300 
                 cursor-pointer hover:scale-105"
              >
                <div className="flex items-center ">
                  <img
                    src={val.placeImg}
                    alt={val.location}
                    className="w-20 h-20 filter drop-shadow-lg
                  sm:w-16 sm:h-16 rounded-lg "
                  />
                </div>
                <div className="flex items-start flex-col text-slate-900">
                  <h1 className="text-lg sm:text-sm font-bold text-slate-900">
                    {val.location}
                  </h1>
                  <p className="text-normal font-base text-sm lg:text-sm sm:text-xs">
                    {val.distance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default explore;