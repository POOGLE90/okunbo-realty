import Layout from "@/components/Layout";
import Hero from "./hero";

export default function PropertyDetailPage({ item }) {
  return (
    <Layout>
      <Hero item={item} />
    </Layout>
  );
}
