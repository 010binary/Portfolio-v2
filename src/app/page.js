"use client";
import Contactbtn from "@/components/custom/buttons/Contact";
import CustomAccordion from "@/components/custom/CustomAccordion";
import FeaturedProject from "@/components/custom/FeaturedProject";
import Hero from "@/components/custom/Hero";
import PersonalProject from "@/components/custom/PersonalProject";
import TestimonialsPage from "@/components/custom/TestimonialPage";
import JobHistory from "@/components/custom/JobHistory";

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
        <section>
          <JobHistory />
        </section>
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
