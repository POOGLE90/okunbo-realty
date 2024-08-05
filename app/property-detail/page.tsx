import PropertyDetailPage from "@/screens/property-detail";

export default function PropertyDetail({ searchParams }: any) {
  const item = JSON.parse(searchParams.item);

  return <PropertyDetailPage item={item} />;
}
