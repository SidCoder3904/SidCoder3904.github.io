import { Glow, GlowCapture } from "@codaworks/react-glow";
import Data from "./Data";

const Info = () => {
  return (
    <div className="h-full lg:overflow-auto">
      <GlowCapture>
        <Glow color="palette1">
          <Data>Info 1</Data>
          <Data>Info 2</Data>
          <Data>Info 3</Data>
          <Data>Info 4</Data>
          <Data>Info 5</Data>
          <Data>Info 6</Data>
          <Data>Info 7</Data>
          <Data>Info 8</Data>
        </Glow>
      </GlowCapture>
    </div>
  );
};

export default Info;
