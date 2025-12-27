// src/app/certification/[slug]/page.tsx
import CertificationDetailPage from "@/components/CertificationDetailPage";
import { certifications } from "@/data/certifications";

async function getCertificateData(params: any) {
  const slug = (await params).slug;
  // console.log("Slug:", slug);
  // console.log("All Trainings:", Object.keys(allCertifications));
  return certifications[slug] || null;
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const certificationData = await getCertificateData(params);

  if (!certificationData) {
    return <div>Certification not found</div>;
  }

  return <CertificationDetailPage certification={certificationData} />;
};

export default Page;
