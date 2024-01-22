import { Glow, GlowCapture } from "@codaworks/react-glow";
import Name from "./Name";
import ScrollLink from "./ScrollLink";

const Intro = () => {
  return (
    <div className="lg:float-left h-full lg:w-1/2 w-full lg:overflow-hidden">
      <div className="flex flex-row ml-10 mr-20 my-0 lg:w-1/2 float-left justify-evenly h-auto py-6 items-center fixed inset-x-0 z-50 bg-gradient-to-b from-palette4 from-25% to-transparent">
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
      </div>
      <GlowCapture>
        <Glow color="palette1">
          <span id="name" />
          <Name />
        </Glow>
      </GlowCapture>
    </div>
  );
};

export default Intro;
