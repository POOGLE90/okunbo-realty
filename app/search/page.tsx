import SearchPage from "@/screens/search";

export default function Search({ searchParams }: { searchParams: any }) {
  const query = searchParams.query;

  return <SearchPage query={query} />;
}
