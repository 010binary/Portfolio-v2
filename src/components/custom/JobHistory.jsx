import React from "react";
import CustomTooltip from "./customtooltip";
import JobTimeline from "./JobTimeline";

const JobHistory = () => {
  return (
    <>
      <section className=" flex items-center justify-between mb-4">
        <h1 className="text-2xl md:text-3xl font-semibold">Work Experiences</h1>
        <CustomTooltip
          text="This are project that are for my Client /n
        that i have worked with in the past"
        />
      </section>
      <section>
        <JobTimeline />
      </section>
    </>
  );
};

export default JobHistory;
