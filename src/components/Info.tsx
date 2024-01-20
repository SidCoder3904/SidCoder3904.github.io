import { Glow, GlowCapture } from "@codaworks/react-glow";
import Data from "./Data";

const Info = () => {
  return (
    <div className="h-full lg:overflow-auto scroll-smooth">
      <GlowCapture>
        <Glow color="palette1">
          <Data link="about" title="Education">
            Degree Institute/Board CGPA/Percentage Year Bachelor of Technology
            Indian Institute of Technology, Ropar 9.42 (Till 3th Sem) 2022-2026
            Senior Secondary Central Board of Secondary Education 98% 2022
            Secondary Central Board of Secondary Education 97% 2020
          </Data>
          <Data link="" title="Experience">
            no exp
          </Data>
          <Data link="" title="Technical Skills">
            Programming Languages: C, C++, Python, HTML, CSS, JavaScript,
            Solidity • Machine Learning: Scikit-Learn, Tensorflow, Numpy, Pandas
            • Computer Vision:OpenCV, MediaPipe • Block Chain Development:
            Soliditty, Truffle, Ganache • Web Development:HTML, CSS, JavaScript
            • Proficient in using : Jupyter, Git, Github, VS Code,
            Linux(Ubuntu), OpenCV
          </Data>
          <Data link="projects" title="Projects">
            IMA-Encrypt Academic Management System Target-AutoLocking Turret
            C.A.S.P.E.R. (AI Assistant) SpellChecking & AutoCorrection in C
            Visual Mouse
          </Data>
          <Data link="" title="Positions of Responsibility">
            Representative,Zenith (Physics and Astronomy Club), IIT Ropar Apr.
            2023 - Present • Co-Head (Sponsorship Team),Advitiya, IIT Ropar Dec.
            2023 - Present • Event Manager,(Google Developer Students Club)
            GDSC, IIT Ropar Apr. 2023 - Present • Core Team Member,Corporate
            Relations, E-Cell, IIT Ropar Nov. 2022 - Aug. 2023
          </Data>
          <Data link="contact" title="Achievements">
            Merit Certificate,Secured a position amongst Top 7% of all the
            students in 1st and 2nd semester 2022-2023 • JEE Mains,99.66
            percentile 2022 • JEE Advanced,All India Rank 1806 and among top 1%
            students 2022 • Scratcher(Position),at Scratch, Making games since
            2020 as hobby, Scratch-ID 2021 • Republic Day Camp,Part of the
            prestigious RD Camp, Delhi held by NCC 2019 • AISSME,Part of All
            India Sainik School Mountaineering Expedition(Ladakhi Peak,
            5342mtrs) 2018
          </Data>
        </Glow>
      </GlowCapture>
    </div>
  );
};

export default Info;
