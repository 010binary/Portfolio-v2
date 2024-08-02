"use client";
import Contactbtn from "@/components/custom/buttons/Contact";
import CustomAccordion from "@/components/custom/CustomAccordion";
import FeaturedProject from "@/components/custom/FeaturedProject";
import Hero from "@/components/custom/Hero";
import PersonalProject from "@/components/custom/PersonalProject";
import TestimonialsPage from "@/components/custom/TestimonialPage";

export default function Home() {
  return (
    <>
      <main className="space-y-2 p-6 pt-5 md:px-14 md:pt-10 ">
        <section>
          <Hero />
        </section>

        <section>
          <FeaturedProject />
        </section>
        <div className="text-black font-extrabold w-full h-96 bg-white">
          hello world
        </div>
        <section>
          <PersonalProject />
        </section>
        <section>
          <TestimonialsPage />
        </section>
        <section>
          <CustomAccordion />
        </section>
        <section className="pt-5">
          <Contactbtn width={true} />
        </section>
      </main>
    </>
  );
}
