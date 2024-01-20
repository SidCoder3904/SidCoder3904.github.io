import { ReactNode } from "react";

interface Props {
  link: string;
  children: ReactNode;
}

const ScrollLink = ({ link, children }: Props) => {
  return (
    <a href={"#" + link}>
      <div className="px-20 py-2 text-md text-palette2 transform transition duration-400 hover:text-lg lg:text-left text-center hover:font-bold hover:scale-110 lg:hover:translate-x-8">
        <p>{children}</p>
      </div>
    </a>
  );
};

export default ScrollLink;
