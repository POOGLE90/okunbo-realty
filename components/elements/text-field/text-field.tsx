import React from "react";
import cn from "classnames";
import styles from "./text-field.module.css";
import { Hide, Show } from "@/constants/icons";

type TextFieldProps = {
  type?: string;
  placeholder: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputClassName?: string;
  withIcon?: boolean;
  icon?: React.ReactNode;
  show?: boolean;
  showPassword?: boolean;
  togglePasswordVisibility?: () => void;
  required?: boolean;
  error?: boolean;
};

export default function TextField({
  placeholder,
  name,
  value,
  onChange,
  className,
  inputClassName,
  withIcon = false,
  icon,
  show,
  showPassword,
  togglePasswordVisibility,
  required,
  error,
  ...props
}: TextFieldProps) {
  return (
    <div
      className={cn(styles.container, className, {
        [styles.show]: show,
      })}
    >
      {withIcon && <div className={styles.icon}>{icon}</div>}
      <input
        type={props.type || "text"}
        value={value}
        onChange={onChange}
        className={cn("label-medium", styles.input, inputClassName, {
          [styles.error]: error,
        })}
        placeholder={placeholder}
        {...props}
      />

      {show && (
        <button
          type="button"
          className={styles.button}
          onClick={togglePasswordVisibility}
        >
          {showPassword ? Hide : Show}
        </button>
      )}
    </div>
  );
}
