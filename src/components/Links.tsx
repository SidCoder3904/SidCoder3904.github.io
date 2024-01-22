import { ReactNode } from "react";

interface Props {
  link: string;
  src: string;
  children: ReactNode;
}

const Links = ({ link, src, children }: Props) => {
  return (
    <div className="">
      <center>
        <a href={link} target="_blank" rel="noreferrer">
          <img
            src={src}
            alt={children?.toString()}
            className="h-8 fill-palette2 transform transition hover:scale-125 shadow-palette4 shadow-2xl"
          />
          <div className="text-sm text-palette2 my-2 mb-0">{children}</div>
        </a>
      </center>
    </div>
  );
};

export default Links;
