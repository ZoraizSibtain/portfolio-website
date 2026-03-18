import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {FiExternalLink} from 'react-icons/fi';

const socialLinks = [
  {
    icon: <FaGithub />,
    title: "GitHub",
    link: "https://github.com/ZoraizSibtain",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    link: "https://linkedin.com/in/zoraiz-sibtain",
  },
];

const SocialButtons = () => {
  return (
    <div className="space-y-3 py-5">
      <span className="text-sm mb-2 block">Connect</span>
      <div className="space-y-1">
        {socialLinks.map((s) => (
          <a
            key={s.title}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center cursor-pointer rounded-md text-sm px-1 py-1.5 hover:text-black hover:underline transition-colors duration-200"
          >
            <div className="flex items-center flex-grow gap-2">
              <span>{s.icon}</span>
              <span>{s.title}</span>
            </div>
            <span className="ml-1 text-gray-400">
              <FiExternalLink size={12} />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialButtons;
