// src/components/Data.tsx
import { ReactNode, useRef } from "react";
import useTiltEffect from "../hooks/useTiltEffect";
import "./../index.css";

type Props = {
  title: string;
  children: ReactNode;
};

const Data = ({ title, children }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useTiltEffect(cardRef);

  return (
    <div ref={cardRef} className="tilt-box-wrap card container border-2 border-white border-opacity-5 rounded-lg bg-palette1 w-3/4 m-20 p-5 bg-opacity-5 shadow-md">
      <div className="tilt-box">
        <div className="tilt-box-text">
          <div className="text-4xl text-palette2">{title}</div>
          <div className="text-palette3 font-light">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Data;
