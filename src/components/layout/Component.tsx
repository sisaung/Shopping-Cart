import { ReactNode } from "react";

type ComponentProps = {
  children: ReactNode;
};

const Component = ({ children }: ComponentProps) => {
  return <div className="w-[1000px] mx-auto "> {children} </div>;
};

export default Component;
