"use client";

import ClientReview from "./sections/ClientReview";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import WhyDeza from "./sections/WhyDeza";
import AgenyInNumbers from "./sections/AgenyInNumbers";
import Faq from "./sections/Faq";
import RecentWorks from "./sections/RecentWorks";
import Footer from "./sections/Footer";

const page: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyDeza />
      <AgenyInNumbers />
      <RecentWorks />
      <ClientReview />
      <Faq />
      <Footer />
    </main>
  );
};

export default page;
