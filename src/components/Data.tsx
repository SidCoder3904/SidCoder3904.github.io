import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Data = ({ children }: Props) => {
  return (
    <div className="container rounded-lg font-Raleway font-normal bg-palette1 w-3/4 m-20 p-5 bg-opacity-5">
      <div className="text-2xl text-palette2">{children}</div>
    </div>
  );
};

export default Data;
