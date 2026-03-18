import ContainerTitle from "@/components/Common/ContainerTitle.js";
import EmailButton from "@/components/Common/EmailButton.js";
import GetInTouchButton from "@/components/Common/GetInTouchButton.js";

const AboutPage = () => {

  return (
    <>
      <div
        className="space-y-5"
      >
        <ContainerTitle
          title="Zoraiz Sibtain"
        />
        <h3
          className="text-sm"
        >
          Software Engineer | AI Integration | QA Lead | LangChain | Full-Stack
        </h3>

        <div
          className="text-sm space-y-2 text-gray-600"
        >
          <p>
            I'm a Software Engineer based in the Bronx, NY. I'm currently completing my Professional
            Master's in Computer Science at Illinois Institute of Technology (graduating Summer 2026), with a focus on
            Artificial Intelligence and enterprise application integration.
          </p>
          <p>
            I spent 3+ years as a Quality Assurance Lead at True Security Consultant Limited, where I leveraged AI
            tools like ChatGPT to automate SOP reviews, cutting documentation time from 5 hours to 90 minutes,
            and analyzed 200+ production incident tickets to identify root causes 60% faster. I also hired, trained,
            and mentored a team of 10 analysts.
          </p>
          <p>
            I'm currently building MagariHub, an AI-powered car sales platform featuring a LangChain-based
            natural language recommendation engine, secured with JWT and Firebase Authentication. I've also contributed
            to full-stack development and CI/CD adoption as a Software Engineering Intern at Imatic Technologies.
          </p>
          <p>
            I'm fascinated by how AI and automation are reshaping workflows, I want to be at the forefront of that
            shift, designing systems that eliminate manual toil and scale intelligently.
          </p>
          <p>
            Outside of tech, I ski whenever I get the chance, work on my car (recently swapped brake pads and rotors,
            and taught my wife how to do an oil change), and spend a lot of time walking the city and hunting down
            good cafes. I'm a big Nashville hot chicken guy. Lately I've also been picking up a few unexpected skills —
            reading pulses, administering first aid, and going deeper into vibecoding. I like staying curious about
            things that have nothing to do with a screen.
          </p>
        </div>

        <div
          className="flex items-center space-x-3"
        >
          <GetInTouchButton/>

          <EmailButton/>
        </div>
      </div>
    </>
  )
};

export default AboutPage;
