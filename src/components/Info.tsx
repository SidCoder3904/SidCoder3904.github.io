import Data from "./Data";
import Project from "./Project";
import Contact from "./Contact";

const Info = () => {
  return (
    <div className="h-full w-full md:w-1/2 overflow-y-auto scroll-smooth no-scrollbar">
      <span id="about" />
      {/* <GlowCapture> */}
        {/* <Glow color="palette1"> */}
          <Data title="About Me">
            I am <span className="font-semibold">Siddharth Verma</span>, a
            third-year{" "}
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
            <div className="text-palette2 text-xl hover:text-2xl transition-all duration-300">Programming Languages:</div>
            <ul className="list-none list-inside">
              <li>C/C++</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Solidity</li>
            </ul>
            <div className="text-palette2 text-xl hover:text-2xl transition-all duration-300">Web Development:</div>
            <ul className="list-none list-inside">
              <li>HTML, CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React.js, Next.js</li>
              <li>MongoDB</li>
              <li>Flask, Jinja2</li>
            </ul>
            <div className="text-palette2 text-xl hover:text-2xl transition-all duration-300">Computer Vision:</div>
            <ul className="list-none list-inside">
              <li>OpenCV</li>
              <li>MediaPipe</li>
            </ul>
            <div className="text-palette2 text-xl hover:text-2xl transition-all duration-300">
              Block Chain Development:
            </div>
            <ul className="list-none list-inside">
              <li>Solidity</li>
              <li>Truffle</li>
              <li>Ganache</li>
            </ul>
            <div className="text-palette2 text-xl hover:text-2xl transition-all duration-300">Machine Learning:</div>
            <ul className="list-none list-inside">
              <li>Scikit-Learn</li>
              <li>Numpy</li>
              <li>Pandas</li>
              <li>Kaggle</li>
            </ul>
          </Data>
          <span id="projects" />
          <Data title="Projects">
            <Project
              title="BlockAcademy"
              link="https://github.com/SidCoder3904/BlockAcademy"
            >
              A decentralized LMS for online learning, built on Ethereum using Solidity and Ganache. Eliminates central authority,
              securely managing student records, courses, and certifications ensuring autonomy, data integrity, and accessibility.
            </Project>
            <Project
              title="VisualCrypt"
              link="https://github.com/SidCoder3904/VisualCrypt"
            >
              Image cryptography using Diffie-Hellman Algorithm. Encrypted messages into stock images so only intended recipient could
              decode using password using public and private keys, one-way functions, modular arithmetic to ensure robust encryption.
            </Project>
            <Project
              title="Spellarium"
              link="https://github.com/SidCoder3904/Spellarium"
            >
              A Spell checking and suggestion application leveraging tries for efficient word lookup, bloom filter for quick word existence
checks. Incorporates comprehensive analysis, offering accurate spell checking, word suggestions, and optimized performance
through parallel processing, enhancing speed and accuracy in language processing tasks.
            </Project>
            <Project
              title="CASPER-AI"
              link="https://github.com/SidCoder3904/CASPER-AI"
            >
              An offline Personal AI Assistant performing routine tasks without internet dependency. It assists with basic queries. It
              adapts to user preferences, aids in task automation, and offers personalized support for seamless operations and productivity.
            </Project>
            <Project
              title="TrackBot"
              link="https://github.com/SidCoder3904/TrackBot"
            >
              Utilizing OpenCV and MediaPipe integration, this project features a robot that locates, tracks, and follows a designated
target while continuously measuring its depth using monocular depth perception. Leveraging multithreading for real-time,
lag-free performance, the system achieves dynamic tracking and computes a 3-D trajectory of the target object.
            </Project>
            <Project
              title="iMouse"
              link="https://github.com/SidCoder3904/iMouse"
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
                link="https://drive.google.com/file/d/1A4jG2_2qqc08BBry5r273YH8c9H9_6sy/view?usp=sharing"
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
