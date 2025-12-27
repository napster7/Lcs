
// src/app/training/[slug]/page.tsx
import TrainingDetailPage from "@/components/TrainingDetailPage";
import { allTrainings } from "@/data/trainings";
import { trainingPrograms } from "@/data/trainingPrograms"; // Import trainingPrograms
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return Object.keys(allTrainings).map((slug) => ({
    slug,
  }));
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const slug = (await params).slug;
  const trainingData = allTrainings[slug];

  if (!trainingData) {
    notFound();
  }

  // Find the imageUrl from trainingPrograms
  const programWithImage = trainingPrograms.find(p => p.link === `/training/${slug}`);
  const imageUrl = programWithImage ? programWithImage.imageUrl : undefined;

  // Merge imageUrl into trainingData
  const finalTrainingData = { ...trainingData, imageUrl };

  return <TrainingDetailPage training={finalTrainingData} />;
};

export default Page;
