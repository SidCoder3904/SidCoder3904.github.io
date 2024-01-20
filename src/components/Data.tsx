import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  link: string;
};

const Data = ({ link, title, children }: Props) => {
  return (
    <div
      id={link}
      className="container rounded-lg bg-palette1 w-3/4 m-20 p-5 bg-opacity-5 shadow-md"
    >
      <div className="text-3xl text-palette2">{title}</div>
      <div className="text-palette3">{children}</div>
    </div>
  );
};

export default Data;
