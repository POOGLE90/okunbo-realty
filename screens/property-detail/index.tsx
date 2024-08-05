import Layout from "@/components/Layout";
import Hero from "./hero";
import Location from "./location";

export default function PropertyDetailPage({ item }: any) {
  return (
    <Layout>
      <Hero item={item} />
      <Location />
    </Layout>
  );
}
