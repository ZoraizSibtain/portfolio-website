import type {ReactNode} from 'react';
import ContainerTitle from "@/components/Common/ContainerTitle.js";
import {
  SiOpenai, SiGoogle, SiReact, SiNodedotjs, SiJavascript,
  SiTypescript, SiBootstrap, SiDjango, SiDotnet, SiPostgresql,
  SiMongodb, SiSelenium, SiFirebase, SiGit,
} from 'react-icons/si';
import {
  FaBrain, FaLink, FaLock, FaServer, FaProjectDiagram, FaUserCheck,
} from 'react-icons/fa';
import {FiZap, FiGitMerge, FiLayout, FiCpu} from 'react-icons/fi';

type Skill = {
  name: string;
  category: string;
  icon: ReactNode;
};

type SkillSection = {
  title: string;
  skills: Skill[];
};

const sections: SkillSection[] = [
  {
    title: "AI & LLMs",
    skills: [
      {name: "Claude",       category: "Anthropic",     icon: <FaBrain />},
      {name: "ChatGPT",      category: "OpenAI",        icon: <SiOpenai />},
      {name: "Gemini",       category: "Google",        icon: <SiGoogle />},
      {name: "LangChain",    category: "AI Framework",  icon: <FaLink />},
      {name: "LangGraph",    category: "AI Framework",  icon: <FiCpu />},
      {name: "AI Workflows", category: "Automation",    icon: <FiZap />},
    ],
  },
  {
    title: "Frontend",
    skills: [
      {name: "React",       category: "Framework",  icon: <SiReact />},
      {name: "JavaScript",  category: "Language",   icon: <SiJavascript />},
      {name: "TypeScript",  category: "Language",   icon: <SiTypescript />},
      {name: "Bootstrap",   category: "CSS",        icon: <SiBootstrap />},
    ],
  },
  {
    title: "Backend",
    skills: [
      {name: "Node.js",  category: "Runtime",    icon: <SiNodedotjs />},
      {name: "Django",   category: "Framework",  icon: <SiDjango />},
      {name: ".NET",     category: "Framework",  icon: <SiDotnet />},
    ],
  },
  {
    title: "Databases",
    skills: [
      {name: "PostgreSQL",  category: "Relational",  icon: <SiPostgresql />},
      {name: "MongoDB",     category: "NoSQL",       icon: <SiMongodb />},
    ],
  },
  {
    title: "Testing & QA",
    skills: [
      {name: "Selenium",      category: "Automation",  icon: <SiSelenium />},
      {name: "CI/CD",         category: "DevOps",      icon: <FiGitMerge />},
      {name: "API Testing",   category: "QA",          icon: <FaServer />},
      {name: "Manual QA",     category: "QA",          icon: <FaUserCheck />},
    ],
  },
  {
    title: "Security & Tools",
    skills: [
      {name: "JWT",       category: "Auth",     icon: <FaLock />},
      {name: "Firebase",  category: "Auth",     icon: <SiFirebase />},
      {name: "Git",       category: "Version Control",  icon: <SiGit />},
      {name: "UML",       category: "Architecture",     icon: <FiLayout />},
      {name: "Systems Architecture", category: "Design", icon: <FaProjectDiagram />},
    ],
  },
];

function SkillCard({skill}: {skill: Skill}) {
  return (
    <div className="flex cursor-default flex-row items-center justify-start p-2 sm:p-3 rounded-md gap-3 border border-gray-200 hover:border-gray-400 hover:bg-gray-100 transition-all duration-200">
      <div className="text-xl sm:text-2xl text-gray-600 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
        {skill.icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm text-primary truncate">{skill.name}</p>
        <p className="text-xs text-gray-500 truncate">{skill.category}</p>
      </div>
    </div>
  );
}

const SkillsPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <ContainerTitle title="Skills" />
        <p className="text-gray-500 text-sm mt-1">Technologies and tools I work with.</p>
      </div>

      {sections.map((section) => (
        <div key={section.title} className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-gray-500 border-b border-gray-200 pb-2">
            {section.title}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {section.skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsPage;
