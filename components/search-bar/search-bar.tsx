import React from "react";
import cn from "classnames";
import styles from "./search-bar.module.css";
import { Building, Filter } from "@/constants/icons";
import Link from "next/link";

type SearchBarProps = {
  placeholder: string;
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
};

export default function SearchBar({
  placeholder,
  searchTerm,
  onSearchTermChange,
}: SearchBarProps) {
  const [loading, setLoading] = React.useState(false);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onSearchTermChange(newValue);

    setLoading(true);

    // Simulate a search operation with a timeout
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 1-second loading time
  };

  return (
    <div className={styles.search_bar}>
      <div className={styles.input_group}>
        <div className={styles.icon}>{Building}</div>
        <input
          type="text"
          placeholder={placeholder}
          className={cn("label-medium", styles.input)}
          value={searchTerm}
          onChange={handleInputChange}
        />

        <div className={styles.divider} />
        {loading ? (
          <div className={styles.spinner} />
        ) : (
          <div className={styles.icon}>{Filter}</div>
        )}
      </div>

      <div className={styles.breakline} />

      <Link
        href={{
          pathname: "/search",
          query: { query: searchTerm },
        }}
        className={cn("button", styles.button)}
      >
        Search Property
      </Link>
    </div>
  );
}
