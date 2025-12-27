import { liveTrainingEventsData } from "@/data/liveTrainingEvents";
import LiveTrainingDetailPage from "@/components/LiveTrainingDetailPage";
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return liveTrainingEventsData.map((event) => ({
    slug: event.slug,
  }));
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const slug = (await params).slug;
  const eventData = liveTrainingEventsData.find(event => event.slug === slug);

  if (!eventData) {
    notFound();
  }

  return <LiveTrainingDetailPage event={eventData} />;
};

export default Page;
