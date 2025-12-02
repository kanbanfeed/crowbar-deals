import DealPageClient from "./DealPageClient";

export default function DealPlaceholder({ params }: { params: { id?: string } }) {
  return <DealPageClient id={params.id ?? ""} />;
}
