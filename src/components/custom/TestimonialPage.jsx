import React from "react";
import TestimonialGrid from "./TestimonialGrid";

const testimonials = [
  {
    message:
      "Emmanuel's interpersonal skills makes working with him fun and memorable. His attention to detail and dedication to understanding my work flow made the process smooth and enjoyable. Was thrilled with the results and would love to continue working with him!",
    name: "Ezekiel Adewunmi",
    position: "Python Developer",
    imageSrc: "samples/smile.jpg",
    rating: 4,
  },
  {
    message:
      "Emmanuel's creative flair and ability to craft visually stunning Designs are unmatched. He takes the time to understand our client's unique needs and translates them into captivating web experiences. His work consistently exceeds expectations.",
    name: "James Ayobami Agbaje",
    position: "Product Manager",
    imageSrc: "samples/man-portrait.jpg",
    rating: 5,
  },
  {
    message:
      "Working with Emmanuel at Jumia was fun, He has got a remarkable work ethic, One of the best people i have ever managed. I am certain everyone would want to be in a team with him, He is such a great guy!",
    name: "Rana Hany",
    position: "Platform Operations Manager",
    imageSrc: "samples/woman-on-a-football-field.jpg",
    rating: 3,
  },
];

function TestimonialsPage() {
  return (
    <div className="mx-auto py-8 bg-black">
      <h2 className="text-3xl font-bold mb-6 text-white">Testimonials</h2>
      <TestimonialGrid testimonials={testimonials} />
    </div>
  );
}

export default TestimonialsPage;
