import React from "react";
import cn from "classnames";
import styles from "./text-area.module.css";

type TextAreaProps = {
  placeholder: string;
  className?: string;
  [key: string]: any;
};

export default function TextArea({
  placeholder,
  className,
  ...props
}: TextAreaProps) {
  return (
    <textarea
      className={cn("label-medium", styles.textarea, className)}
      placeholder={placeholder}
      {...props}
    />
  );
}
