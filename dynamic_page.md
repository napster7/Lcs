# Developer's Guide: Creating Dynamic Training Pages

This guide provides a comprehensive overview of how to create and manage dynamic training detail pages in this project. It is intended for developers and AI task executors to understand the architecture and process.

## 1. Overview of the Dynamic Routing System

We use Next.js's App Router to create dynamic routes for our training programs. This allows us to have a single page template that can render different content based on the URL.

The URL structure for a training detail page is `/training/[slug]`, where `[slug]` is a unique identifier for each training program (e.g., `/training/soc-analyst-training`).

## 2. File Structure

The dynamic routing system is composed of the following key files and directories:

*   **`src/app/training/[slug]/page.tsx`**: This is the main page file for the dynamic route. It is responsible for fetching the data for a specific training program and passing it to the `TrainingDetailPage` component.

*   **`src/components/TrainingDetailPage.tsx`**: This is the React component that renders the layout and content of a single training program. It receives the training data as a prop.

*   **`src/data/training/`**: This directory contains the individual data files for each training program. Each file is named after the program's slug (e.g., `soc-analyst-training.ts`).

*   **`src/data/trainings.ts`**: This file consolidates all the individual training data files into a single object, making it easy to look up the data for a specific slug.

## 3. The `[slug]/page.tsx` Component

This is a server component that acts as the entry point for the dynamic route. Here's how it works:

```typescript
// src/app/training/[slug]/page.tsx
import TrainingDetailPage from "@/components/TrainingDetailPage";
import { allTrainings } from "@/data/trainings";

export async function generateStaticParams() {
  return Object.keys(allTrainings).map((slug) => ({
    slug,
  }));
}

const Page = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const trainingData = allTrainings[slug];

  if (!trainingData) {
    return <div>Training not found</div>;
  }

  return <TrainingDetailPage training={trainingData} />;
};

export default Page;
```

*   **`generateStaticParams()`**: This function tells Next.js which slugs to pre-render at build time. It gets the slugs from the keys of the `allTrainings` object.

*   **`Page` component**: This component receives the `params` object, which contains the `slug` from the URL. It then uses the `slug` to look up the corresponding training data in the `allTrainings` object and passes it to the `TrainingDetailPage` component.

## 4. The `TrainingDetailPage.tsx` Component

This component is responsible for rendering the actual content of the training page. It is a client component that receives the `training` data as a prop.

The component is structured into sections as requested in the initial prompt (Header, Overview, Curriculum, etc.).

## 5. Data Organization

The data for the training pages is organized as follows:

*   **Individual Data Files**: Each training program has its own data file in `src/data/training/`. The file name is the slug of the program. For example, `soc-analyst-training.ts`.

    Each data file exports a `trainingData` object with the following structure:

    ```typescript
    // src/data/training/soc-analyst-training.ts
    export const trainingData = {
      title: "SOC Analyst Training",
      subtitle: "...",
      enrollLink: "...",
      overview: "...",
      details: { ... },
      learningOutcomes: [ ... ],
      curriculum: [ ... ],
      whoShouldAttend: [ ... ],
      certification: { ... },
      instructor: { ... },
      faq: [ ... ],
    };
    ```

*   **Consolidated Data File**: The `src/data/trainings.ts` file imports all the individual training data files and exports them as a single object called `allTrainings`.

    ```typescript
    // src/data/trainings.ts
    import { trainingData as socAnalystTraining } from './training/soc-analyst-training';
    // ... other imports

    export const allTrainings: { [key: string]: any } = {
      'soc-analyst-training': socAnalystTraining,
      // ... other trainings
    };
    ```

## 6. How to Add a New Training Page

To add a new training page, follow these steps:

1.  **Create a new data file:** Create a new file in the `src/data/training/` directory. The file name should be the slug of the new training program (e.g., `new-training-program.ts`).

2.  **Add the training data:** In the new file, create and export a `trainingData` object with the same structure as the other training data files.

3.  **Update the consolidated data file:** Open `src/data/trainings.ts` and add the new training data to the `allTrainings` object.

    ```typescript
    // src/data/trainings.ts
    import { trainingData as newTrainingProgram } from './training/new-training-program';
    // ... other imports

    export const allTrainings: { [key: string]: any } = {
      'new-training-program': newTrainingProgram,
      // ... other trainings
    };
    ```

4.  **Update the main training programs list:** Open `src/data/trainingPrograms.ts` and add a new entry for the new training program, making sure the `link` property points to the new dynamic route (e.g., `/training/new-training-program`).

That's it! The new training page will be automatically generated.
