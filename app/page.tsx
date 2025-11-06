import Link from "next/link";

const features = [
  {
    title: "Zero Setup",
    description:
      "You can deploy this project to Vercel instantly. All configuration files are ready to go."
  },
  {
    title: "Modern Stack",
    description:
      "Built with Next.js 14, React 18, and TypeScript to keep your foundations future friendly."
  },
  {
    title: "Production Ready",
    description:
      "Strict TypeScript settings, ESLint integration, and accessible defaults baked in."
  }
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <h1>Agentic Test App</h1>
        <p>
          A minimal Next.js starter scaffolded autonomously. Modify the content
          or extend the structure to suit your next experiment.
        </p>
        <div className="cta-row">
          <Link className="cta" href="https://nextjs.org/docs/app">
            Explore Next.js Docs
          </Link>
          <Link className="cta secondary" href="https://vercel.com/docs">
            Review Vercel Guide
          </Link>
        </div>
      </section>

      <section className="feature-grid" aria-label="Key features">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </section>

      <footer className="footer">
        <p>
          Deploy with <code>vercel deploy --prod</code> when you&apos;re ready.
        </p>
      </footer>
    </main>
  );
}
