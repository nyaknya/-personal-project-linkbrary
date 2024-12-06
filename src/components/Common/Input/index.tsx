import classNames from "classnames/bind";
import Image from "next/image";
import { useState } from "react";

import styles from "./Input.module.scss";

const cn = classNames.bind(styles);

interface InputProps {
  id: string;
  error?: string;
  type?: string;
  placeholder?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function Input({
  id,
  error,
  type = "text",
  placeholder = "내용 입력",
  onBlur,
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const isPasswordType = type === "password";
  const inputType = isPasswordType && isPasswordVisible ? "text" : type;

  return (
    <div className={cn("input-box")}>
      <input
        id={id}
        type={inputType}
        className={cn("input", { error: !!error })}
        placeholder={placeholder}
        onBlur={onBlur}
      />
      {isPasswordType && (
        <Image
          src={isPasswordVisible ? "/images/eye_off.svg" : "/images/eye_on.svg"}
          alt={isPasswordVisible ? "비밀번호 숨기기" : "비밀번호 보이기"}
          width={16}
          height={16}
          onClick={handleToggleVisibility}
          style={{ cursor: "pointer" }}
        />
      )}
      {error && <span className={cn("error")}>{error}</span>}
    </div>
  );
}
