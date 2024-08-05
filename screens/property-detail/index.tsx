import Layout from "@/components/Layout";
import Hero from "./hero";
import Location from "./location";
import Overview from "./overview";

export default function PropertyDetailPage({ item }: any) {
  return (
    <Layout>
      <Hero item={item} />
      <Overview item={item} />
      <Location />
    </Layout>
  );
}
