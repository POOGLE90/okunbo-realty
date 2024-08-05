import PropertyDetailPage from "@/screens/about/property-detail";

export default function PropertyDetail({ searchParams }) {
  const item = JSON.parse(searchParams.item);

  return <PropertyDetailPage item={item} />;
}
