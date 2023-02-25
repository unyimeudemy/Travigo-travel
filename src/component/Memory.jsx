import React from "react";

const Memory = ({ memory: { title, subtitle, text, img, experience } }) => {
  return (
    <>
      <div className=" relative my-16 md:mb-7">
        <div
          className="travigo-container flex items-center justify-between
        gap-16 xl:gap-9 lg:flex-col-reverse"
        >
          <div className="flex items-center w-full max-w-md ">
            <img
              src={img}
              alt="image"
              className="w-auto h-[55vh] object-fill"
            />
          </div>
          <div className=" grid items-center w-full max-w-2xl lg:text-center">
            <h1 className="text-5xl md:text-4xl sm:text-3xl text-slate-900 font-bold filter drop-shadow-large">
              {title}
            </h1>
            <h1 className="text-5xl md:text-4xl sm:text-3xl text-slate-900 font-bold filter drop-shadow-large">
              {subtitle}
            </h1>
            <p className=" text-base my-5 sm:text-sm">{text}</p>
            <div className="grid items-center grid-cols-3 gap-7 xl:gap-3">
              {experience?.map((val, i) => (
                <div
                  id={i}
                  className="bg-gradient-to-b from-emerald-300 to-green-300 
                  h-auto w-auto rounded-lg flex items-center justify-center flex-col
                  text-slate-900 text-center py-7 px-5  xl:p-4 shadow-lg shadow-emerald-200
                  filter cursor-pointer hover:scale-110 transition-all duration-300"
                >
                  <h1 className="text-3xl xl:text-2xl sm:text-xl font-bold">
                    {val.number}
                  </h1>
                  <p className="text-lg xl:base sm:text-sm xsm:text-xs font-medium">
                    {val.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Memory;
