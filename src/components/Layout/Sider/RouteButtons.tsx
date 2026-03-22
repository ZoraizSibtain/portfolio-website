import { Link, useLocation } from "react-router-dom";

const links = [
  { path: "/",           name: "Home",       icon: "layers" },
  { path: "/about",      name: "About",      icon: "person" },
  { path: "/experience", name: "Experience", icon: "terminal" },
  { path: "/skills",     name: "Stack",      icon: "memory" },
  { path: "/contact",    name: "Contact",    icon: "alternate_email" },
];

const RouteButtons = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex-1 flex flex-col space-y-1">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={
            `flex items-center space-x-3 px-4 py-3 rounded-xl text-sm transition-all duration-300 ` +
            (pathname === link.path
              ? "bg-slate-950 text-white font-semibold"
              : "text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 scale-95 active:scale-90")
          }
        >
          <span className="material-symbols-outlined text-[20px]">{link.icon}</span>
          <span className="font-['Inter'] tracking-tight">{link.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default RouteButtons;
