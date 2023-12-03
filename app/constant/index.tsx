import { type } from "os";
import {
  imgOne,
  imgTwo,
  imgThree,
  imgFour,
  imgFive,
  imgSix,
  imgSeven,
  imgEight,
  imgNine,
  imgTen,
  imgEleven,
  imgTwelve,
  imgThirteen,
  imgFourteen,
  imgFifteen,
  imgSixteen,
} from "@/public/images";
import { StaticImageData } from "next/image";

type whydeza = {
  title: string;
  description: string;
};
export const whyDeza: whydeza[] = [
  {
    title: "Why Deza",
    description:
      "We specialize in bringing products and brands to life through captivating animations, crafting distinctive brand logos that reflect your essence, and delivering high-quality product visualizations that enable customers to experience your offerings.",
  },
];

type agencyinnumber = {
  count: number;
  description: string;
};
export const agencyInNumber: agencyinnumber[] = [
  {
    count: 71,
    description: "Projects Completed",
  },
  {
    count: 3,
    description: "Years Of Experience",
  },
  {
    count: 20,
    description: "Clients Helped",
  },
];

type faqcard = {
  question: string;
  answer: string;
  selected: boolean;
};

export const faqCard: faqcard[] = [
  {
    question: "Can We Handle Social Media?",
    answer:
      "Yes! Of Course Deza can handle Social Media on Instagram and help your brand grow up extremely fast so your brand can reach clients fast!",
    selected: false,
  },
  {
    question: "How Can I Contact Deza Support?",
    answer:
      "You can contact Deza Support through our website's contact form or by sending an email to support@deza.com. Our support team is available 24/7 to assist you.",
    selected: false,
  },
  {
    question: "What Services Does Deza Offer?",
    answer:
      "Deza offers a wide range of services, including social media management, content creation, digital marketing, and more. Visit our website to explore all the services we provide.",
    selected: false,
  },
  {
    question: "Is Deza Available Internationally?",
    answer:
      "Yes, Deza provides services internationally. We have a global presence, and our team is ready to assist clients from all around the world.",
    selected: false,
  },
  {
    question: "How Secure is Deza's Data Handling?",
    answer:
      "At Deza, we prioritize the security and privacy of your data. We use industry-standard encryption and security measures to ensure that your information is safe and protected.",
    selected: false,
  },
];

type navbar = {
  title: string;
  url: string;
};
export const navbarData: navbar[] = [
  { title: "About", url: "#About" },
  { title: "Projects", url: "#Projects" },
  { title: "Reviews", url: "#Reviews" },
  { title: "FAQs", url: "#FAQs" },
  { title: "Reach Out", url: "#Reach Out" },
];

type recentworkbutton = {
  isSelected: boolean;
  label: string;
  id: number;
};
export const recentWorkButton = [
  { id: 0, isSelected: true, label: "Animation" },
  { id: 1, isSelected: false, label: "Design" },
  { id: 2, isSelected: false, label: "Socmed" },
  { id: 3, isSelected: false, label: "WebApp" },
];

type recentworkcard = {
  title: string;
  type: string;
  client: string;
  desc: string;
  date: string;
  imgsrc: StaticImageData;
};
export const recentWorkCards: recentworkcard[] = [
  {
    title: "The Big Project",
    type: "Animation",
    client: "Deza Studio",
    desc: "We specialize in bringing products and brands to life through captivating animations, crafting distinctive brand logos that reflect your essence.",
    date: "10-12-2023",
    imgsrc: imgOne,
  },
  {
    title: "Creative Design",
    type: "Animation",
    client: "PixelCraft",
    desc: "Our graphic design services create a visual language for your brand that is consistent across different contexts.",
    date: "11-20-2023",
    imgsrc: imgTwo,
  },
  {
    title: "Product Showcase",
    type: "WebApp",
    client: "Tech Innovators",
    desc: "Showcasing products online with responsive and user-friendly web development services for enhanced user experience.",
    date: "12-05-2023",
    imgsrc: imgThree,
  },
  {
    title: "E-commerce Platform",
    type: "WebApp",
    client: "Shopify Emporium",
    desc: "Building a robust e-commerce platform to help businesses thrive in the online marketplace.",
    date: "01-15-2024",
    imgsrc: imgFour,
  },
  {
    title: "Mobile App Development",
    type: "Design",
    client: "App Innovations",
    desc: "Creating innovative and user-friendly mobile applications to meet the evolving needs of your users.",
    date: "02-28-2024",
    imgsrc: imgFive,
  },
  {
    title: "Social Media Campaign",
    type: "Design",
    client: "Digital Buzz",
    desc: "Strategizing and executing engaging social media campaigns to boost your brand's online presence.",
    date: "03-10-2024",
    imgsrc: imgSix,
  },
  {
    title: "Corporate Branding",
    type: "Animation",
    client: "Global Enterprises",
    desc: "Crafting a strong corporate identity through effective branding strategies and design elements.",
    date: "04-22-2024",
    imgsrc: imgSeven,
  },
  {
    title: "Event Promotion",
    type: "Animation",
    client: "Event Dynamics",
    desc: "Promoting events with eye-catching promotional materials and digital marketing strategies.",
    date: "05-05-2024",
    imgsrc: imgEight,
  },
  {
    title: "Health and Wellness App",
    type: "WebApp",
    client: "Wellness Innovate",
    desc: "Developing a health and wellness app to empower users in achieving their fitness goals.",
    date: "06-18-2024",
    imgsrc: imgNine,
  },
  {
    title: "Educational Platform",
    type: "WebApp",
    client: "LearnHub",
    desc: "Building an interactive educational platform to facilitate seamless learning experiences for students.",
    date: "07-01-2024",
    imgsrc: imgTen,
  },
  {
    title: "Travel Exploration Site",
    type: "Socmed",
    client: "Travel Discoveries",
    desc: "Creating a visually stunning website for travel enthusiasts to explore and plan their next adventure.",
    date: "08-14-2024",
    imgsrc: imgEleven,
  },
  {
    title: "Restaurant App",
    type: "Socmed",
    client: "Foodie Delight",
    desc: "Developing a feature-rich app for restaurants to enhance customer engagement and streamline operations.",
    date: "09-27-2024",
    imgsrc: imgTwelve,
  },
  {
    title: "Fashion Brand Launch",
    type: "Design",
    client: "Chic Couture",
    desc: "Launching a new fashion brand with a visually appealing website and online marketing strategies.",
    date: "10-10-2024",
    imgsrc: imgThirteen,
  },
  {
    title: "Tech Conference",
    type: "Design",
    client: "Design",
    desc: "Designing promotional materials and managing the online presence for a tech conference.",
    date: "11-23-2024",
    imgsrc: imgFourteen,
  },
  {
    title: "Real Estate Website",
    type: "Socmed",
    client: "Dream Homes",
    desc: "Building a user-friendly real estate website for property listings and seamless customer experiences.",
    date: "12-06-2024",
    imgsrc: imgFifteen,
  },
  {
    title: "Gaming App Development",
    type: "Socmed",
    client: "Game Galaxy",
    desc: "Creating an engaging gaming app with stunning visuals and immersive gameplay experiences.",
    date: "01-19-2025",
    imgsrc: imgSixteen,
  },
];
