"use client";
import React from "react";
import Contactbtn from "./buttons/Contact";
import { FileText } from "lucide-react";
import Custombtn from "./buttons/Custombtn";

const Hero = () => {
  return (
    <>
      <section className="space-y-2 md:space-y-4">
        <h1
          className="font-medium text-4xl md:text-5xl  text-mygray"
          style={{
            lineHeight: "58px",
            wordSpacing: "2px",
          }}
        >
          Designing Digital User Experiences for Business Success
        </h1>
        <p className="text-mygray/70 text-sm md:w-[75%]">
          I blend exquisite design with impeccable functionality for an
          exceptional user experience, while keeping users captivated.
        </p>
        <section className=" md:flex items-center justify-between">
          {/* resume and contact btn  */}
          <section className="w-full justify-between md:justify-start md:w-auto flex items-center gap-4">
            <Contactbtn />
            <Custombtn hasSvg={false} endpoint={"#"}>
              <FileText className="w-5 h-5" />
              <span className="capitalize text-sm">my resume</span>
            </Custombtn>
          </section>

          {/* Flexible dot separator */}

          <div className="dot-separator py-2 md:pt-8"></div>

          {/* about me btn */}
          <section className="block">
            <Custombtn hasSvg={true} endpoint={"#"}>
              <span className="capitalize text-sm">more about me</span>
            </Custombtn>
          </section>
        </section>
      </section>
    </>
  );
};

export default Hero;
