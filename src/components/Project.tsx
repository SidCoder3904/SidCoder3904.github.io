import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const Project = ({ title, children }: Props) => {
  return (
    <div className="my-5">
      <div className="text-palette2 text-xl">{title}</div>
      <div>{children}</div>
    </div>
  );
};

export default Project;
