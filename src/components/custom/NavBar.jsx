"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  CircleUserRound,
  Image as ImageIcon,
  Briefcase,
  Mail,
  FileText,
  Twitter,
  Linkedin,
  Github,
  PencilLine,
} from "lucide-react";
import { navimage } from "../../../public/index.js";
import Image from "next/image.js";
import Loader from "./Loader.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);
  const menuRef = useRef(null);

  const handleCloseMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: CircleUserRound, label: "About", href: "/about" },
    { icon: ImageIcon, label: "Project", href: "/project" },
    { icon: Briefcase, label: "Tools & Stack", href: "/toolbox" },
    { icon: Mail, label: "Contact Me", href: "#", highlight: true }, 
    { icon: FileText, label: "My Resume", href: "#" }, 
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="md:hidden bg-black text-white sticky top-0 z-50 p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src={navimage}
              alt="Profile"
              className="w-12 h-12 rounded-md"
            />
            <div className="bg-[#0d593953] ml-3 text-main font-semibold text-sm text-center py-2 px-2 rounded-sm inline-block">
              <Loader />
            </div>
          </div>
          <button onClick={toggleMenu} className="p-2">
            {isOpen ? (
              <X size={28} className="text-gray-300/70" />
            ) : (
              <Menu size={28} className="text-gray-300/70" />
            )}
          </button>
        </div>
        {isOpen && (
          <>
            {/* Added overlay for closing the menu */}
            <div
              ref={menuRef}
              className="fixed top-[96px] left-0 right-0 z-50 bg-black p-6"
            >
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`flex items-center text-sm space-x-4 py-3 px-4 ${
                        item.highlight
                          ? "bg-main text-black font-semibold rounded-md duration-500 hover:bg-slate-400/50"
                          : item.label === "My Resume"
                          ? "border border-gray-600 rounded-md font-light duration-500 hover:text-main hover:bg-slate-400/50"
                          : "hover:bg-gray-800 hover:text-main hover:fill-main font-light text-gray-300 duration-500 rounded"
                      }
                      ${pathname === `${item.href}` ? "bg-slate-400/50" : ""}`}
                      onClick={handleCloseMenu} // Close menu on item click
                    >
                      <item.icon size={15} />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex justify-between space-x-4 px-4">
                <Link
                  href="#"
                  className="hover:bg-main p-1 hover:scale-105 rounded-full hover:text-black duration-500"
                >
                  <Twitter size={15} />
                </Link>
                <Link
                  href="#"
                  className="hover:bg-main p-1 hover:scale-105 rounded-full hover:text-black duration-500"
                >
                  <Linkedin size={15} />
                </Link>
                <Link
                  href="#"
                  className="hover:bg-main p-1 hover:scale-105 rounded-full hover:text-black duration-500"
                >
                  <Github size={15} />
                </Link>
                <Link
                  href="#"
                  className="hover:bg-main p-1 hover:scale-105 rounded-full hover:text-black duration-500"
                >
                  <PencilLine size={15} />
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col items-center justify-center max-h-screen sticky top-0 left-0 text-white min-w-64 max-w-72  p-8 border-r border-r-slate-400/50">
        <div className="flex flex-col gap-2">
          <div className="mb-4 space-y-1">
            <Image
              src={navimage}
              alt="Profile"
              className="rounded-sm h-48 mb-3"
            />
            <div className="bg-[#0d593953] text-main text-sm text-center w-full py-2 px-2 rounded-sm inline-block">
              <Loader />
            </div>
          </div>
          <ul className="space-y-4 flex-grow">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`flex items-center text-sm font-light space-x-2 py-2 px-4 ${
                    item.highlight
                      ? "bg-main text-black rounded-md hover:scale-105 duration-500"
                      : item.label === "My Resume"
                      ? "border border-gray-600 rounded-md hover:scale-105 duration-500 hover:text-main hover:bg-slate-400/50"
                      : "hover:bg-gray-800 hover:text-main hover:fill-main hover:scale-105 duration-500 rounded"
                  } 
                  ${pathname === `${item.href}` ? "bg-slate-400/50" : ""}`}
                >
                  <item.icon size={20} className="" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-8 flex justify-between space-x-4 p-2">
            <Link
              href="#"
              className="hover:bg-main p-1 hover:scale-105 rounded-full hover:text-black duration-500"
            >
              <Twitter className="w-3 h-3" />
            </Link>
            <Link
              href="#"
              className="hover:bg-main p-1 hover:scale-105 rounded-full hover:text-black duration-500"
            >
              <Linkedin className="w-3 h-3" />
            </Link>
            <Link
              href="#"
              className="hover:bg-main p-1 hover:scale-105 rounded-full hover:text-black duration-500"
            >
              <Github className="w-3 h-3" />
            </Link>
            <Link
              href="#"
              className="hover:bg-main p-1 hover:scale-105 rounded-full hover:text-black duration-500"
            >
              <PencilLine className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
