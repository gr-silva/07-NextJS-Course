import React from "react";

interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default Button;
