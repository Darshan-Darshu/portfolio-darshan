interface Feature {
  main: string;
  desc: string;
}
interface Tech {
  image: string;
  name: string;
}

export interface ProjectData {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  keyFeatures: Feature[];
  technology: Tech[];
  link: {
    video: string;
    demo: string;
  };
}

export interface SkillData {
  id: number;
  imageUrl: string;
  percentage: number;
}

export const projectData: ProjectData[] = [
  {
    id: 1,
    imageUrl: "ai-notion.png",
    title: "AI Collabarative Web APP",
    description:
      "Developed an AI-driven collaborative platform designed to enhance teamwork and productivity. The application leverages Live Blocks to facilitate real-time collaboration, offering features that streamline communication, task management, and decision-making.",
    keyFeatures: [
      {
        main: "Real-Time Collaboration",
        desc: "Enables multiple users to work together on documents, projects, or tasks simultaneously, with instant updates and version control.",
      },
      {
        main: "User Authentication",
        desc: " Integrated secure login and registration systems to ensure user privacy and data protection.",
      },
      {
        main: "AI-Powered Suggestions",
        desc: "Utilizes AI to provide intelligent suggestions for content, task prioritization, and resource allocation, enhancing efficiency.",
      },
      {
        main: "Customizable Workspaces",
        desc: "Allows users to create personalized workspaces with AI tools tailored to their specific needs.",
      },
    ],
    technology: [
      { image: "nextjs.png", name: "NextJS" },
      {
        image: "React-icon.png",
        name: "React",
      },
      { image: "firebase.png", name: "Firebase" },
      { image: "tailwind.png", name: "Tailwind" },
      { image: "clerk.png", name: "clerk" },
      { image: "liveblocks.png", name: "Live Blocks" },
    ],
    link: {
      video: "",
      demo: "https://github.com/",
    },
  },
  {
    id: 2,
    imageUrl: "chatwithanyone.png",
    title: "Chat With Anyone",
    description:
      "Developed a real-time web application that allows users to engage in chat conversations with anyone, anywhere, anylanguage. The app is designed with a focus on user experience, ensuring seamless communication",
    keyFeatures: [
      {
        main: "Real-Time Messaging",
        desc: "Leveraged WebSocket technology to enable instant messaging without delays.",
      },
      {
        main: "User Authentication",
        desc: " Integrated secure login and registration systems to ensure user privacy and data protection.",
      },
      {
        main: "Responsive Design",
        desc: " Ensured the app is fully responsive, providing an optimal user experience on both desktop and mobile devices.",
      },
      {
        main: "Customizable Profiles",
        desc: "Users can personalize their profiles with avatars, status messages, and other personal information.",
      },
      {
        main: "Scalability",
        desc: "Built the backend with Node.js and Express, optimizing for scalability to handle a large number of concurrent users.",
      },
    ],
    technology: [
      { image: "nextjs.png", name: "NextJS" },
      {
        image: "React-icon.png",
        name: "React",
      },
      { image: "firebase.png", name: "Firebase" },
      { image: "tailwind.png", name: "Tailwind" },
    ],
    link: {
      video: "",
      demo: "https://github.com/",
    },
  },
  {
    id: 3,
    imageUrl: "seatbookingapp.png",
    title: "Seat Booking App",
    description:
      "Developed a seat booking application tailored for a 51-seat satellite office located near JP Nagar. The app is designed to streamline the process of reserving workspaces, ensuring efficient use of office resources.",
    keyFeatures: [
      {
        main: "Real-Time Seat Availability",
        desc: "Provides a real-time view of available seats, allowing users to make quick decisions.",
      },
      {
        main: "Interactive Floor Plan",
        desc: " Integrated an interactive office layout where users can select and book their preferred seat.",
      },
      {
        main: "Automated Reminders",
        desc: " Sends email or push notifications to users to remind them of upcoming bookings or to free up unoccupied reserved seats",
      },
      {
        main: "Admin Dashboard",
        desc: "Built an admin dashboard for managing seat availability, viewing usage statistics, and handling cancellations",
      },
      {
        main: "User Authentication",
        desc: "Ensures that only authorized users can access the booking system, with secure login mechanisms.",
      },
    ],
    technology: [
      { image: "nextjs.png", name: "NextJS" },
      {
        image: "React-icon.png",
        name: "React",
      },
      { image: "tailwind.png", name: "Tailwind" },
      { image: "nodejs.png", name: "NodeJS" },
      {
        image: "mongo.png",
        name: "MongoDB",
      },
    ],
    link: {
      video: "",
      demo: "https://github.com/",
    },
  },
  {
    id: 4,
    imageUrl: "macys.png",
    title: "Macys, client project improvement demo",
    description:
      "Worked on improving the performance of the Macy’s website by focusing on reducing loading times and enhancing the overall user experience. This demo project involved analyzing the existing website and implementing solutions to make it faster and more efficients",
    keyFeatures: [
      {
        main: "Loading Time Reduction",
        desc: "Optimized the website by implementing techniques such as code minification, image compression, and lazy loading of assets",
      },
      {
        main: "Efficient Caching",
        desc: " Introduced better caching strategies to store frequently accessed data, reducing server requests and improving response times",
      },
      {
        main: "Code Refactoring",
        desc: " Cleaned and refactored the codebase to improve maintainability and remove performance bottlenecks.",
      },
    ],
    technology: [
      { image: "nextjs.png", name: "NextJS" },
      {
        image: "React-icon.png",
        name: "React",
      },
      { image: "tailwind.png", name: "Tailwind" },
      { image: "nodejs.png", name: "NodeJS" },
      {
        image: "mongo.png",
        name: "MongoDB",
      },
      { image: "clerk.png", name: "Clerk" },
    ],
    link: {
      video: "",
      demo: "https://github.com/",
    },
  },
  {
    id: 5,
    imageUrl: "dropbox.png",
    title: "Drop Box Clone",
    description:
      "Built a cloud storage application inspired by Dropbox, allowing users to upload, store, and share files securely. This project demonstrates expertise in cloud architecture, file management systems, and secure user data handling.",
    keyFeatures: [
      {
        main: "File Upload & Storage",
        desc: "Developed a robust system for users to upload and store various file types with organized folder structures",
      },
      {
        main: "File Sharing & Permissions",
        desc: "Implemented sharing features that allow users to share files with specific people, set view or edit permissions, and generate shareable links.",
      },
      {
        main: "Storage Quotas",
        desc: "Set storage limits for users, with an option to upgrade for more space, mimicking Dropbox's subscription model.",
      },
      {
        main: "User Authentication",
        desc: "Secure login with encryption to protect user data and files.",
      },
    ],
    technology: [
      { image: "nextjs.png", name: "NextJS" },
      {
        image: "React-icon.png",
        name: "React",
      },
      { image: "tailwind.png", name: "Tailwind" },
      { image: "firebase.png", name: "Firebase" },
      {
        image: "clerk.png",
        name: "Clerk",
      },
    ],
    link: {
      video: "",
      demo: "https://github.com/",
    },
  },
  {
    id: 6,
    imageUrl: "amazon.png",
    title: "MSA App Performance Optimization",
    description:
      "Developed a demo for an MSA (Merchandising Service Application) in macys, focused on improving the order processing time. The improvements led to a significant reduction in order time, cutting it from over 3 minutes to just 1 minute, enhancing user experience and operational efficiency.",

    keyFeatures: [
      {
        main: "Order Time Reduction",
        desc: "Implemented optimizations that reduced the order processing time by over 2 minutes, streamlining the workflow",
      },
      {
        main: "Effective Caching",
        desc: "Implemented advanced caching strategies to reduce redundant server requests, ensuring quicker access to frequently used data and faster order processing",
      },
      {
        main: "Reduced Waterfall Effect",
        desc: "Minimized the waterfall effect by restructuring API calls and loading assets in parallel, which significantly reduced delays and improved overall system responsiveness.",
      },
    ],
    technology: [
      { image: "nextjs.png", name: "NextJS" },
      {
        image: "React-icon.png",
        name: "React",
      },
      { image: "tailwind.png", name: "Tailwind" },
      { image: "nodejs.png", name: "NodeJS" },
      {
        image: "mongo.png",
        name: "MongoDB",
      },
    ],
    link: {
      video: "",
      demo: "https://github.com/",
    },
  },
  {
    id: 7,
    imageUrl: "amazon.png",
    title: "Amazon Clone",
    description:
      "Created a full-featured e-commerce platform inspired by Amazon, replicating key functionalities such as product browsing, shopping cart management, and order processing. This project showcases my ability to build complex, scalable web applications with a focus on user experience",
    keyFeatures: [
      {
        main: "Product Listings",
        desc: "Implemented dynamic product categories with detailed product pages, including images, descriptions, and customer reviews.",
      },
      {
        main: "Shopping Cart",
        desc: "Developed a shopping cart system that allows users to add, remove, and update items, with real-time price calculations.",
      },
      {
        main: "User Authentication & Profiles",
        desc: "Integrated secure user authentication, allowing users to create profiles, manage orders, and save favorite items.",
      },
      {
        main: "Search Functionality",
        desc: "Implemented advanced search and filtering options to help users find products quickly and easily.",
      },
    ],
    technology: [
      {
        image: "React-icon.png",
        name: "React",
      },
      { image: "redux.png", name: "Redux" },
      { image: "firebase.png", name: "Firebase" },
      {
        image: "stripe.png",
        name: "Stripe",
      },
    ],
    link: {
      video: "",
      demo: "https://github.com/",
    },
  },
];

export const skillData: SkillData[] = [
  {
    id: 1,
    imageUrl: "html.jpg",
    percentage: 85,
  },
  {
    id: 2,
    imageUrl: "css.png",
    percentage: 95,
  },
  {
    id: 3,
    imageUrl: "JavaScript-logo.png",
    percentage: 90,
  },
  {
    id: 4,
    imageUrl: "React-icon.png",
    percentage: 90,
  },
  {
    id: 5,
    imageUrl: "nodejs.png",
    percentage: 86,
  },
  {
    id: 6,
    imageUrl: "nextjs.png",
    percentage: 95,
  },
  {
    id: 7,
    imageUrl: "mongo.png",
    percentage: 80,
  },
  {
    id: 8,
    imageUrl: "tailwind.png",
    percentage: 92,
  },
  {
    id: 9,
    imageUrl: "git.png",
    percentage: 80,
  },
  {
    id: 10,
    imageUrl: "firebase.png",
    percentage: 81,
  },
  {
    id: 11,
    imageUrl: "tfjs.png",
    percentage: 83,
  },
  {
    id: 12,
    imageUrl: "coludflare.png",
    percentage: 70,
  },
  {
    id: 13,
    imageUrl: "sql1.jpg",
    percentage: 77,
  },
];
