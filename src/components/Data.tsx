import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const Data = ({ title, children }: Props) => {
  return (
    <div className="container border-2 border-white border-opacity-5 rounded-lg bg-palette1 w-3/4 m-20 p-5 bg-opacity-5 shadow-md ">
      <div className="text-4xl text-palette2">{title}</div>
      <div className="text-palette3 font-light">{children}</div>
    </div>
  );
};

export default Data;
