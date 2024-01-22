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
      <div className="flex flex-row grow w-full float-left justify-evenly py-6 items-center">
        <Links src="assets/github.svg" link="https://github.com/Sid-3904">
          GitHub
        </Links>
        <Links src="assets/mail.svg" link="mailto:siddharthverma3904@gamil.com">
          E-Mail
        </Links>
        <Links
          src="assets/resume.svg"
          link="https://drive.google.com/file/d/1r7e1Uf3pKBNgyMbAz2-KeiOjvUrMu8D-/view?usp=drive_link"
        >
          Resume
        </Links>
        <Links src="assets/call.svg" link="+91 7780 973584">
          Contact
        </Links>
      </div>
    </div>
  );
};

export default Intro;
