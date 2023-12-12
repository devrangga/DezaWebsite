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

export type navbar = {
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

export type recentworkbutton = {
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

export type recentworkcard = {
  id: number;
  title: string;
  type: string;
  client: string;
  desc: string;
  date: string;
  imgsrc: StaticImageData;
};
export const recentWorkCards: recentworkcard[] = [
  {
    id: 0,
    title: "The Big Project",
    type: "Animation",
    client: "Deza Studio",
    desc: "We specialize in bringing products and brands to life through captivating animations, crafting distinctive brand logos that reflect your essence. Our team of creative experts works closely with clients to understand their vision and deliver animations that exceed expectations. The Big Project showcases our commitment to excellence and innovation in the field of animation, setting a new standard for visual storytelling.",
    date: "December, 2023",
    imgsrc: imgOne,
  },
  {
    id: 1,
    title: "Creative Design",
    type: "Animation",
    client: "PixelCraft",
    desc: "Our graphic design services create a visual language for your brand that is consistent across different contexts. At PixelCraft, we believe in the power of creativity to make a lasting impression. Creative Design is a testament to our dedication to pushing the boundaries of design, delivering solutions that not only meet but exceed our clients' expectations. Join us on a journey of artistic exploration and design excellence.",
    date: "November, 2023",
    imgsrc: imgTwo,
  },
  {
    id: 2,
    title: "Product Showcase",
    type: "WebApp",
    client: "Tech Innovators",
    desc: "Showcasing products online with responsive and user-friendly web development services for enhanced user experience. Our team at Tech Innovators is passionate about transforming ideas into digital experiences. Product Showcase is a testament to our commitment to creating seamless online platforms that captivate and engage users. Explore the future of web development with us as we redefine the online product showcasing experience.",
    date: "December, 2023",
    imgsrc: imgThree,
  },
  {
    id: 3,
    title: "E-commerce Platform",
    type: "WebApp",
    client: "Shopify Emporium",
    desc: "Building a robust e-commerce platform to help businesses thrive in the online marketplace. At Shopify Emporium, we understand the dynamic nature of e-commerce and the need for reliable and scalable solutions. Our E-commerce Platform project is a manifestation of our commitment to empowering businesses with cutting-edge online retail capabilities. Join us in shaping the future of online commerce.",
    date: "January, 2024",
    imgsrc: imgFour,
  },
  {
    id: 4,
    title: "Mobile App Development",
    type: "Design",
    client: "App Innovations",
    desc: "Creating innovative and user-friendly mobile applications to meet the evolving needs of your users. App Innovations is dedicated to pushing the boundaries of mobile app development, combining functionality with a seamless user experience. Our Mobile App Development project reflects our passion for creating apps that not only meet user needs but also set new standards for usability and design.",
    date: "February, 2024",
    imgsrc: imgFive,
  },
  {
    id: 5,
    title: "Social Media Campaign",
    type: "Design",
    client: "Digital Buzz",
    desc: "Strategizing and executing engaging social media campaigns to boost your brand's online presence. Digital Buzz is committed to helping brands make a splash in the digital world. Our Social Media Campaign project is a showcase of our strategic thinking and creative execution, designed to elevate your brand's visibility and engagement across various social media platforms.",
    date: "March, 2024",
    imgsrc: imgSix,
  },
  {
    id: 6,
    title: "Corporate Branding",
    type: "Animation",
    client: "Global Enterprises",
    desc: "Crafting a strong corporate identity through effective branding strategies and design elements. Global Enterprises understands the importance of a strong brand presence in today's competitive landscape. Our Corporate Branding project is a testament to our expertise in creating cohesive and impactful brand identities that resonate with audiences worldwide. Join us in shaping brands that leave a lasting impression.",
    date: "April, 2024",
    imgsrc: imgSeven,
  },
  {
    id: 7,
    title: "Event Promotion",
    type: "Animation",
    client: "Event Dynamics",
    desc: "Promoting events with eye-catching promotional materials and digital marketing strategies. Event Dynamics specializes in creating buzzworthy events that leave a lasting impression. Our Event Promotion project is a showcase of our creativity and strategic approach to event marketing, designed to captivate audiences and drive attendance. Let us elevate your events to new heights.",
    date: "May, 2024",
    imgsrc: imgEight,
  },
  {
    id: 8,
    title: "Health and Wellness App",
    type: "WebApp",
    client: "Wellness Innovate",
    desc: "Developing a health and wellness app to empower users in achieving their fitness goals. Wellness Innovate is dedicated to enhancing the well-being of individuals through innovative technology. Our Health and Wellness App project is a reflection of our commitment to creating user-friendly solutions that promote a healthy lifestyle. Join us on a journey to wellness and fitness.",
    date: "June, 2024",
    imgsrc: imgNine,
  },
  {
    id: 9,
    title: "Educational Platform",
    type: "WebApp",
    client: "LearnHub",
    desc: "Building an interactive educational platform to facilitate seamless learning experiences for students. LearnHub is passionate about revolutionizing education through technology. Our Educational Platform project is designed to create a collaborative and engaging learning environment for students and educators alike. Join us in shaping the future of education.",
    date: "July, 2024",
    imgsrc: imgTen,
  },
  {
    id: 10,
    title: "Travel Exploration Site",
    type: "Socmed",
    client: "Travel Discoveries",
    desc: "Creating a visually stunning website for travel enthusiasts to explore and plan their next adventure. Travel Discoveries is dedicated to igniting the spirit of adventure through immersive travel experiences. Our Travel Exploration Site project is a visual journey that invites users to discover new destinations and plan unforgettable journeys. Join us in exploring the world through the lens of travel.",
    date: "August, 2024",
    imgsrc: imgEleven,
  },
  {
    id: 11,
    title: "Restaurant App",
    type: "Socmed",
    client: "Foodie Delight",
    desc: "Developing a feature-rich app for restaurants to enhance customer engagement and streamline operations. Foodie Delight is committed to revolutionizing the restaurant experience through innovative technology. Our Restaurant App project is a blend of functionality and design, designed to elevate the dining experience for both restaurants and customers. Join us in creating a seamless and delightful dining experience.",
    date: "September, 2024",
    imgsrc: imgTwelve,
  },
  {
    id: 12,
    title: "Fashion Brand Launch",
    type: "Design",
    client: "Chic Couture",
    desc: "Launching a new fashion brand with a visually appealing website and online marketing strategies. Chic Couture is synonymous with style and elegance. Our Fashion Brand Launch project is a celebration of creativity and sophistication, designed to introduce a new era of fashion to the world. Join us in defining the future of style and luxury.",
    date: "October, 2024",
    imgsrc: imgThirteen,
  },
  {
    id: 13,
    title: "Tech Conference",
    type: "Design",
    client: "Tech Summit",
    desc: "Designing promotional materials and managing the online presence for a tech conference. Tech Summit is dedicated to bringing together innovators and thought leaders in the tech industry. Our Tech Conference project is a showcase of our expertise in event branding and digital marketing, designed to create a memorable and impactful conference experience. Join us in shaping the future of technology.",
    date: "November, 2024",
    imgsrc: imgFourteen,
  },
  {
    id: 14,
    title: "Real Estate Website",
    type: "Socmed",
    client: "Dream Homes",
    desc: "Building a user-friendly real estate website for property listings and seamless customer experiences. Dream Homes is committed to simplifying the home-buying experience through innovative technology. Our Real Estate Website project is a reflection of our dedication to creating a user-friendly platform that connects buyers with their dream homes. Join us in the journey to finding your perfect home.",
    date: "December, 2024",
    imgsrc: imgFifteen,
  },
  {
    id: 15,
    title: "Gaming App Development",
    type: "Socmed",
    client: "Game Galaxy",
    desc: "Creating an engaging gaming app with stunning visuals and immersive gameplay experiences. Game Galaxy is dedicated to pushing the boundaries of gaming through creative and immersive experiences. Our Gaming App Development project is a journey into the world of interactive entertainment, designed to captivate gamers and redefine the gaming landscape. Join us in the quest for gaming excellence.",
    date: "January, 2025",
    imgsrc: imgSixteen,
  },
];
