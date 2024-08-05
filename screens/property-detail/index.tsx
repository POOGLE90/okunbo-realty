import Layout from "@/components/Layout";
import Hero from "./hero";
import Location from "./location";
import Overview from "./overview";
import AdditionalGallery from "./additional-gallery";
import RelatedProperties from "./related-properties";

export default function PropertyDetailPage({ item }: any) {
  return (
    <Layout>
      <Hero item={item} />
      <Overview item={item} />
      <AdditionalGallery images={item.images} />
      <Location />
      <RelatedProperties item={item} />
    </Layout>
  );
}
