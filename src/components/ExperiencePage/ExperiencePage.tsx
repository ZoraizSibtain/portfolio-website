import {useEffect, useRef} from 'react';
import ContainerTitle from "@/components/Common/ContainerTitle.js";
import {FiExternalLink} from 'react-icons/fi';

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  subtitle: string;
  bullets: string[];
  tags: string[];
};

type EducationItem = {
  degree: string;
  school: string;
  period: string;
  location: string;
  focus?: string;
  tags?: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Quality Assurance Lead",
    company: "True Security Consultant Limited",
    period: "Nov 2021 – Dec 2024",
    subtitle: "Led QA team of 10, automated documentation and incident analysis with AI.",
    bullets: [
      "Implemented ChatGPT AI to automate SOP reviewing, reducing documentation time from 5 hours to 90 minutes per procedure.",
      "Deployed ChatGPT to analyze production incident patterns across 200+ tickets, identifying root causes 60% faster and reducing recurring issues by 25%.",
      "Led end-to-end quality validation of a custom vehicle tracking system, ensuring accuracy of real-time data and system performance.",
      "Promoted to Team Lead; hired, trained, and mentored 10 analysts, enforcing quality standards and process consistency.",
      "Collaborated with stakeholders to gather, analyze, and translate business requirements into functional specifications.",
    ],
    tags: ["AI Automation", "QA", "Business Analysis", "Team Leadership", "Process Management"],
  },
  {
    role: "Software Engineering Intern",
    company: "Imatic Technologies Limited",
    period: "Apr 2021 – Oct 2021",
    subtitle: "Built automated test suites and supported CI/CD adoption across the dev workflow.",
    bullets: [
      "Implemented automated testing solutions using Selenium, significantly reducing regression testing time.",
      "Integrated automated tests into the development workflow, supporting CI/CD adoption.",
      "Created and maintained test scripts aligned with application functionality and business rules.",
      "Collaborated with developers to debug production defects and validate fixes before release.",
      "Contributed to full-stack development, gaining insight into testability, code quality, and system architecture.",
    ],
    tags: ["Selenium", "CI/CD", "Test Automation", "Full-Stack", "Debugging"],
  },
  {
    role: "IT Intern",
    company: "Kian Joo Can Factory Bhd",
    period: "Apr 2018 – Jun 2018",
    subtitle: "Server maintenance, asset audits, and ticketing system implementation.",
    bullets: [
      "Performed daily server backups and validation checks to ensure data integrity.",
      "Conducted hardware and system audits across multiple locations, improving asset tracking accuracy.",
      "Implemented OTRS ticketing system, reducing issue resolution time by 30% and improving support SLAs.",
      "Assisted in system troubleshooting and operational QA checks for internal IT services.",
    ],
    tags: ["OTRS", "System Administration", "IT Operations", "Hardware Audit"],
  },
];

const education: EducationItem[] = [
  {
    degree: "Professional Master of Computer Science",
    school: "Illinois Institute of Technology",
    period: "Summer 2026",
    location: "Chicago, Illinois",
    focus: "AI, AI integration into Enterprise Applications, Software Project Management, Systems Architecture, Advanced Database Organization, Parallel & Distributed Processing",
    tags: ["Artificial Intelligence", "Systems Architecture", "Distributed Processing", "Database Organization"],
  },
  {
    degree: "Bachelor of Software Engineering",
    school: "Taylor's University",
    period: "2019 – 2022",
    location: "Kuala Lumpur, Malaysia",
    tags: ["Software Engineering", "OOP", "Web Development", "Database Systems"],
  },
];

function FadeIn({children, delay = 0}: {children: React.ReactNode; delay?: number}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('fade-in-hidden');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.remove('fade-in-hidden');
            el.classList.add('animate-fade-in-up');
          }, delay);
          observer.disconnect();
        }
      },
      {threshold: 0.05}
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}

function Tag({label}: {label: string}) {
  return (
    <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md border border-gray-200">
      {label}
    </span>
  );
}

const ExperiencePage = () => {
  return (
    <div className="space-y-4">
      <FadeIn>
        <ContainerTitle title="Experience" />
        <p className="text-gray-500 text-sm mt-1">A timeline of my professional journey.</p>
      </FadeIn>

      {/* Vertical timeline */}
      <div className="relative mt-6">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-[168px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="flex justify-start pt-8 md:gap-10 first:pt-0">
                {/* Left: sticky date */}
                <div className="hidden md:flex flex-col items-end shrink-0 w-40 pt-1 relative">
                  <span className="text-gray-500 text-xs text-right leading-snug">{exp.period}</span>
                  {/* Dot */}
                  <div className="absolute -right-[14.5px] top-1 h-3 w-3 rounded-full bg-white border-2 border-gray-400 mt-0.5" />
                </div>

                {/* Right: content */}
                <div className="flex-1 pl-0 md:pl-6 pb-8 space-y-2">
                  {/* Mobile date */}
                  <p className="md:hidden text-xs text-gray-500 mb-1">{exp.period}</p>

                  <div className="flex flex-col gap-0.5">
                    <span className="text-primary font-medium text-base">
                      {exp.role} · <span className="text-gray-500 font-normal">{exp.company}</span>
                    </span>
                    <span className="text-gray-500 text-sm">{exp.subtitle}</span>
                  </div>

                  <ul className="space-y-1.5 text-gray-600 text-sm">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 items-start">
                        <span className="text-gray-400 shrink-0 mt-1">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.tags.map((tag) => <Tag key={tag} label={tag} />)}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Education */}
      <FadeIn delay={150}>
        <div className="pt-6 space-y-4">
          <h2 className="text-gray-700 text-xs font-medium uppercase tracking-widest">Education</h2>

          <div className="relative">
            <div className="hidden md:block absolute left-[168px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

            <div className="space-y-0">
              {education.map((edu, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div className="flex justify-start pt-6 md:gap-10 first:pt-0">
                    <div className="hidden md:flex flex-col items-end shrink-0 w-40 pt-1 relative">
                      <span className="text-gray-500 text-xs text-right leading-snug">{edu.period}</span>
                      <div className="absolute -right-[14.5px] top-1 h-3 w-3 rounded-full bg-white border-2 border-gray-400 mt-0.5" />
                    </div>

                    <div className="flex-1 pl-0 md:pl-6 pb-6 space-y-2">
                      <p className="md:hidden text-xs text-gray-500 mb-1">{edu.period}</p>
                      <div>
                        <span className="text-primary font-medium text-base">{edu.degree}</span>
                        <span className="text-gray-500 text-sm"> · {edu.school}</span>
                      </div>
                      <p className="text-gray-400 text-xs">{edu.location}</p>
                      {edu.focus && <p className="text-gray-500 text-xs leading-relaxed">{edu.focus}</p>}
                      {edu.tags && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {edu.tags.map((tag) => <Tag key={tag} label={tag} />)}
                        </div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Resume link */}
      {/* <FadeIn delay={200}>
        <a
          href="/Zoraiz Sibtain Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 py-6 text-sm text-gray-400 hover:text-white hover:underline transition-colors cursor-pointer"
        >
          View Full Resume <FiExternalLink size={12} />
        </a>
      </FadeIn> */}
    </div>
  );
};

export default ExperiencePage;
