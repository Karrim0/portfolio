import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <a className="footer-brand footer-wordmark" href="#hero">
          <strong>{portfolioData.personal.shortName}<span>.</span></strong>
        </a>
        <p>© {new Date().getFullYear()} — Web products, thoughtfully engineered.</p>
        <a className="back-to-top" href="#hero">Back to top <ArrowUp size={14} /></a>
      </div>
    </footer>
  );
}
