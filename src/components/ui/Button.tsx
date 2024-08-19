import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../util";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<any> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
}
const Button = ({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </button>
  );
};

export default Button;

const buttonVariants = cva("text-white rounded-lg", {
  variants: {
    variant: {
      primary: "bg-cyan-500 hover:bg-cyan-600 active:scale-95 duration-300",
      secondary:
        "bg-indigo-500 hover:bg-indigo-600 active:scale-95 duration-300",

      danger: "bg-red-500 hover:bg-red-600 active:scale-95 duration-300",
      outline:
        "border border-gray-300 text-gray-600  active:scale-95 duration-300",
    },
    size: {
      sm: "size-10 text-sm",
      md: "px-4 py-2",
      lg: "px-5 py-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
