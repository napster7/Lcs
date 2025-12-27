# Developer's Guide

This guide provides a comprehensive overview of the development style, folder structure, and conventions used in the project. It is intended to help any developer quickly get up to speed and contribute effectively.

## 1. Core Technologies

*   **Framework**: Next.js (using the App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS with the DaisyUI component library
*   **Database**: PostgreSQL
*   **ORM**: Drizzle ORM
*   **Animation**: React Spring
*   **Email**: Resend

## 2. Development Style

Our development philosophy is centered around creating a clean, maintainable, and performant application.

*   **Component-Driven**: The UI is built from a collection of small, reusable React components.
*   **Functional & Type-Safe**: We exclusively use functional components and leverage TypeScript for type safety.
*   **Separation of Concerns**: We maintain a clear separation between the UI (components), the content (data folder), and the business logic (methods folder).
*   **Utility-First CSS**: All styling is done using Tailwind CSS utility classes directly within the components. We do not write separate CSS files.

## 3. Folder Structure: What Goes Where

The `src` directory is the heart of our application. Here’s a breakdown of its structure:

*   `src/app`
    *   **Purpose**: Contains all pages and API routes for the application.
    *   **Usage**: Each folder represents a route. For example, the `/about` page is located at `src/app/about/page.tsx`.

*   `src/assets`
    *   **Purpose**: Stores all static assets.
    *   **Usage**: All images are stored in `src/assets/images`. Fonts and other assets are organized similarly.

*   `src/components`
    *   **Purpose**: Home to all reusable React components.
    *   **Usage**: This is where you will find everything from simple buttons to complex UI sections. Components that are used across multiple pages are placed here.

*   `src/data`
    *   **Purpose**: Stores all UI content, such as text, links, and configuration for pages.
    *   **Usage**: Instead of hardcoding text directly into components, we store it in files within this directory. This makes it easy to manage and update the content of the website without touching the component logic.

*   `src/db`
    *   **Purpose**: Manages the database connection and schema.
    *   **Usage**: The `schema.ts` file defines our database tables using Drizzle ORM.

*   `src/methods`
    *   **Purpose**: Contains reusable functions and business logic.
    *   **Usage**: Any function that is not a React component and is used in multiple places should be placed here. This includes utility functions (like `cn.ts` for class names) and services that interact with external APIs (like `send-email.ts`).

## 4. Component Guide

*   **Create Components**: All new components should be created in the `src/components` directory.
*   **Keep them Small**: Components should be small and focused on a single responsibility.
*   **Props for Data**: Components should receive their data via props. Avoid fetching data directly within a component unless it is a top-level page component.

## 5. Styling Guide

*   **Tailwind CSS**: All styling is done with Tailwind CSS utility classes.
*   **No Custom CSS**: Do not write custom CSS files. If you need a specific style, create a new utility class in the `tailwind.config.js` file.
*   **Conditional Classes**: Use the `cn()` utility function in `src/methods/cn.ts` to conditionally apply classes.

## 6. Data and Content

*   **UI Content**: All text and content displayed in the UI is stored in the `src/data` directory. This allows for easy content management.
*   **Database**: For dynamic data, we use a PostgreSQL database with Drizzle ORM. The schema is defined in `src/db/schema.ts`.

## 7. Methods and Business Logic

*   **Reusable Functions**: Any non-component function that is used in more than one place should be extracted into a file in the `src/methods` directory.
*   **External Services**: Logic for interacting with external services, such as sending emails with Resend, is also placed in `src/methods`.

## 8. Key Libraries and Their Usage

*   **`@react-spring/web`**: Used for creating animations.
*   **`classnames`**: A simple utility for conditionally joining class names together.
*   **`lucide-re iconify`**: Provides a set of beautiful and consistent icons.
*   **`recharts`**: A composable charting library built on React components.
*   **`react-intersection-observer`**: Used to trigger animations or events when an element enters the viewport.