import Sider from "@/components/Layout/Sider/Sider.js";
import HomePage from "@/components/HomePage/HomePage.js";
import Footer from "@/components/Layout/Footer.js";
import {Route, Routes, useLocation} from "react-router-dom";
import AboutPage from "@/components/AboutPage/index.js";
import ContactPage from "@/components/ContactPage/index.js";
import ExperiencePage from "@/components/ExperiencePage/ExperiencePage.js";
import SkillsPage from "@/components/SkillsPage/SkillsPage.js";
import SeoPart from "@/components/Layout/SeoPart.js";
import Container from "@/components/Layout/Container.js";

const Home = () => {
  const {pathname} = useLocation();

  return (
    <>
      <SeoPart />
      <div
        className="flex items-stretch min-w-full"
      >
        <Sider/>

        <div
          className="grow ml-[200px] min-h-screen flex flex-col bg-gradient-to-r from-white to-gray-200 overflow-y-scroll"
        >
          <Container wide={pathname === '/experience' || pathname === '/skills'}>
            <Routes>
              <Route
                element={<HomePage/>}
                index
              />
              <Route
                element={<AboutPage/>}
                path="/about"
              />
              <Route
                element={<ExperiencePage />}
                path="/experience"
              />
              <Route
                element={<SkillsPage />}
                path="/skills"
              />
              <Route
                element={<ContactPage />}
                path="/contact"
              />
            </Routes>
          </Container>

          <Footer/>
        </div>
      </div>
    </>
  )
};

export default Home;
