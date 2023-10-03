import React from "react";
const Explore = ({ title, placesAPI }) => {
  return (
    <>
      <div className="relative p-12 pb-[89px] md:m-0 bg-gradient-to-b from-[hsl(0,0%,0%)] to-[#657487] text-[#afc7ec] px-2">
        <div className="travigo-container">
          <div
            className="flex items-center justify-center text-center pb-11 md:pb-7 "
          >
            <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg p-[35px]">
              {title}
            </h1>
          </div>
          <div className="grid items-center grid-cols-3 lg:grid-cols-2 md:grid-cols-2 md:col-span-5 gap-9 ">
            {placesAPI?.map((val, i) => (
              <div
                key={i}
                className="flex items-center gap-5 sm:gap-3 rounded-lg bg-gradient-to-b from-[#657487] to-[hsl(0,0%,0%)] h-auto w-auto hover:bg-blue-300 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <div className="flex items-center">
                  <img
                    src={val.placeImg}
                    alt={val.location}
                    className="rounded-[20px] h-[200px] w-[600px]"
                  />
                </div>
                <div className="flex items-start flex-col">
                  <h1 className="text-lg sm:text-sm font-bold text-[#66c6de]">
                    {val.location}
                  </h1>
                  {/* <img src={star} alt="rating" width={24} height={24} /><p className="text-blue-400">(4.5)</p> */}
                  <p className="font-normal lg:text-sm text-base sm:text-xs text-[13px]  text-[#086c85] ">
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

export default Explore;
