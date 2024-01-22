import { ReactNode } from "react";

interface Props {
  link: string;
  children: ReactNode;
}

const ScrollLink = ({ link, children }: Props) => {
  return (
    <a href={"#" + link}>
      <div className="text-md text-palette2 transform transition duration-200 hover:text-lg lg:text-left text-center hover:font-semibold hover:scale-110">
        <p>{children}</p>
      </div>
    </a>
  );
};

export default ScrollLink;
