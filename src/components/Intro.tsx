import { Glow, GlowCapture } from "@codaworks/react-glow";
import Name from "./Name";
import ScrollLink from "./ScrollLink";
import Links from "./Links";

const Intro = () => {
  return (
    <div className="lg:float-left h-full lg:w-1/2 w-full lg:overflow-hidden">
      <nav className="flex flex-row lg:w-1/2 w-full float-left justify-evenly py-6 items-center fixed inset-x-0 z-50 bg-gradient-to-b from-palette4 from-25% to-transparent">
        <a href="#name">
          <img
            src="assets/mylogo.svg"
            alt="logo"
            className="w-10 transform transition duration-200 hover:scale-125"
          />
        </a>
        <ScrollLink link="about">About</ScrollLink>
        <ScrollLink link="projects">Projects</ScrollLink>
        <ScrollLink link="contact">Contact</ScrollLink>
      </nav>
      <GlowCapture>
        <Glow color="palette1">
          <span id="name" />
          <Name />
        </Glow>
      </GlowCapture>
      <div className="flex flex-row w-full justify-evenly py-6 items-center">
        <Links icon="fa-brands fa-github" link="https://github.com/Sid-3904">
          GitHub
        </Links>
        <Links
          icon="fa-brands fa-linkedin"
          link="https://www.linkedin.com/in/siddharth-verma-186396259"
        >
          LinkedIn
        </Links>
        <Links
          icon="fa-brands fa-instagram"
          link="https://instagram.com/siddharth_verma_3904?igshid=MzNlNGNkZWQ4Mg"
        >
          Insta
        </Links>
      </div>
    </div>
  );
};

export default Intro;
