import React from "react";
import cn from "classnames";
import styles from "./search-bar.module.css";
import { Building, Filter } from "@/constants/icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchTermChange(event.target.value);
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
        <div className={styles.icon}>{Filter}</div>
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
