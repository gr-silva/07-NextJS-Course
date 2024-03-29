import styled from "styled-components";
import React from "react";

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  border: 0;
  padding: 8px 14px;
  transition: 0.3s;
  background-color: ${({ theme, variant }) => theme.colors[variant].main};
  color: ${({ theme, variant }) => theme.colors[variant].text};

  &:hover {
    background-color: ${({ theme, variant }) => theme.colors[variant].light};
  }

  &:focus {
    background-color: ${({ theme, variant }) => theme.colors[variant].dark};
  }
`;

interface ButtonProps {
  /**
   * Essa prop é baseada nas opções de cores que temos no nosso tema, confia a página  do tema para mais informações.
   */
  variant?: "primary" | "accent";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.defaultProps = {
  disabled: false,
  variant: "primary",
};

export default Button;
