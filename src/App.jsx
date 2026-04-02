import AboutComp from "./components/AboutComp";
import FooterComp from "./components/FooterComp";
import LandingPage from "./components/LandingPage";
import NavBarComp from "./components/NavBarComp";
import TechtStack from "./components/TechtStack";
import WorkPage from "./components/WorkPage";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  return (
    <>
      <NavBarComp />
      <header id="header">
        <LandingPage />
      </header>
      <section id="about">
        <AboutComp />
      </section>
      <section id="tech">
        <TechtStack />
      </section>
      <section id="work">
        <WorkPage />
      </section>
      <section id="contact">
        <FooterComp />
      </section>
    </>
  )
}