import { ReactNode } from "react";

interface Props {
  link: string;
  icon: string;
  children: ReactNode;
}

const Links = ({ link, icon, children }: Props) => {
  return (
    <div className="items-center">
      <a href={link} target="_blank" rel="noreferrer">
        <i
          className={icon + " transform transition hover:scale-125 float-left"}
          style={{
            fontSize: "20px",
            color: "#21b4b0",
          }}
        />
        <div className="text-sm text-palette3 ml-8">{children}</div>
      </a>
    </div>
  );
};

export default Links;
