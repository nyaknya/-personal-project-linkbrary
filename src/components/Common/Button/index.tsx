import classNames from "classnames/bind";
import { ReactNode } from "react";

import styles from "./Button.module.scss";

const cn = classNames.bind(styles);

interface ButtonProps {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit";
}

export default function Button({
  children,
  onClick,
  disabled,
  type = "button",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={cn("cta-button")}
    >
      {children}
    </button>
  );
}
