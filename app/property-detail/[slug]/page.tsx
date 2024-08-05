import PropertyDetailPage from "@/screens/about/property-detail";

export default function PropertyDetail({
  params,
}: {
  params: { slug: string };
}) {
  console.log("Params:", params);
  return <PropertyDetailPage />;
}
