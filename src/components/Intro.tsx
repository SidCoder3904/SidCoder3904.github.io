import { Glow, GlowCapture } from "@codaworks/react-glow";
import Name from "./Name";
import ScrollLink from "./ScrollLink";

const Intro = () => {
  return (
    <div className="lg:float-left h-full lg:w-1/2 w-full lg:overflow-hidden items-center">
      <GlowCapture>
        <Glow color="palette1">
          <Name />
        </Glow>
        <div className="flex flex-row mx-20 justify-evenly">
          <ScrollLink link="about">About</ScrollLink>
          <ScrollLink link="projects">Projects</ScrollLink>
          <ScrollLink link="contact">Contact</ScrollLink>
        </div>
      </GlowCapture>
    </div>
  );
};

export default Intro;
