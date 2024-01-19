import { Glow, GlowCapture } from "@codaworks/react-glow";
import Name from "./Name";

const Intro = () => {
  return (
    <div className="lg:float-left h-full lg:w-1/2 w-full lg:overflow-hidden">
      <GlowCapture>
        <Glow color="palette1">
          <Name />
        </Glow>
      </GlowCapture>
    </div>
  );
};

export default Intro;
