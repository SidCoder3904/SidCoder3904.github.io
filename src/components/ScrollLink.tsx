import { ReactNode } from "react";

interface Props {
  link: string;
  children: ReactNode;
}

const ScrollLink = ({ link, children }: Props) => {
  return (
    <a href={"#" + link}>
      <div className="md:mx-20 text-md text-palette2 transform hover:text-lg transition-all duration-300 md:text-left text-center hover:font-semibold hover:scale-110">
        <p>{children}</p>
      </div>
    </a>
  );
};

export default ScrollLink;
