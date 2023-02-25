import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div
        className="p-5 bg-white/60 ring-1 ring-emerald-200 
      shadow-md shadow-emerald-300 rounded-lg max-w-5xl
      w-full ml-auto mr-auto mt-0 xl:w-[95vw] relative top-12"
      >
        <div
          className="flex items-center justify-between 
        lg:flex-col lg:gap-7 "
        >
          <div className="grid items-center sm:text-center">
            <h1
              className="font-semibold text-slate-900 filter drop-shadow-lg
            text-4xl md:text-3xl sm:2xl xsm:xl"
            >
              Get in touch with us
            </h1>
            <p className="text-base sm:text-sm xsm:text-xsm font-medium text-slate-900">
              We will love to hear your questions and feedback
            </p>
          </div>
          <form className="flex items-center justify-center relative">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="py-2 px-5 ring-1 ring-slate-300 flex items-center
              shadow-md shadow-slate-200 w-96 text-base rounded-full
              lg:w-[85vw]  rounded-r-none relative placeholder:text-slate-500
              focus:outline-emerald-500 "
            />
            <button type="button" className="join-button rounded-l-none py-1.5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
