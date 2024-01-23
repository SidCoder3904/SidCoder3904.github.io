import { ReactNode } from "react";

interface Props {
  link: string;
  icon: string;
  children: ReactNode;
}

const Links = ({ link, icon, children }: Props) => {
  return (
    <div className="">
      <center>
        <a href={link} target="_blank" rel="noreferrer">
          <i
            className={icon + " transform transition hover:scale-125"}
            style={{
              fontSize: "25px",
              color: "#bfa181",
            }}
          />
          <div className="text-xs text-palette2 my-1 mb-0">{children}</div>
        </a>
      </center>
    </div>
  );
};

export default Links;
