const Footer = () => {
  return (
    <footer className="border-t border-outline-variant/20 px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="font-['Space_Grotesk'] uppercase tracking-widest text-[10px] text-outline">
        © {new Date().getFullYear()} Built by Zoraiz Sibtain
      </p>
      <div className="flex space-x-8">
        <a
          href="https://github.com/ZoraizSibtain"
          target="_blank"
          rel="noopener noreferrer"
          className="font-['Space_Grotesk'] uppercase tracking-widest text-[10px] text-outline hover:text-on-surface transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/zoraiz-sibtain"
          target="_blank"
          rel="noopener noreferrer"
          className="font-['Space_Grotesk'] uppercase tracking-widest text-[10px] text-outline hover:text-on-surface transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:zoraiz.sibtain@hotmail.com"
          className="font-['Space_Grotesk'] uppercase tracking-widest text-[10px] text-outline hover:text-on-surface transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
