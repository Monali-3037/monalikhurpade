// Centralized Portfolio Data for Monali Khurpade

export const personalInfo = {
  name: "Monali Khurpade",
  shortName: "Monali",
  taglines: [
    "Information Technology Engineering Student",
    "Exploring AI & Machine Learning",
    "Building Modern Web Experiences",
    "Passionate Problem Solver"
  ],
  introduction:
    "I am an Information Technology engineering student with a background in Computer Engineering. I enjoy exploring new technologies, solving problems, and building practical projects. My interests include Artificial Intelligence, Machine Learning, and Web Development, and I am continuously working to improve my technical skills.",
  
  aboutMeText:
    "I am a passionate technology learner pursuing B.Tech in Information Technology at R. C. Patel Institute of Technology, Shirpur. I completed my Diploma in Computer Engineering from Government Polytechnic, Dhule, achieving 90.00%. My academic journey has helped me develop a foundation in programming and computer science. I am interested in AI, Machine Learning, and Web Development, and I enjoy turning ideas into useful digital solutions.",
  
  currentEducation: {
    degree: "B.Tech in Information Technology (IT)",
    college: "R. C. Patel Institute of Technology, Shirpur",
    status: "Currently Pursuing"
  },
  
  previousEducation: {
    degree: "Diploma in Computer Engineering",
    college: "Government Polytechnic, Dhule",
    percentage: "90.00%"
  },

  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Web Development",
    "Software Development"
  ],

  // Verified Social and Coding Profiles
  contact: {
    email: "khurpademonali00@gmail.com",
    linkedin: "https://www.linkedin.com/in/monali-khurpade-6b6a8a430",
    leetcode: "https://leetcode.com/u/WVZ45AdG3u/",
    github: "https://github.com/Monali-3037",
    codechef: "https://www.codechef.com/users/rcp_cc_763",
    location: "Maharashtra, India"
  },

  photoUrl: "/profile.jpg"
};

export const skillsData = {
  programmingAndDev: [
    { name: "Python", category: "Language", icon: "Code2" },
    { name: "Java", category: "Language", icon: "Coffee" },
    { name: "C", category: "Language", icon: "Terminal" },
    { name: "HTML", category: "Frontend", icon: "Globe" },
    { name: "CSS", category: "Frontend", icon: "Palette" },
    { name: "JavaScript", category: "Language / Web", icon: "Cpu" },
    { name: "React", category: "Frontend Library", icon: "Atom" },
    { name: "Node.js", category: "Runtime / Backend", icon: "Server" }
  ],
  databaseAndTools: [
    { name: "MongoDB", category: "Database", icon: "Database" },
    { name: "Git", category: "Version Control", icon: "GitBranch" },
    { name: "GitHub", category: "Code Collaboration", icon: "Github" },
    { name: "VS Code", category: "Development Tool", icon: "Laptop" },
    { name: "Postman", category: "API Testing", icon: "Send" }
  ],
  interestsAndLearning: [
    { name: "Artificial Intelligence", status: "Area of Interest", icon: "Brain" },
    { name: "Machine Learning", status: "Area of Interest", icon: "Sparkles" },
    { name: "Django", status: "Currently Learning", icon: "Layers" },
    { name: "Full-Stack Web Development", status: "Continuous Growth", icon: "Layout" }
  ]
};

export const projectsData = [
  {
    id: "healthcare-system",
    title: "Smart Healthcare Appointment and Prediction System",
    category: "Full-Stack Web Application",
    shortDescription: "A healthcare web application designed to simplify doctor discovery and appointment booking.",
    fullDescription:
      "A healthcare web application designed to simplify doctor discovery and appointment booking. The system includes role-based access for administrators, doctors, and patients, with doctor management and appointment-related features. The prediction component is a planned or developing feature and must not be presented as completed unless it is implemented.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    status: "In Development",
    plannedFeatures: "Disease & symptom prediction component is planned and currently under development.",
    roleAccess: ["Patients (Book Appointments)", "Doctors (Manage Schedules)", "Administrators (Platform Management)"],
    githubUrl: "#placeholder-github-healthcare",
    liveDemoUrl: "#placeholder-demo-healthcare"
  },
  {
    id: "yoga-recommendation",
    title: "Yoga Recommendation System",
    category: "Recommendation System",
    shortDescription: "A project focused on recommending suitable yoga practices based on user requirements.",
    fullDescription:
      "A project focused on recommending suitable yoga practices based on user requirements. The goal is to make yoga recommendations easier to explore through a simple and user-friendly system.",
    technologies: ["Python", "Recommendation Logic", "Machine Learning Concepts"],
    status: "Core Prototype",
    plannedFeatures: "Tailored yoga asanas matching individual physical wellness goals and flexible search.",
    roleAccess: ["General Users seeking personalized yoga guidance"],
    githubUrl: "#placeholder-github-yoga",
    liveDemoUrl: "#placeholder-demo-yoga"
  }
];

export const educationTimeline = [
  {
    period: "Currently Pursuing",
    degree: "B.Tech in Information Technology (IT)",
    institution: "R. C. Patel Institute of Technology, Shirpur",
    description: "Focusing on core computer science subjects, modern software engineering, web application architectures, and artificial intelligence foundations.",
    type: "Degree"
  },
  {
    period: "Completed with Distinction",
    degree: "Diploma in Computer Engineering",
    institution: "Government Polytechnic, Dhule",
    score: "90.00%",
    description: "Built strong fundamentals in algorithms, programming in C & Java, database administration, operating systems, and computer hardware architectures.",
    type: "Diploma"
  }
];

// Spoken Section Narrations for Section "Read Aloud" Audio Feature
export const sectionNarrations = {
  home: "Hi, I am Monali Khurpade, an Information Technology engineering student at R. C. Patel Institute of Technology, Shirpur. I have a background in Computer Engineering with a 90 percent diploma score. My interests include Artificial Intelligence, Machine Learning, and Web Development.",
  about: "A Little About Me: I am pursuing B.Tech in Information Technology at R. C. Patel Institute of Technology, Shirpur. I completed my Diploma in Computer Engineering from Government Polytechnic, Dhule, achieving 90.00%. My academic journey has helped me develop a strong foundation in programming and computer science. I enjoy turning ideas into useful digital solutions.",
  skills: "Technical Skills: In programming and development, Monali works with Python, Java, C, HTML, CSS, JavaScript, React, and Node.js. For database and tools, she uses MongoDB, Git, GitHub, VS Code, and Postman. Her active areas of learning and interest include Artificial Intelligence, Machine Learning, Django, and Full-Stack Web Development.",
  projects: "Projects: Project 1 is the Smart Healthcare Appointment and Prediction System, built with React, Node.js, Express.js, and MongoDB, featuring role-based access for patients, doctors, and admins. The prediction component is planned and under active development. Project 2 is the Yoga Recommendation System, built with Python to recommend suitable yoga practices based on user requirements.",
  education: "Education: Monali is currently pursuing B.Tech in Information Technology at R. C. Patel Institute of Technology, Shirpur. Previously, she completed her Diploma in Computer Engineering from Government Polytechnic, Dhule, graduating with an aggregate score of 90.00% distinction.",
  contact: "Let's Connect: Monali is always interested in learning, collaborating on projects, and connecting with people. You can reach out through the contact form, email, or connect via LinkedIn, GitHub, LeetCode, and CodeChef."
};

export const voiceCommandsHelp = [
  { command: "“Read About Me”", action: "Speaks aloud the About Me section" },
  { command: "“Read Skills”", action: "Speaks aloud verified skills & tools" },
  { command: "“Read Projects”", action: "Speaks aloud project summaries" },
  { command: "“Read Education”", action: "Speaks aloud academic background" },
  { command: "“Read Contact”", action: "Speaks aloud connection & profile details" },
  { command: "“Stop Reading”", action: "Immediately silences spoken audio" },
  { command: "“Go to Home”", action: "Scrolls to top landing page" },
  { command: "“Open About Me”", action: "Navigates to About Me section" },
  { command: "“Show my skills”", action: "Jumps to verified Skills & Tools" },
  { command: "“Show my projects”", action: "Opens Projects gallery" },
  { command: "“Go to Education”", action: "Takes you to Education timeline" },
  { command: "“Open Contact”", action: "Scrolls to contact form & social links" },
  { command: "“Toggle Theme”", action: "Switches between Dark and Light mode" }
];
