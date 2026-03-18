import {Link, useLocation} from "react-router-dom";
import {IoHomeOutline} from 'react-icons/io5';
import {MdWorkOutline} from 'react-icons/md';
import {FiUser, FiMail, FiTool} from 'react-icons/fi';

const links = [
  {path: "/",           name: "Home",       icon: <IoHomeOutline />},
  {path: "/about",      name: "About",      icon: <FiUser />},
  {path: "/experience", name: "Experience", icon: <MdWorkOutline />},
  {path: "/skills",     name: "Skills",     icon: <FiTool />},
  {path: "/contact",    name: "Contact",    icon: <FiMail />},
];

const RouteButtons = () => {
  const {pathname} = useLocation();

  return (
    <div className="space-y-1 py-3">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={
            `flex items-center gap-2 cursor-pointer rounded-md text-sm border px-3 py-2 justify-start transition-colors ` +
            (pathname === link.path
              ? "bg-primary text-white border-primary"
              : "border-transparent hover:text-black hover:bg-gray-200")
          }
        >
          <span>{link.icon}</span>
          <span>{link.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default RouteButtons;
