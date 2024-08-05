"use client";

import { SearchProvider } from "../context/search-context";

export function Providers({ children }) {
  return <SearchProvider>{children}</SearchProvider>;
}
