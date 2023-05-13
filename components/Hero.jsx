import React from "react";

const Hero = () => {
  return (
    <>
      <section className="bg-secondary p-20 mt-16 rounded-[20px] space-y-10">
        <p className="text-center font-bold text-xl">Our Blog</p>
        <h1 className="text-[65px] font-bold text-center">
          Resource for makers & creatives to learn, Skill & growth
        </h1>
        <p className="text-center font-medium text-[25px]">
          The only corparate card & spend management platform designed to help
          you spend less
        </p>
        <div className="flex gap-5 items-center justify-center ">
          <button className="py-5 px-10 rounded-full bg-black text-white font-semibold text-xl">
            Get Started
          </button>
          <button className="py-5 px-10 rounded-full border-2 border-gray-500 text-black font-semibold text-xl">
            View Pricing
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
