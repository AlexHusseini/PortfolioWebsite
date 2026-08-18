export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="seal" aria-hidden="true">AH</div>
      <p>&copy; {year} Alexander Husseini</p>
    </footer>
  );
}
