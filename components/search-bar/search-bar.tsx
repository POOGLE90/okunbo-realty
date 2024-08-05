import cn from "classnames";
import styles from "./search-bar.module.css";
import { Building, Filter } from "@/constants/icons";
import Link from "next/link";

type SearchBarProps = {
  placeholder: string;
};

export default function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <div className={styles.search_bar}>
      <div className={styles.input_group}>
        <div className={styles.icon}>{Building}</div>
        <input
          type="text"
          placeholder={placeholder}
          className={cn("label-medium", styles.input)}
        />

        <div className={styles.divider} />
        <div className={styles.icon}>{Filter}</div>
      </div>

      <div className={styles.breakline} />

      <Link
        href={{
          pathname: "/search",
        }}
        className={cn("button", styles.button)}
      >
        Search Property
      </Link>
    </div>
  );
}
