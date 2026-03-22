import Sider from "@/components/Layout/Sider/Sider";
import HomePage from "@/components/HomePage/HomePage";
import Footer from "@/components/Layout/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "@/components/AboutPage/index";
import ContactPage from "@/components/ContactPage/index";
import ExperiencePage from "@/components/ExperiencePage/ExperiencePage";
import SkillsPage from "@/components/SkillsPage/SkillsPage";
import SeoPart from "@/components/Layout/SeoPart";
import Container from "@/components/Layout/Container";

const pageInfo: Record<string, { num: string; title: string }> = {
  "/":           { num: "01", title: "Home" },
  "/about":      { num: "02", title: "About" },
  "/experience": { num: "03", title: "Experience" },
  "/skills":     { num: "04", title: "Stack" },
  "/contact":    { num: "05", title: "Contact" },
};

const Home = () => {
  const { pathname } = useLocation();
  const page = pageInfo[pathname] ?? { num: "—", title: "Portfolio" };

  return (
    <>
      <SeoPart />
      <div className="flex items-stretch min-w-full">
        <Sider />

        <div className="grow ml-64 min-h-screen flex flex-col bg-surface">

          {/* Top App Bar */}
          <header className="fixed top-0 right-0 left-64 h-16 z-40 bg-white/80 backdrop-blur-md flex items-center justify-between px-8 border-b border-slate-200/20">
            <div className="flex items-center space-x-3">
              <span className="font-['Space_Grotesk'] text-xs tracking-[0.2em] text-slate-400 uppercase">
                {page.num}
              </span>
              <span className="font-['Inter'] font-semibold text-slate-900 text-sm tracking-tight uppercase">
                {page.title}
              </span>
            </div>
            <div className="flex items-center space-x-4 text-slate-400">
              <button className="hover:text-slate-900 transition-colors">
                <span className="material-symbols-outlined text-[22px]">notifications</span>
              </button>
              <button className="hover:text-slate-900 transition-colors">
                <span className="material-symbols-outlined text-[22px]">account_circle</span>
              </button>
            </div>
          </header>

          <main className="pt-16 flex-1 flex flex-col">
            <Container wide={pathname === '/experience' || pathname === '/skills'}>
              <Routes>
                <Route element={<HomePage />} index />
                <Route element={<AboutPage />} path="/about" />
                <Route element={<ExperiencePage />} path="/experience" />
                <Route element={<SkillsPage />} path="/skills" />
                <Route element={<ContactPage />} path="/contact" />
              </Routes>
            </Container>
            <Footer />
          </main>

        </div>
      </div>
    </>
  );
};

export default Home;
