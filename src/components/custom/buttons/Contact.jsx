"use client";
import React from "react";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";

const Contactbtn = ({ width }) => {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => router.push("/contact")}
        className={` flex items-center justify-center text-sm rounded font-light space-x-2 px-4 py-3 border border-main bg-main text-black hover:scale-105 duration-500
hover:text-main hover:bg-black ${width && "w-full"}`}
      >
        <Mail className="w-5 h-5" />
        <span className="capitalize text-sm">contact me</span>
      </button>
    </>
  );
};

Contactbtn.propTypes = {
  width: PropTypes.bool,
};

export default Contactbtn;
