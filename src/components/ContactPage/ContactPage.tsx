import ContainerTitle from "@/components/Common/ContainerTitle.js";
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';

const ContactPage = () => {

  const cards = [
    {
      icon: <FaGithub size={24}/>,
      label: "GitHub",
      handle: "@ZoraizSibtain",
      href: "https://github.com/ZoraizSibtain",
    },
    {
      icon: <FaLinkedin size={24}/>,
      label: "LinkedIn",
      handle: "zoraiz-sibtain",
      href: "https://linkedin.com/in/zoraiz-sibtain",
    },
    {
      icon: <FiMail size={24}/>,
      label: "Email",
      handle: "zoraiz.sibtain@hotmail.com",
      href: "mailto:zoraiz.sibtain@hotmail.com",
    },
  ];

  return (
    <div className="space-y-6">
      <ContainerTitle
        title={"Get in Touch"}
      />

      <h2 className="text-sm text-gray-600">
        If you're working on something in AI, automation, or software quality — or just want to connect, reach out.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {cards.map((card) => (
          <a
            key={card.label}
            href={card.href}
            target={card.href.startsWith('mailto') ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex flex-col gap-3 p-4 rounded-lg border border-gray-200 hover:border-gray-400 hover:bg-gray-100 transition-all duration-200 group"
          >
            <span className="text-gray-500 group-hover:text-black transition-colors">
              {card.icon}
            </span>
            <div>
              <p className="text-primary text-sm font-medium">{card.label}</p>
              <p className="text-gray-500 text-xs mt-0.5 break-all">{card.handle}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="text-xs text-gray-400 space-y-1">
        <p>Based in Bronx, NY</p>
        <p>Open to internships, collaborations, and full-time roles.</p>
      </div>
    </div>
  );
};

export default ContactPage;
