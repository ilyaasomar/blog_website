import React from "react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mt-24 mb-0 flex flex-row justify-between items-center">
      {/* <hr className="w-2 h-full bg-black" /> */}
      <div className="flex flex-row gap-7">
        <p className="text-xl font-medium text-gray-600">Term</p>
        <p className="text-xl font-medium text-gray-600">Privacy</p>
        <p className="text-xl font-medium text-gray-600">Security</p>
      </div>
      <p className="text-xl font-medium text-gray-600">
        2023 Ilyasdev | Alright Reseverved
      </p>
      <div className="flex gap-3">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
          <FaLinkedinIn />
        </div>
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
          <FaInstagram />
        </div>
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
          <FaFacebookF />
        </div>
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
