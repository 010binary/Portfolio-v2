import Link from "next/link";
import { Twitter, Linkedin, Github, PencilLine } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" text-white py-8 px-2 md:px-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <span className="text-[10px] md:text-sm">
          © Copyright 2023. All rights Reserved.
        </span>
        <div className="flex space-x-4">
          <Link
            href="#"
            className="hover:text-main hover:underline flex hover:scale-105 items-center justify-center gap-2 rounded-full duration-500 twitte"
          >
            <Twitter className="w-4 h-4" />
            <span className="twitte-hover:text-black text-mygray text-[10px] hidden md:block ">
              Twitter
            </span>
          </Link>
          <Link
            href="#"
            className="hover:text-main hover:underline flex hover:scale-105 items-center justify-center gap-2 rounded-full duration-500 link"
          >
            <Linkedin className="w-4 h-4" />
            <span className="link-hover:text-black text-mygray text-[10px] hidden md:block ">
              Linkedin
            </span>
          </Link>
          <Link
            href="#"
            className="hover:text-main hover:underline flex hover:scale-105 items-center justify-center gap-2 rounded-full duration-500 git"
          >
            <Github className="w-4 h-4" />
            <span className="hidden md:block git-hover:text-black text-mygray text-[10px]">
              GitHub
            </span>
          </Link>
          <Link
            href="#"
            className="hover:text-main hover:underline flex hover:scale-105 items-center justify-center gap-2 rounded-full duration-500 medium"
          >
            <PencilLine className="w-4 h-4" />
            <span className="medium-hover:text-black text-mygray text-[10px] hidden md:block ">
              medium
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
