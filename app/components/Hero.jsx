export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="art" aria-hidden="true">
        <picture>
          <source media="(min-width:860px)" srcSet="/hero-wide.webp" type="image/webp" />
          <source media="(min-width:860px)" srcSet="/hero-wide.png" />
          <source srcSet="/hero-tall.webp" type="image/webp" />
          <img src="/hero-tall.png" alt="" fetchPriority="high" decoding="async" />
        </picture>
      </div>
      <canvas className="petals" id="petals" aria-hidden="true" />
      <div className="veil" aria-hidden="true" />

      <div className="wrap">
        <h1 className="name">
          <span className="ln"><em>Alexander Husseini</em></span>
        </h1>
        <p className="lede">
          B.S. Software Engineering, minor in Cybersecurity — Kennesaw State University.
        </p>
        <div className="acts">
          <a className="btn ghost" href="/pdf/Alex_Husseini_Resume.pdf">Résumé</a>
          <a className="btn ghost" href="mailto:alex@alexhusseini.com">Email me</a>
          <a className="btn ghost" href="https://github.com/AlexHusseini">GitHub</a>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}
