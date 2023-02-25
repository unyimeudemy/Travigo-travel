import React from "react";

const Advertise = ({ brands }) => {
  //   console.log(brands);
  return (
    <>
      <div
        className="my-16 lg:my-7 w-9/12 lg:w-[85vw] m-auto 
        flex items-center justify-between xl:gap-7 overflow-x-scroll
        scroll-smooth scroll-hidden"
      >
        {brands?.map((val, i) => (
          <div id={i}>
            <img
              src={val.iconSrc}
              alt="icon_source"
              className="w-44 h-auto object-fill xl:w-38 lg:w-32 hover:scale-105
                  transition-all duration-300 cursor-pointer filter drop-shadow-lg "
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Advertise;
