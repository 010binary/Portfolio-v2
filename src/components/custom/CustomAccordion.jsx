import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CustomAccordion = () => {
  return (
    <section>
      <h1 className="text-3xl font-semibold mb-3">
        Frequently asked questions
      </h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            What is your design process?
          </AccordionTrigger>
          <AccordionContent>
            My design process typically involves four key phases: research,
            design, prototype, and test. In the research phase, I gather
            insights about the user and their needs. In the design phase, I
            create wireframes and visual designs that meet those needs. In the
            prototype phase, I create interactive models of the design for
            testing. In the test phase, I collect feedback from users to refine
            the design.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">
            What tools and software do you use for UX design?
          </AccordionTrigger>
          <AccordionContent>
            I use a variety of tools and software, depending on the project and
            the needs of the client. Some of the most common tools I use include
            Figma, Framer, Adobe Creative Suite, and user testing platforms like
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">
            How do you measure the success of your UX designs?
          </AccordionTrigger>
          <AccordionContent>
            I measure the success of my UX designs through a combination of user
            feedback, analytics, and business goals. I track metrics like
            engagement, conversion rates, and user satisfaction to determine how
            well the design is performing. I also conduct user testing and
            collect feedback to understand how users are interacting with the
            design and identify areas for improvement. Ultimately, the success
            of a UX design should be tied to the goals of the project and the
            needs of the user.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default CustomAccordion;
