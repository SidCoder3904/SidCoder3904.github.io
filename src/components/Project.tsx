import { ReactNode } from "react";

interface Props {
  link: string;
  title: string;
  children: ReactNode;
}

const Project = ({ link, title, children }: Props) => {
  return (
    <div className="my-5">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="text-palette2 text-xl">{title}</div>
      </a>
      <div>{children}</div>
    </div>
  );
};

export default Project;
