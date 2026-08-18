export default function Projects() {
  return (
    <section className="band" id="project">
      <div className="rule rv">
        <span className="eyebrow">02</span>
        <h2>Project</h2>
      </div>
      <article className="slab rv">
        <div className="slab-head">
          <h3>TSMocker — Type-Safe Mock Data Generator CLI</h3>
          <span className="when">May 2025 — Present</span>
        </div>
        <p className="org">Type-safe mock data generator · npm package</p>
        <div className="tags">
          <span className="tag">TypeScript</span>
          <span className="tag">Node.js</span>
          <span className="tag">ts-morph</span>
          <span className="tag">Faker.js</span>
          <span className="tag">Commander</span>
          <span className="tag">Jest</span>
        </div>
        <p>
          A CLI utility that generates 10,000+ mock data entries from TypeScript interfaces, handling complex types for API prototyping and test-data seeding. It uses the TypeScript Compiler API through ts-morph to parse schema files and synthesize type-accurate mock objects at scale.
        </p>
        <p>
          Built as modular CLI components with 90%+ test coverage and TypeDoc-generated documentation, prepared for public GitHub and npm release. An interactive command panel handles mock-type selection and export options including CSV, so there&apos;s no manual command entry.
        </p>
        <div className="links">
          <a href="https://github.com/AlexHusseini/tsmocker">View source</a>
        </div>
      </article>
    </section>
  );
}
