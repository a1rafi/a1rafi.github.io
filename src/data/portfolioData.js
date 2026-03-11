import { Code, Cpu, Database, Globe } from "lucide-react";

export const PROFILE = {
  name: "Al Rafi Ahmed",
  location: "Dhaka, Bangladesh",
  email: "arahmed179@gmail.com",
  github: "https://github.com/a1rafi",
  linkedin: "https://linkedin.com/in/hello-al-rafi",
};

export const SKILLS = [
  { category: "Languages", items: ["Python", "Java", "JavaScript", "C++"], icon: Code },
  {
    category: "AI & ML",
    items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "LangChain", "Gemini API"],
    icon: Cpu,
  },
  {
    category: "Web Dev",
    items: ["FastAPI", "ReactJS", "ExpressJS", "NodeJS", "Tailwind CSS"],
    icon: Globe,
  },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "ChromaDB"], icon: Database },
];

export const EXPERIENCE = [
  {
    company: "TallyKhata",
    role: "Product Engineering Intern",
    period: "Mar 2025 - Jun 2025",
    description: [
      "Automated PostgreSQL data retrieval with Python ETL scripts, speeding up workflows by 30%.",
      "Built a call analytics pipeline using Gemini API for topic extraction and automated insights.",
      "Implemented rate limiting for API stability and investigated database transaction anomalies.",
    ],
  },
  {
    company: "Brac University",
    role: "Undergraduate Teaching Assistant",
    period: "Oct 2023 - Jan 2025",
    description: [
      "Assisted in Data Structure and Complex Numbers & Laplace Transformations courses.",
      "Provided 15+ hours/week consultation for lab tasks and code correctness.",
      "Graded assignments and maintained accurate academic records.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Multilingual RAG System",
    tech: ["FastAPI", "LangChain", "ChromaDB", "Google Gemini"],
    desc: "Architected a scalable RAG pipeline with a 40% improvement in Bengali text retrieval relevance.",
    type: "AI & LLM",
    url: "https://github.com/a1rafi/multilingual-rag-system",
  },
  {
    title: "AirBNB Rent Platform",
    tech: ["ReactJS", "ExpressJS", "MongoDB", "TailwindCSS"],
    desc: "Full-stack property rental platform with secure Google OAuth and booking management flows.",
    type: "Web Development",
    url: "https://github.com/a1rafi/airbnb-rent-platform",
  },
  {
    title: "Multilevel Image Classification",
    tech: ["TensorFlow", "CNN", "ResNet50", "InceptionNet"],
    desc: "Deep learning pipeline achieving 20% higher accuracy than baseline models.",
    type: "Computer Vision",
    url: "https://github.com/a1rafi/multilevel-image-classification",
  },
];

export const STATS = [
  // { value: "3.86", label: "CSE CGPA" },
  { value: "6x", label: "VC's List" },
  { value: "2x", label: "Dean's List" },
  { value: "ITEE", label: "FE Certified" },
  { value: "15+", label: "TA Hours/Week" },
];

export const CONTACT_TEMPLATES = {
  talk: { subject: "Let's Talk", message: "Hi Al Rafi, I would like to discuss a project with you." },
  cv: { subject: "CV Request", message: "Hi Al Rafi, please share your latest CV." },
};
