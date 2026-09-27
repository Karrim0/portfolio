import Link from "next/link";
export default function NotFound() {
  return (
    <main className="not-found">
      <span className="eyebrow">404 / A SMALL DETOUR</span>
      <h1>
        This page took
        <br />
        another route<span className="orange">.</span>
      </h1>
      <p>Let’s get you back to the work.</p>
      <Link href="/" className="button primary">
        Back to portfolio ↗
      </Link>
    </main>
  );
}
