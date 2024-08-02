"use client";
import React from "react";
import { Star } from "lucide-react";
import { CldImage } from "next-cloudinary";

const TestimonialCard = ({ message, name, position, imageSrc, rating }) => {
  return (
    <div className="bg-mygray/10 p-8 rounded-lg min-h-96 flex flex-col justify-between ">
      <div className="flex mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-main fill-main" : "text-gray-600"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-300 mb-6 text-base">&quot;{message}&quot;</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <CldImage
            src={imageSrc}
            alt={name}
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialGrid = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
};

export default TestimonialGrid;
