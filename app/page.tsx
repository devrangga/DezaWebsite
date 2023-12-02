"use client";

import React from "react";
import ClientReview from "./sections/ClientReview";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import WhyDeza from "./sections/WhyDeza";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyDeza />
      <ClientReview />
    </div>
  );
};

export default page;
