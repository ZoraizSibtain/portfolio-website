import {Typewriter} from 'react-simple-typewriter';
import ContactButton from "@/components/Common/ContactButton.js";
import ContainerTitle from "@/components/Common/ContainerTitle.js";

const HomePage = () => {

  return (
    <div
      className="space-y-4"
    >
      <ContainerTitle
        title="Hello, I'm Zoraiz"
      />
      <h2
        className="text-3xl font-medium"
      >
        I love to{" "}
        <span
          className="text-gray-500"
        >
            <Typewriter
              words={['Build', 'Automate', 'Engineer', 'Innovate']}
              cursor
            />
          </span>
      </h2>

      <div
        className="text-md tracking-wider font-light space-y-3 md:space-y-5"
      >
        <p>
          A Software Engineer and AI enthusiast based in New York, currently pursuing my Master's in Computer Science
          at Illinois Institute of Technology (graduating Summer 2026), focused on AI integration and enterprise applications.
        </p>

        <p>
          I bridge the gap between quality engineering and AI — having led QA teams, built full-stack applications,
          and designed AI-driven workflows that cut manual work dramatically. Most recently, I built MagariHub,
          an AI-powered car sales platform using LangChain, React, and PostgreSQL.
        </p>

        <p>
          Talk to me about AI, automation, software quality, or anything in between.
        </p>
      </div>

      <div
        className="flex items-center gap-3"
      >
        <ContactButton/>
      </div>
    </div>
  );
}

export default HomePage;
