export default function Experience() {
  return (
    <section className="band" id="experience">
      <div className="rule rv">
        <span className="eyebrow">01</span>
        <h2>Experience</h2>
      </div>

      <div className="cards">
      <article className="slab rv">
        <div className="slab-head">
          <h3>Software Engineer</h3>
          <span className="when">Aug 2025 — Present</span>
        </div>
        <p className="org">
          <a href="https://witness.ai/">WitnessAI</a>
        </p>
        <div className="tags">
          <span className="tag">Go</span>
          <span className="tag">Rust</span>
          <span className="tag">Python</span>
          <span className="tag">TypeScript</span>
          <span className="tag">React</span>
          <span className="tag">Harness</span>
          <span className="tag">Docker</span>
          <span className="tag">Git</span>
        </div>
        <p>
          Develop and maintain the Go and Rust proxy integrations behind the network layer of WitnessAI&apos;s enterprise GenAI security platform — the proxy-layer work that keeps communication between enterprise environments and generative AI applications secure.
        </p>
        <p>
          Build and maintain Git-based CI/CD workflows in Harness for versioning, building, and deploying changes, and use Docker to manage containerized database and in-memory service dependencies for local development and testing.
        </p>
        <p>
          Work directly with enterprise customers to troubleshoot integration behavior, pin down technical requirements, and ship production solutions.
        </p>
      </article>

      <article className="slab rv">
        <div className="slab-head">
          <h3>Software Engineering Intern</h3>
          <span className="when">Jul 2025 — Aug 2025</span>
        </div>
        <p className="org">
          <a href="https://witness.ai/">WitnessAI</a>
        </p>
        <div className="tags">
          <span className="tag">TypeScript</span>
          <span className="tag">React</span>
          <span className="tag">Node.js</span>
          <span className="tag">Chrome DevTools</span>
          <span className="tag">Git</span>
        </div>
        <p>
          Developed TypeScript and React integrations for web applications that detect and protect sensitive information submitted to generative AI services, building application-specific browser integrations from React props, DOM state, and web events across supported platforms.
        </p>
        <p>
          Debugged DOM interactions and UI rendering in Chrome DevTools to resolve browser integration and data-extraction failures, and contributed TypeScript features to a Node.js traffic analysis platform through Git-based code review.
        </p>
      </article>

      <article className="slab rv">
        <div className="slab-head">
          <h3>Lead Full Stack Developer</h3>
          <span className="when">Mar 2025 — Apr 2025</span>
        </div>
        <p className="org">
          <a href="https://www.rsphotographies.com/">RS Photographies</a> · Remote
        </p>
        <div className="tags">
          <span className="tag">React</span>
          <span className="tag">Firebase</span>
          <span className="tag">Firestore</span>
          <span className="tag">Nodemailer</span>
          <span className="tag">Jest</span>
        </div>
        <p>
          Designed and shipped a responsive portfolio site for a working photographer: filterable gallery, contact form, and a secure admin panel for uploading and organizing photos. Built on React and Firebase, tuned for mobile, live at rsphotographies.com.
        </p>
      </article>
      </div>
    </section>
  );
}
