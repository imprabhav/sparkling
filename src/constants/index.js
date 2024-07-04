import {
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  h1,
  h2,
  h3,
  r1,
  r2,
} from "../assets/index";

const activityData = [
  {
    key: 1,
    activity: "Art & Drawing",
    age: "2-5 Years",
    time: "9-10 AM",
    capacity: "15 Kids",
    image: a4,
  },
  {
    key: 2,
    activity: "Color Management",
    age: "2-5 Years",
    time: "9-10 AM",
    capacity: "15 Kids",
    image: a5,
  },
  {
    key: 3,
    activity: "Athletic & Dance",
    age: "2-5 Years",
    time: "10-11 AM",
    capacity: "15 Kids",
    image: a6,
  },
  {
    key: 4,
    activity: "Language & Speaking",
    age: "2-5 Years",
    time: "10-11 AM",
    capacity: "15 Kids",
    image: a3,
  },
  {
    key: 5,
    activity: "Religion & History",
    age: "2-5 Years",
    time: "11-12 AM",
    capacity: "15 Kids",
    image: a2,
  },
  {
    key: 6,
    activity: "General Knowledge",
    age: "2-5 Years",
    time: "11-12 AM",
    capacity: "15 Kids",
    image: a1,
  },
];

const facilitiesData = [
  {
    key: 1,
    heading: "Day care",
    text: "Convenient, nurturing day care services providing a safe, stimulating environment for students outside school hours.",
  },
  {
    key: 2,
    heading: "Parents as teachers",
    text: "Empowering parents as active partners in their child's education through resources and collaborative programs.",
  },
  {
    key: 3,
    heading: "Smart learning",
    text: "Interactive smart learning with advanced technology to enhance educational experiences and foster digital literacy.",
  },
  {
    key: 4,
    heading: "Physical activities",
    text: "Engaging physical activities to promote fitness, teamwork, and healthy lifestyles for all students.",
  },
];

const galleryData = [
  {
    id: 1,
    img: g1,
  },
  {
    id: 2,
    img: g3,
  },
  {
    id: 3,
    img: g5,
  },
  {
    id: 4,
    img: g6,
  },
  {
    id: 5,
    img: g8,
  },
  {
    id: 6,
    img: g2,
  },
  {
    id: 7,
    img: g7,
  },
  {
    id: 8,
    img: g4,
  },
  {
    id: 9,
    img: g9,
  },
];

const heroData = [
  {
    id: 1,
    heading1: "Make A Better Future",
    heading2: "For Your Child",
    subHeading:
      "Quality education and holistic development empower lifelong success.",
    bgImg: h2,
  },
  {
    id: 2,
    heading1: "Make A Better Future",
    heading2: "For Your Child",
    subHeading:
      "Quality education and holistic development empower lifelong success.",
    bgImg: h1,
  },
  {
    id: 3,
    heading1: "Make A Better Future",
    heading2: "For Your Child",
    subHeading:
      "Quality education and holistic development empower lifelong success.",
    bgImg: h3,
  },
];

const links = ["facilities", "gallery", "about", "activities", "reviews"];

const reviewData = [
  {
    id: 1,
    review:
      "Our experience has been wonderful! The teachers are dedicated, and the curriculum is engaging. My child loves going to school every day.",
    name: "Kishan J",
    role: "Parent",
    img: r1,
  },
  {
    id: 2,
    review:
      "The focus on both academics and physical activities has really helped my son thrive. He is more confident and active than ever.",
    name: "Anuradha P",
    role: "Parent",
    img: r2,
  },
  {
    id: 3,
    review:
      "I appreciate the school's commitment to smart learning. The use of technology in classrooms has greatly enhanced my daughter's learning experience.",
    name: "Nisha D",
    role: "Parent",
    img: r2,
  },
  {
    id: 4,
    review:
      "The day care service has been a lifesaver for our family. Knowing my child is in a safe, nurturing environment gives me peace of mind.",
    name: "Manish K",
    role: "Parent",
    img: r1,
  },
  {
    id: 5,
    review:
      "Having parents actively involved as teachers has been a game-changer. The collaborative approach has strengthened our family bond and my child's educational journey.",
    name: "Rajeev S",
    role: "Parent",
    img: r1,
  },
];

export {
  activityData,
  facilitiesData,
  galleryData,
  heroData,
  links,
  reviewData,
};
