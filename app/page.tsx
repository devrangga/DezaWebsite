"use client";

import React from "react";
import ClientReview from "./sections/ClientReview";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import WhyDeza from "./sections/WhyDeza";
import AgenyInNumbers from "./sections/AgenyInNumbers";
import Faq from "./sections/Faq";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyDeza />
      <AgenyInNumbers />
      <ClientReview />
      <Faq />
    </div>
  );
};

export default page;
