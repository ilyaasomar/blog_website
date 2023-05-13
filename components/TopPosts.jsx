import Image from "next/image";
import React from "react";

const TopPosts = () => {
  return (
    <section className="flex gap-10 fle-row mt-36">
      {/* left section */}
      <div className="flex flex-1 flex-col p-5 rounded-[25px] border-2 border-gray-200">
        <Image
          src={"/assets/2.jpg"}
          height="350"
          width="650"
          alt="blog1"
          className="object-contain rounded-3xl"
        />
        <div className="mt-3 flex flex-col gap-10">
          <p className="font-normal text-2xl">Marketing</p>
          <h3 className="text-4xl font-bold">
            Your company might be in need a socail media audit
          </h3>
          <div className="flex flex-row justify-between">
            <p className="font-semibold text-xl">By Ilyaas Omar</p>
            <p className="font-semibold text-x">May 13, 2023</p>
          </div>
        </div>
      </div>
      {/* right section */}
      <div className="flex flex-1 flex-col p-5 rounded-[25px] border-2 border-gray-200">
        <Image
          src={"/assets/5.avif"}
          height="350"
          width="650"
          alt="blog1"
          className="object-contain rounded-3xl"
        />
        <div className="mt-3 flex flex-col gap-10">
          <p className="font-normal text-2xl">Marketing</p>
          <h3 className="text-4xl font-bold">
            Your company might be in need a socail media audit
          </h3>
          <div className="flex flex-row justify-between">
            <p className="font-semibold text-xl">By Ilyaas Omar</p>
            <p className="font-semibold text-x">May 13, 2023</p>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-1 flex-col gap-10">
        <div className="flex flex-1 flex-col p-5 rounded-[25px] border-2 border-gray-200 gap-10">
          <Image
            src={"/assets/4.jpg"}
            height="200"
            width="650"
            alt="blog1"
            className="object-cover rounded-3xl"
          />
          <div className="mt-3 flex flex-col gap-10">
            <h3 className="text-xl font-bold">
              Your company might be in need a socail media audit
            </h3>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5 rounded-[25px] border-2 border-gray-200 gap-10">
          <Image src={"/assets/5.avif"} height="200" width="650" alt="blog1" />
          <div className="mt-3 flex flex-col gap-10">
            <h3 className="text-4xl font-bold">
              Your company might be in need a socail media audit
            </h3>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default TopPosts;
