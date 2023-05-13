import Image from "next/image";
import React from "react";

const AllPosts = () => {
  return (
    <section className="mt-24">
      <h1 className="text-center text-5xl font-medium">All Posts</h1>
      <div className="flex items-center justify-center mt-10">
        <input
          type="text"
          placeholder="Search Post"
          className="px-7 py-5 w-1/2 border-2 border-gray-300 rounded-xl item-center"
        />
      </div>

      {/* posts */}
      <div className="grid grid-cols-3 mt-24 gap-20">
        {/*  */}
        <div className="flex flex-col p-5 rounded-[25px] border-2 border-gray-200 drop-shadow-md">
          <Image
            src={"/assets/1.jpg"}
            height="350"
            width="650"
            alt="blog1"
            className="object-contain rounded-3xl"
          />
          <div className="mt-3 flex flex-col gap-5">
            <p className="font-normal text-xl text-gray-700">Marketing</p>
            <h3 className="text-xl font-bold text-gray-700">
              Your company might be in need a socail media audit
            </h3>
            <div className="flex flex-row justify-between items-center">
              <p className="font-semibold text-gray-400 text-xl">By Ilyaas Omar</p>
              <p className="font-semibold text-gray-400 text-md">May 13, 2023</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col p-5 rounded-[25px] border-2 border-gray-200 drop-shadow-md">
          <Image
            src={"/assets/1.jpg"}
            height="350"
            width="650"
            alt="blog1"
            className="object-contain rounded-3xl"
          />
          <div className="mt-3 flex flex-col gap-5">
            <p className="font-normal text-2xl">Marketing</p>
            <h3 className="text-2xl font-bold">
              Your company might be in need a socail media audit
            </h3>
            <div className="flex flex-row justify-between">
              <p className="font-semibold text-xl">By Ilyaas Omar</p>
              <p className="font-semibold text-x">May 13, 2023</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col p-5 rounded-[25px] border-2 border-gray-200 drop-shadow-md">
          <Image
            src={"/assets/1.jpg"}
            height="350"
            width="650"
            alt="blog1"
            className="object-contain rounded-3xl"
          />
          <div className="mt-3 flex flex-col gap-5">
            <p className="font-normal text-2xl">Marketing</p>
            <h3 className="text-2xl font-bold">
              Your company might be in need a socail media audit
            </h3>
            <div className="flex flex-row justify-between">
              <p className="font-semibold text-xl">By Ilyaas Omar</p>
              <p className="font-semibold text-x">May 13, 2023</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col p-5 rounded-[25px] border-2 border-gray-200 drop-shadow-md">
          <Image
            src={"/assets/1.jpg"}
            height="350"
            width="650"
            alt="blog1"
            className="object-contain rounded-3xl"
          />
          <div className="mt-3 flex flex-col gap-5">
            <p className="font-normal text-2xl">Marketing</p>
            <h3 className="text-2xl font-bold">
              Your company might be in need a socail media audit
            </h3>
            <div className="flex flex-row justify-between">
              <p className="font-semibold text-xl">By Ilyaas Omar</p>
              <p className="font-semibold text-x">May 13, 2023</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col p-5 rounded-[25px] border-2 border-gray-200 drop-shadow-md">
          <Image
            src={"/assets/1.jpg"}
            height="350"
            width="650"
            alt="blog1"
            className="object-contain rounded-3xl"
          />
          <div className="mt-3 flex flex-col gap-5">
            <p className="font-normal text-2xl">Marketing</p>
            <h3 className="text-2xl font-bold">
              Your company might be in need a socail media audit
            </h3>
            <div className="flex flex-row justify-between">
              <p className="font-semibold text-xl">By Ilyaas Omar</p>
              <p className="font-semibold text-x">May 13, 2023</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col p-5 rounded-[25px] border-2 border-gray-200 drop-shadow-md">
          <Image
            src={"/assets/1.jpg"}
            height="350"
            width="650"
            alt="blog1"
            className="object-contain rounded-3xl"
          />
          <div className="mt-3 flex flex-col gap-5">
            <p className="font-normal text-2xl">Marketing</p>
            <h3 className="text-2xl font-bold">
              Your company might be in need a socail media audit
            </h3>
            <div className="flex flex-row justify-between">
              <p className="font-semibold text-xl">By Ilyaas Omar</p>
              <p className="font-semibold text-x">May 13, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllPosts;
