import { Glow, GlowCapture } from "@codaworks/react-glow";
import Data from "./Data";
import Project from "./Project";

const Info = () => {
  return (
    <div className="h-full overflow-auto scroll-smooth no-scrollbar">
      <span id="about" />
      <GlowCapture>
        <Glow color="palette1">
          <Data title="About Me">
            I am <span className="font-semibold">Siddharth Verma</span>, a
            second-year{" "}
            <span className="font-semibold">
              Computer Science and Engineering student at IIT Ropar
            </span>
            . With consistent academic excellence, I possess a diverse skill set
            spanning computer science disciplines. My coursework and hands-on
            projects extend beyond conventional boundaries, including aspects of{" "}
            <span className="font-semibold">
              artificial intelligence, machine learning, computer vision, and
              blockchain
            </span>
            . Recognized for a dedicated work ethic and a commitment to
            continuous learning, I am well-prepared to contribute effectively to
            software engineering roles, leveraging my passion for technology and
            a solid foundation in computer science principles.
          </Data>
          <Data title="Technical Skills">
            <div className="text-palette2 text-xl">Programming Languages:</div>
            <ul className="list-none list-inside">
              <li>C/C++</li>
              <li>Python</li>
              <li>HTML, CSS, JavaScript</li>
              <li>Solidity</li>
            </ul>
            <div className="text-palette2 text-xl">Machine Learning:</div>
            Scikit-Learn, Numpy, Pandas, Tensorflow
            <div className="text-palette2 text-xl">Computer Vision:</div>
            OpenCV, MediaPipe
            <div className="text-palette2 text-xl">Web Development:</div>
            HTML, CSS, JavaScript, TypeScript, React
            <div className="text-palette2 text-xl">
              Block Chain Development:
            </div>
            Soliditty, Truffle, Ganache
          </Data>
          <span id="projects" />
          <Data title="Projects">
            <Project title="IMA-Encrypt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              assumenda enim quia sapiente repudiandae similique possimus
            </Project>
            <Project title="Academic Management System">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              assumenda enim quia sapiente repudiandae similique possimus
            </Project>
            <Project title="Target-AutoLocking Turret">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              assumenda enim quia sapiente repudiandae similique possimus
            </Project>
            <Project title="C.A.S.P.E.R.">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              assumenda enim quia sapiente repudiandae similique possimus
            </Project>
            <Project title="Visual Mouse">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              assumenda enim quia sapiente repudiandae similique possimus
            </Project>
            <Project title="SpellChecking & AutoCorrection in C">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              assumenda enim quia sapiente repudiandae similique possimus
            </Project>
          </Data>

          <span id="contact" />
          <Data title="Contact Me">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            deleniti architecto iste impedit minima quia, aliquam perspiciatis
            placeat qui molestiae laudantium veniam error esse autem,
            consectetur nulla suscipit pariatur dolor!
          </Data>
        </Glow>
      </GlowCapture>
    </div>
  );
};

export default Info;
