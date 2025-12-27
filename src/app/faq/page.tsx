import { faqData } from "@/data/faq";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          {faqData.t.faqTitle}
        </h1>
        <div className="max-w-3xl mx-auto">
          {faqData.questions.map((item, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-semibold mb-2">{item.question}</h2>
              <p className="text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default page;
