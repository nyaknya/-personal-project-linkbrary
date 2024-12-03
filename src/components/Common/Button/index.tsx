import classNames from "classnames/bind";

import styles from "./Button.module.scss";

const cn = classNames.bind(styles);

interface ButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export default function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className={cn("cta-button")}>
      {children}
    </button>
  );
}
