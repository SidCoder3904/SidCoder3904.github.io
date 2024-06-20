import { Glow, GlowCapture } from "@codaworks/react-glow";
import Data from "./Data";
import Project from "./Project";
import Contact from "./Contact";

const Info = () => {
  return (
    <div className="h-full overflow-auto scroll-smooth no-scrollbar">
      <span id="about" />
      {/* <GlowCapture> */}
        {/* <Glow color="palette1"> */}
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
            <ul className="list-none list-inside">
              <li>Scikit-Learn</li>
              <li>Numpy</li>
              <li>Pandas</li>
              <li>Tensorflow</li>
            </ul>
            <div className="text-palette2 text-xl">Computer Vision:</div>
            <ul className="list-none list-inside">
              <li>OpenCV</li>
              <li>MediaPipe</li>
            </ul>
            <div className="text-palette2 text-xl">Web Development:</div>
            <ul className="list-none list-inside">
              <li>HTML, CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
            </ul>
            <div className="text-palette2 text-xl">
              Block Chain Development:
            </div>
            <ul className="list-none list-inside">
              <li>Solidity</li>
              <li>Truffle</li>
              <li>Ganache</li>
            </ul>
          </Data>
          <span id="projects" />
          <Data title="Projects">
            <Project
              title="BlockSchool"
              link="https://github.com/Sid-3904/Acad_Management_System"
            >
              An Ethereum blockchain-powered decentralized academic management
              system for online schooling, eliminating central authority.
              Utilizing smart contracts, it securely manages student records,
              courses, and certifications. This innovative system will ensure
              autonomy, data integrity, and accessibility.
            </Project>
            <Project
              title="C.A.S.P.E.R."
              link="https://github.com/Sid-3904/C.A.S.P.E.R-AI_Assistant"
            >
              An offline Personal AI Assistant performs routine computer tasks
              without internet dependency. It assists with basic queries. It
              adapts to user preferences, aids in task automation, and offers
              personalized support for seamless daily computer operations,
              enhancing productivity.
            </Project>
            <Project
              title="Ima-Encrypt"
              link="https://github.com/Sid-3904/Ima-Encrypt"
            >
              Cryptography using Diffie Hellman Key Exchange Algorithm. Focused
              on comprehending the mathematics and algorithm of the
              Diffie-Hellman Key Exchange. Delved into the principles of using
              public and private keys for message encryption and decryption.
              Explored the application of one way functions, discrete logarithms
              and modular arithmetic.
            </Project>
            <Project
              title="Foca-Bot"
              link="https://github.com/Sid-3904/target_locking_turret"
            >
              An Arduino-driven robot equipped with computer vision locks onto
              and autonomously tracks a designated target's movement path.
              Utilizing image processing, it identifies the target, calculates
              its motion, and adjusts its own trajectory to continuously pursue
              and stay aligned with the moving object, ensuring dynamic and
              accurate tracking.
            </Project>
            <Project
              title="Spellerium"
              link="https://github.com/Sid-3904/SpellCheckerAndAutoCorrection"
            >
              A spell checker and suggestion program leveraging tries for
              efficient word lookup, a Bloom filter for quick word existence
              checks. This project incorporates comprehensive analysis, offering
              accurate spell checking, word suggestions, and optimized
              performance through parallel processing, enhancing speed and
              accuracy in language processing tasks.
            </Project>
            <Project
              title="OptiMouse"
              link="https://github.com/Sid-3904/VisualMouse"
            >
              Tracks eye movements for mouse control and detects blinks as mouse
              clicks, enabling hands-free navigation and interaction.
            </Project>
          </Data>

          <span id="contact" />
          <Data title="Contact Me">
            <div className="grid grid-flow-col-dense grid-cols-3 grid-rows-2 gap-5 pt-5">
              <Contact
                icon="fa-envelope fa-solid"
                link="mailto:siddharthverma3904@gmail.com"
              >
                Mail ID
              </Contact>
              <Contact icon="fa-phone fa-solid" link="tel:+917780973584">
                Contact
              </Contact>
              <Contact
                icon="fa-file fa-solid"
                link="https://drive.google.com/file/d/1r7e1Uf3pKBNgyMbAz2-KeiOjvUrMu8D-/view?usp=drive_link"
              >
                Resume/CV
              </Contact>
            </div>
          </Data>
          <div className="text-center font-Raleway font-extralight text-sm text-palette2 p-5 -mt-16">
            This page was last updated on 21-06-2024
          </div>
        {/* </Glow> */}
      {/* </GlowCapture> */}
    </div>
  );
};

export default Info;
