import Link from "next/link";
import { Twitter, Linkedin, Github, PencilLine } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" text-white py-8 px-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <span className="text-[10px] md:text-sm">
          © Copyright 2023. All rights Reserved.
        </span>
        <div className="flex space-x-4">
          <Link
            href="#"
            className="hover:bg-[#4ce6a6] p-1 hover:scale-105 rounded-full hover:text-black duration-500"
          >
            <Twitter size={13} />
          </Link>
          <Link
            href="#"
            className="hover:bg-[#4ce6a6] p-1 hover:scale-105 rounded-full hover:text-black duration-500"
          >
            <Linkedin size={13} />
          </Link>
          <Link
            href="#"
            className="hover:bg-[#4ce6a6] p-1 hover:scale-105 rounded-full hover:text-black duration-500"
          >
            <Github size={13} />
          </Link>
          <Link
            href="#"
            className="hover:bg-[#4ce6a6] p-1 hover:scale-105 rounded-full hover:text-black duration-500"
          >
            <PencilLine size={13} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
