import React from "react";
import styles from "./agent-form.module.css";
import cn from "classnames";
import { TextArea, TextField } from "../elements";

type AgentFormProps = {
  className?: string;
  inputClassName?: string;
};

export default function AgentForm({
  className,
  inputClassName,
}: AgentFormProps) {
  return (
    <form className={cn(styles.form, className)}>
      <div className={styles.rowFields}>
        <TextField
          name="name"
          placeholder="First Name"
          required
          className={cn(styles.textfield, inputClassName)}
        />
        <TextField
          name="name"
          placeholder="Last Name"
          required
          className={cn(styles.textfield, inputClassName)}
        />
      </div>

      <TextField
        name="email"
        placeholder="Email"
        required
        className={cn(styles.textfield, inputClassName)}
      />

      <TextField
        name="phone"
        placeholder="Phone"
        required
        className={cn(styles.textfield, inputClassName)}
      />

      <TextArea
        name="message"
        label="Message"
        placeholder="Your Message..."
        required
        className={styles.textarea}
      />

      <button className={cn("button", styles.button)}>Contact Agent</button>
    </form>
  );
}
