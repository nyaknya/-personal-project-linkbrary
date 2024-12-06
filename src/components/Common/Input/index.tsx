/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import Image from "next/image";
import React, { forwardRef, useState } from "react";

import styles from "./Input.module.scss";

const cn = classNames.bind(styles);

interface CustomInputProps {
  error?: string;
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  CustomInputProps;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, type = "text", placeholder = "내용 입력", error, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleToggleVisibility = () => {
      setIsPasswordVisible((prev) => !prev);
    };

    const inputType = type === "password" && isPasswordVisible ? "text" : type;

    return (
      <div className={cn("input-box")}>
        <input
          id={id}
          ref={ref}
          type={inputType}
          placeholder={placeholder}
          className={cn("input", { error: !!error })}
          {...props}
        />
        {type === "password" && (
          <Image
            src={
              isPasswordVisible ? "/images/eye_off.svg" : "/images/eye_on.svg"
            }
            alt={isPasswordVisible ? "비밀번호 숨기기" : "비밀번호 보이기"}
            width={16}
            height={16}
            onClick={handleToggleVisibility}
            style={{ cursor: "pointer" }}
          />
        )}
        {error && <div className={cn("error-message")}>{error}</div>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
