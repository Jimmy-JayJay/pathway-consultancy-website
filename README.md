# Pathway Consultancy Website (Next.js Version)

This is the advanced, dynamic version of the Pathway Consultancy website, built with **Next.js 15 (App Router)** and **Tailwind CSS**.

##  Project Structure

- `app/`: Contains the routes and layout.
    - `layout.tsx`: Root layout with 'Inter' font and metadata.
    - `page.tsx`: Landing page composition.
    - `globals.css`: Tailwind configuration and custom color variables.
- `components/`: Modular UI components.
    - `layout/`: Navbar, Footer.
    - `sections/`: Hero, About, Vision, Services, Team, Contact.
    - `ui/`: Reusable primitives (Button, Container).

##  Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##  Key Features

-   **Framework**: Next.js 15 (App Router) for Server Side Rendering and SEO.
-   **Styling**: Tailwind CSS v3/v4 for utility-first styling.
-   **Icons**: `lucide-react` for clean, professional SVG icons (replaced emojis).
-   **Structure**: Highly modular component architecture for easy maintenance.
-   **Theme**: Deep Blue (`#0c3b5d`) and Gold (`#dda517`) corporate identity.
-   **Animations**: Framer Motion integrated for the Hero section entrance.

##  Future Improvements

-   **Contact Form**: Wire up the "Send Message" button to an actual API route (e.g., Resend or SendGrid).
-   **CMS**: Connect the content in `components/sections` to a Headless CMS (Sanity.io) so non-developers can edit text.
