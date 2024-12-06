/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import Image from "next/image";
import React, { forwardRef } from "react";

import styles from "./Input.module.scss";

const cn = classNames.bind(styles);

interface CustomInputProps {
  error?: string;
  isPasswordVisible?: boolean;
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  CustomInputProps;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      type = "text",
      placeholder = "내용 입력",
      error,
      isPasswordVisible,
      ...props
    },
    ref
  ) => {
    const inputType = type === "password" && isPasswordVisible ? "text" : type;

    return (
      <div className={cn("input-box")}>
        <input
          id={id}
          ref={ref} // 부모에서 전달된 ref 연결
          type={inputType}
          placeholder={placeholder}
          className={cn("input", { error: !!error })}
          {...props} // 부모에서 전달된 모든 props 적용
        />
        {type === "password" && (
          <Image
            src={
              isPasswordVisible ? "/images/eye_off.svg" : "/images/eye_on.svg"
            }
            alt={isPasswordVisible ? "비밀번호 숨기기" : "비밀번호 보이기"}
            width={16}
            height={16}
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
