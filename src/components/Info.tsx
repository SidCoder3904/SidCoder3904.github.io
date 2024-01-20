import { Glow, GlowCapture } from "@codaworks/react-glow";
import Data from "./Data";
import Project from "./Project";

const Info = () => {
  return (
    <div className="h-full lg:overflow-auto scroll-smooth">
      <span id="about" />
      <GlowCapture>
        <Glow color="palette1">
          <Data link="" title="About Me">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fuga
            aspernatur tempora distinctio facere. Ut beatae, blanditiis minus
            fugiat, soluta consequatur ipsum sequi sed cupiditate fugit
            molestiae! Explicabo, nihil possimus!
          </Data>
          <Data link="" title="Technical Skills">
            <div className="text-palette2 text-xl">Programming Languages:</div>
            <ul className="list-disc list-inside">
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
            HTML, CSS, JavaScript, TypeScript
            <div className="text-palette2 text-xl">
              Block Chain Development:
            </div>
            Soliditty, Truffle, Ganache
          </Data>
          <Data link="projects" title="Projects">
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

          <Data link="contact" title="Contact Me">
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
