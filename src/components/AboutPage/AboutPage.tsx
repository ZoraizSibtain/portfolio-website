import { Link } from "react-router-dom";
import userImage from '@/assets/images/user.jpg';

const AboutPage = () => {
  return (
    <div className="space-y-12">

      {/* Header */}
      <div>
        <span className="font-['Space_Grotesk'] text-xs uppercase tracking-[0.2em] text-outline block mb-4">
          02 / Profile
        </span>
        <h1 className="font-['Inter'] font-extrabold text-6xl tracking-tighter leading-[0.9] text-primary mb-6">
          Zoraiz<br />Sibtain
        </h1>
        <p className="font-['Space_Grotesk'] text-sm text-on-secondary-container uppercase tracking-widest">
          Software Engineer · AI Integration · QA Lead · LangChain · Full-Stack
        </p>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

        {/* Photo + stat card */}
        <div className="space-y-4">
          <div className="aspect-square bg-surface-container-low rounded-2xl overflow-hidden relative group">
            <img
              src={userImage}
              alt="Zoraiz Sibtain"
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 backdrop-blur-md rounded-xl">
              <p className="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest text-outline mb-0.5">
                Current Focus
              </p>
              <p className="font-['Inter'] font-bold text-primary text-sm">
                Generative AI Infrastructure
              </p>
            </div>
          </div>

          {/* <div className="bg-surface-container-low p-5 rounded-2xl text-center">
            <p className="font-['Space_Grotesk'] text-[40px] font-bold text-primary leading-none">99.8%</p>
            <p className="text-[10px] text-outline uppercase tracking-widest mt-2 font-['Space_Grotesk']">
              QA Accuracy Rate
            </p>
          </div> */}
        </div>

        {/* Bio text */}
        <div className="lg:col-span-2 space-y-6 text-sm text-on-surface-variant leading-relaxed">
          <p>
            I'm a Software Engineer based in the Bronx, NY, completing my Professional Master's in Computer Science
            at Illinois Institute of Technology (graduating Summer 2026), with a focus on Artificial Intelligence
            and enterprise application integration.
          </p>
          <p>
            I spent 3+ years as a Quality Assurance Lead at True Security Consultant Limited, where I leveraged
            AI tools like ChatGPT to automate SOP reviews — cutting documentation time from 5 hours to 90 minutes —
            and analyzed 200+ production incident tickets to identify root causes 60% faster. I also hired, trained,
            and mentored a team of 10 analysts.
          </p>
          <p>
            I'm currently building MagariHub, an AI-powered car sales platform featuring a LangChain-based
            natural language recommendation engine, secured with JWT and Firebase Authentication. I've also
            contributed to full-stack development and CI/CD adoption as a Software Engineering Intern at
            Imatic Technologies.
          </p>
          <p>
            I'm fascinated by how AI and automation are reshaping workflows — I want to be at the forefront
            of that shift, designing systems that eliminate manual toil and scale intelligently.
          </p>

          <div className="pt-2 border-t border-outline-variant/20">
            <p className="text-xs text-outline italic">
              Outside of tech: skiing, working on my car, hunting down good cafes, Nashville hot chicken
              enthusiast, and picking up unexpected skills — reading pulses, first aid, vibecoding.
            </p>
          </div>

          <div className="flex items-center space-x-4 pt-2">
            <Link
              to="/contact"
              className="bg-primary text-on-primary px-6 py-3 rounded-xl font-['Inter'] font-bold text-sm tracking-tight hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
            <a
              href="mailto:zoraiz.sibtain@hotmail.com"
              className="border border-outline-variant/40 px-6 py-3 rounded-xl font-['Inter'] font-bold text-sm tracking-tight hover:bg-surface-container-low transition-colors"
            >
              E-Mail
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
