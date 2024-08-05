import React from "react";
import styles from "./agent-form.module.css";
import cn from "classnames";
import { TextArea, TextField } from "../elements";

export default function AgentForm() {
  return (
    <form className={styles.form}>
      <div className={styles.rowFields}>
        <TextField
          name="name"
          placeholder="First Name"
          required
          className={styles.textfield}
        />
        <TextField
          name="name"
          placeholder="Last Name"
          required
          className={styles.textfield}
        />
      </div>

      <TextField
        name="email"
        placeholder="Email"
        required
        className={styles.textfield}
      />

      <TextField
        name="phone"
        placeholder="Phone"
        required
        className={styles.textfield}
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
