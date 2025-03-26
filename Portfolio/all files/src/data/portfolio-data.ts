// This file contains all the data for the portfolio website
// Edit this file to update your personal information, skills, experience, education, and projects

export const personalInfo = {
  name: "Your Name",
  title: "Web Developer & Designer",
  email: "contact@example.com",
  phone: "+1 (123) 456-7890",
  location: "San Francisco, CA",
  bio: "I'm a passionate web developer and designer with over 5 years of experience creating beautiful, functional websites and applications that help businesses grow.",
  longBio: `I began my journey as a self-taught developer, learning to code while working in marketing.
  This unique background gives me a perspective that blends technical expertise with a deep
  understanding of user experience and business goals.

  Over the years, I've worked with startups, agencies, and established companies to create
  digital products that are not only visually stunning but also drive results.

  My approach combines clean code, modern design principles, and performance optimization to
  deliver websites and applications that exceed expectations.`,
  profileImage: "/placeholder-profile.jpg", // Place your profile image in the public folder
  backgroundImage: "/placeholder-background.jpg", // Place a background image in the public folder
  socialLinks: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
  }
};

export const skills = [
  { name: "JavaScript", category: "Frontend", level: "Expert" },
  { name: "TypeScript", category: "Frontend", level: "Advanced" },
  { name: "React", category: "Frontend", level: "Expert" },
  { name: "Next.js", category: "Frontend", level: "Advanced" },
  { name: "Node.js", category: "Backend", level: "Intermediate" },
  { name: "TailwindCSS", category: "Frontend", level: "Expert" },
  { name: "UI/UX Design", category: "Design", level: "Advanced" },
  { name: "Figma", category: "Design", level: "Advanced" },
  { name: "HTML5", category: "Frontend", level: "Expert" },
  { name: "CSS3", category: "Frontend", level: "Expert" },
  { name: "GraphQL", category: "Backend", level: "Intermediate" },
  { name: "MongoDB", category: "Backend", level: "Intermediate" },
  { name: "PostgreSQL", category: "Backend", level: "Intermediate" },
  { name: "Git", category: "DevOps", level: "Advanced" },
  { name: "AWS", category: "DevOps", level: "Intermediate" },
  { name: "Docker", category: "DevOps", level: "Intermediate" },
];

export const experience = [
  {
    position: "Senior Frontend Developer",
    company: "Tech Company Inc.",
    location: "San Francisco, CA",
    period: "2020 - Present",
    description: "Led the development of responsive web applications using React and Next.js. Implemented design systems and optimized performance.",
    responsibilities: [
      "Developed and maintained front-end architecture for multiple web applications",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Collaborated with designers to create seamless user experiences",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    position: "Web Developer",
    company: "Digital Agency",
    location: "New York, NY",
    period: "2018 - 2020",
    description: "Developed websites and applications for a variety of clients across different industries. Worked closely with designers to implement pixel-perfect UIs.",
    responsibilities: [
      "Built responsive websites using modern JavaScript frameworks",
      "Implemented CMS solutions for client content management",
      "Optimized site performance and accessibility",
      "Participated in client meetings and project planning"
    ]
  },
  {
    position: "Junior Developer",
    company: "Startup Studio",
    location: "Boston, MA",
    period: "2017 - 2018",
    description: "Contributed to frontend development of web applications. Learned modern development workflows and techniques while collaborating in agile teams.",
    responsibilities: [
      "Assisted in development of frontend components",
      "Fixed bugs and improved existing features",
      "Participated in daily stand-ups and sprint reviews",
      "Learned and applied best practices in web development"
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    location: "City, State",
    year: "2013 - 2017",
    description: "Focused on web technologies, databases, and user experience design. Graduated with honors.",
    achievements: [
      "Dean's List 2015-2017",
      "Senior Thesis: 'User Experience Design in Modern Web Applications'",
      "Web Development Club President"
    ]
  },
  {
    degree: "UI/UX Design Certification",
    school: "Design Institute",
    location: "Online",
    year: "2019",
    description: "Specialized training in user interface and experience design principles, wireframing, and prototyping.",
    achievements: [
      "Completed 300+ hours of coursework",
      "Designed and prototyped 5 major projects",
      "Received distinction on final portfolio"
    ]
  }
];

export const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js, featuring product catalog, cart functionality, and secure checkout.",
    image: "/placeholder-project-1.jpg", // Place project images in the public folder
    technologies: ["Next.js", "React", "TypeScript", "Stripe", "TailwindCSS"],
    link: "https://example.com/project1",
    github: "https://github.com/username/project1",
    featured: true
  },
  {
    title: "Portfolio Website",
    description: "A portfolio website for a photographer showcasing their work with a beautiful gallery and contact form.",
    image: "/placeholder-project-2.jpg",
    technologies: ["React", "CSS Modules", "Framer Motion", "Firebase"],
    link: "https://example.com/project2",
    github: "https://github.com/username/project2",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A productivity application for teams to manage tasks, deadlines, and collaborate on projects.",
    image: "/placeholder-project-3.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    link: "https://example.com/project3",
    github: "https://github.com/username/project3",
    featured: true
  },
  {
    title: "Health & Fitness Tracker",
    description: "A mobile-first application for tracking workouts, nutrition, and health metrics.",
    image: "/placeholder-project-4.jpg",
    technologies: ["React Native", "TypeScript", "Redux", "Firebase"],
    link: "https://example.com/project4",
    github: "https://github.com/username/project4",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecast weather data for any location.",
    image: "/placeholder-project-5.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    link: "https://example.com/project5",
    github: "https://github.com/username/project5",
    featured: false
  },
  {
    title: "Blog Platform",
    description: "A custom blog platform with content management system and commenting functionality.",
    image: "/placeholder-project-6.jpg",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
    link: "https://example.com/project6",
    github: "https://github.com/username/project6",
    featured: false
  }
];

export const testimonials = [
  {
    name: "John Smith",
    position: "CEO, Tech Startup",
    company: "TechStart Inc.",
    image: "/placeholder-testimonial-1.jpg", // Place testimonial images in the public folder
    text: "Working with this developer was a great experience. They delivered exactly what we needed, on time and with excellent quality. I would highly recommend them for any web development project."
  },
  {
    name: "Sarah Johnson",
    position: "Creative Director",
    company: "Design Studio",
    image: "/placeholder-testimonial-2.jpg",
    text: "An exceptional talent with a keen eye for design and technical expertise. They transformed our vision into a stunning website that has received numerous compliments from our clients."
  },
  {
    name: "Michael Brown",
    position: "Product Manager",
    company: "Software Company",
    image: "/placeholder-testimonial-3.jpg",
    text: "Not only did they deliver an excellent product, but their communication throughout the project was top-notch. They took the time to understand our needs and provided valuable suggestions to improve our original concept."
  }
];

export const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    icon: "Code", // You can use Lucide icon names here
    features: [
      "Responsive design for all devices",
      "Performance optimization",
      "Cross-browser compatibility",
      "SEO-friendly code structure"
    ]
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that focus on usability, accessibility, and visual appeal.",
    icon: "PenTool",
    features: [
      "Wireframing and prototyping",
      "User research and testing",
      "Brand integration",
      "Interactive design elements"
    ]
  },
  {
    title: "Frontend Development",
    description: "Creating responsive, interactive user interfaces with modern JavaScript frameworks.",
    icon: "Layout",
    features: [
      "React, Next.js, and other modern frameworks",
      "State management solutions",
      "Responsive layouts",
      "Animations and transitions"
    ]
  },
  {
    title: "Consulting",
    description: "Expert advice on web development, design, and technology choices for your projects.",
    icon: "MessageSquare",
    features: [
      "Technology stack recommendations",
      "Code reviews and audits",
      "Performance optimization",
      "Accessibility improvements"
    ]
  }
];

// Site configuration
export const siteConfig = {
  title: "Professional Portfolio - Web Development & Design",
  description: "Welcome to my professional portfolio showcasing my skills in web development, design, and consulting. View my projects and get in touch for collaboration.",
  keywords: "web developer, designer, frontend, portfolio, react, next.js",
  themeColor: "#C85380", // Primary color (pink) from the design
  accentColor: "#29b0b5", // Secondary color (teal) from the design
  footerText: "All rights reserved.",
  // Add any other site-wide configuration options here
};

// Contact form configuration
export const contactConfig = {
  emailService: "example", // Replace with your email service (e.g., formspree, emailjs)
  emailServiceId: "your-service-id", // If using a service like EmailJS
  formTemplate: "your-template-id", // If using a service like EmailJS
  formEndpoint: "https://formspree.io/f/your-form-id", // If using Formspree
  // Add other email service configuration options as needed
};

// Add more data sections as needed
