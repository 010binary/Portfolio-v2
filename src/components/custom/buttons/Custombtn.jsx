import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const Custombtn = ({ children, hasSvg, endpoint }) => {
  return (
    <>
      <Link
        href={`/${endpoint}`}
        className="flex text-mygray/70 items-center text-sm font-light space-x-2 px-4 py-3 justify-center border border-gray-600 rounded-sm hover:scale-105 duration-500 hover:text-main hover:bg-slate-400/50 custombtn"
      >
        {children}

        {hasSvg && (
          <MoveRight
            className="icon w-5 h-5 duration-500 ease-in-out"
            strokeWidth={1}
          />
        )}
      </Link>
    </>
  );
};

export default Custombtn;
