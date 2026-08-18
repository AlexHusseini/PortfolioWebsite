export default function NotFound() {
  return (
    <div className="wrap" style={{ minHeight: '100svh', display: 'flex', alignItems: 'center' }}>
      <div>
        <span className="eyebrow">404</span>
        <h1 className="name" style={{ fontSize: '3rem', marginTop: '1rem' }}>Page not found</h1>
        <p className="lede" style={{ opacity: 1 }}>
          That page doesn&apos;t exist. Head back home.
        </p>
        <a className="btn" href="/">Return home</a>
      </div>
    </div>
  );
}
