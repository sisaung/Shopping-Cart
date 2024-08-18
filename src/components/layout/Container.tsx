import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ComponentProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ className, children }: ComponentProps) => {
  return (
    <div
      className={twMerge(
        "w-full md:w-[800px] lg:w-[1000px] mx-auto",
        className
      )}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

export default Container;
