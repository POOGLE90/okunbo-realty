import Layout from "@/components/Layout";
import Hero from "./hero";

export default function SearchPage({ query }: any) {
  return (
    <Layout>
      <Hero query={query} />
    </Layout>
  );
}
