import React from "react";

const Hero = ({ Hero: { title, subtitle, btn1, btn2, text, img } }) => {
  return (
    <section>
      <div className="flex flex-col bg-gradient-to-b from-emerald-200 to-white h-auto w-auto">
        <div className="travigo-container grid items-start justify-items-center ">
          <div className="grid items-center justify-items-center mt-36 mb-16 md:mt-28 md:mb-12">
            <h1 className=" justify-items-center  text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg">
              {title}
            </h1>
            <h1 className=" text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg">
              {subtitle}
            </h1>
            <p className="text-base text-center my-5 xsm:text-sm ">{text}</p>
            <div className="flex flex-row justify-items-center gap-11 sm:gap-3 sm:flex-col ">
              <button type="button" className="button-emerald ">
                {btn1}
              </button>
              <button type="button" className="button-light">
                {btn2}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mb-11">
            <img
              src={img}
              alt="image"
              className="h-[85vh] w-full object-fill lg:h-[75vh] md:h-[57vh] sm:h-[35vh] sm:object-contain drop-shadow-emerald "
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
