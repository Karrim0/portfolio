"use client";

import emailjs from "@emailjs/browser";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  Command,
  Cpu,
  ExternalLink,
  Github,
  Globe2,
  Languages,
  Linkedin,
  Mail,
  Menu,
  Server,
  Send,
  Sparkles,
  Star,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import {
  portfolioData,
  type PortfolioProject,
  type ProjectLinkKind,
} from "@/data/portfolio";
import { getCopy, projectArabic } from "@/data/portfolio-copy";
import { LocaleProvider, useLocale } from "./locale-provider";

const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_n13gtdk";
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_nf9ejta";
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "yDhIDrL00NYW2rN_l";

const NAV_IDS = [
  "work",
  "capabilities",
  "experience",
  "about",
  "contact",
] as const;
type ProjectCopy = Pick<
  PortfolioProject,
  "category" | "status" | "description" | "role" | "challenge" | "outcome"
>;

function localProject(
  project: PortfolioProject,
  locale: "en" | "ar",
): ProjectCopy {
  if (locale === "ar" && projectArabic[project.id])
    return projectArabic[project.id];
  return project;
}

export function PortfolioSite() {
  return (
    <LocaleProvider>
      <PortfolioExperience />
    </LocaleProvider>
  );
}

function PortfolioExperience() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.28,
  });

  return (
    <>
      <motion.div
        className="v3-scroll-progress"
        style={{ scaleX }}
        aria-hidden="true"
      />
      <IntroSequence />
      <AmbientScene />
      <SiteNav />
      <GlobalTools />
      <main className="v3-main">
        <Hero />
        <Work />
        <Capabilities />
        <Process />
        <Experience />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

function IntroSequence() {
  const { locale } = useLocale();
  const t = getCopy(locale).intro;
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  const dismiss = useCallback(() => {
    setVisible(false);
    window.sessionStorage.setItem("portfolio-intro-seen", "1");
  }, []);

  useEffect(() => {
    if (window.sessionStorage.getItem("portfolio-intro-seen")) {
      setVisible(false);
      return;
    }
    const duration = reduceMotion ? 350 : 1950;
    const timer = window.setTimeout(dismiss, duration);
    return () => window.clearTimeout(timer);
  }, [dismiss, reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="v3-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-12%" }}
          transition={{
            duration: reduceMotion ? 0.15 : 0.65,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div className="v3-intro-grid" aria-hidden="true" />
          <motion.div
            className="v3-intro-center"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55 }}
          >
            <span className="v3-intro-index">KH / 26</span>
            <div className="v3-intro-name-wrap">
              <motion.strong
                initial={reduceMotion ? false : { y: 60 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                KAREEM
              </motion.strong>
              <motion.strong
                initial={reduceMotion ? false : { y: 60 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                HANAFY<span>.</span>
              </motion.strong>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              {t.line}
            </motion.p>
          </motion.div>
          <div className="v3-intro-footer">
            <button type="button" onClick={dismiss}>
              {t.enter}
            </button>
            <div className="v3-intro-loader">
              <motion.i
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: reduceMotion ? 0.2 : 1.45,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function AmbientScene() {
  return (
    <div className="v3-ambient" aria-hidden="true">
      <div className="v3-noise" />
      <div className="v3-grid-plane" />
      <div className="v3-glow v3-glow-a" />
      <div className="v3-glow v3-glow-b" />
    </div>
  );
}

function SiteNav() {
  const { locale, toggleLocale } = useLocale();
  const t = getCopy(locale).nav;
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("hero");

  const nav = useMemo(
    () => [
      { id: "work", label: t.work },
      { id: "capabilities", label: t.capabilities },
      { id: "experience", label: t.experience },
      { id: "about", label: t.about },
      { id: "contact", label: t.contact },
    ],
    [t],
  );

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 24);

      const marker = window.innerHeight * 0.28;
      let next = "hero";

      for (const id of ["hero", ...NAV_IDS]) {
        const node = document.getElementById(id);
        if (node && node.getBoundingClientRect().top <= marker) next = id;
      }

      setActive(next);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const jump = (event: ReactMouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setOpen(false);

    const node = document.getElementById(id);
    if (!node) return;

    const top = node.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({
      top,
      behavior: reduceMotion ? "auto" : "smooth",
    });

    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <header className={`v3-header v10-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav
        className="v3-nav v10-nav"
        aria-label={locale === "ar" ? "التنقل الرئيسي" : "Primary navigation"}
      >
        <a
          className="v3-brand v10-brand"
          href="#hero"
          onClick={(event) => jump(event, "hero")}
          data-cursor="HOME"
          aria-label="Kareem Hanafy — Home"
        >
          <span className="v3-brand-glyph v10-brand-glyph">KH</span>

          {/* Keep Latin branding isolated from RTL bidi re-ordering. */}
          <span className="v3-brand-word v10-brand-word" dir="ltr">
            Kareem Hanafy<span aria-hidden="true">.</span>
          </span>
        </a>

        <div className="v3-nav-links v10-nav-links">
          {nav.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => jump(event, item.id)}
              className={active === item.id ? "is-active" : ""}
              aria-current={active === item.id ? "page" : undefined}
            >
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </div>

        <div className="v3-nav-actions v10-nav-actions">
          <button
            className="v3-language v10-language"
            type="button"
            onClick={toggleLocale}
            aria-label={
              locale === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"
            }
            data-cursor="LANG"
          >
            <span>{locale === "en" ? "AR" : "EN"}</span>
            <Languages size={14} />
          </button>

          <a
            className="v3-talk v10-talk"
            href={`mailto:${portfolioData.personal.email}`}
            data-cursor="MAIL"
          >
            {t.talk}
            <ArrowUpRight size={14} />
          </a>

          <button
            className="v3-menu v10-menu"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? t.close : t.menu}
            aria-expanded={open}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="v3-mobile-panel"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
          >
            <div className="v3-mobile-panel-inner">
              <span className="v3-mobile-label">{t.menu}</span>

              {nav.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => jump(event, item.id)}
                >
                  <small>0{index + 1}</small>
                  <strong>{item.label}</strong>
                  <ArrowUpRight size={18} />
                </a>
              ))}

              <div className="v3-mobile-bottom">
                <button type="button" onClick={toggleLocale}>
                  <Globe2 size={15} />
                  {locale === "en" ? "العربية" : "English"}
                </button>

                <span>{portfolioData.personal.email}</span>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function GlobalTools() {
  const { locale, setLocale } = useLocale();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "KAREEM ENGINEERING CONSOLE v3.0",
    locale === "ar" ? "اكتب help لعرض الأوامر." : "Type help to list commands.",
  ]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((value) => !value);
      }

      if (event.key === "Escape") {
        setPaletteOpen(false);
        setTerminalOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setHistory((current) =>
      current.length <= 2
        ? [
            "KAREEM ENGINEERING CONSOLE v3.0",
            locale === "ar"
              ? "اكتب help لعرض الأوامر."
              : "Type help to list commands.",
          ]
        : current,
    );
  }, [locale]);

  const go = (id: string) => {
    setPaletteOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const commands = [
    ["work", locale === "ar" ? "المشاريع" : "Selected work", "work"],
    [
      "capabilities",
      locale === "ar" ? "القدرات" : "Capabilities",
      "capabilities",
    ],
    ["experience", locale === "ar" ? "الخبرة" : "Experience", "experience"],
    ["about", locale === "ar" ? "عني" : "About", "about"],
    ["contact", locale === "ar" ? "تواصل" : "Contact", "contact"],
  ] as const;

  const runTerminal = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const command = terminalInput.trim().toLowerCase();
    if (!command) return;

    const projectNames = portfolioData.projects
      .slice(0, 6)
      .map((project) => project.title)
      .join(" · ");

    const output: Record<string, string> = {
      help: "whoami · stack · projects · contact · clear",
      whoami:
        locale === "ar"
          ? "Kareem Hanafy — مهندس Web Full‑Stack يركز على React / Next.js / Node.js وهندسة المنتجات."
          : "Kareem Hanafy — Full-Stack Web Engineer focused on React, Next.js, Node.js and product engineering.",
      stack:
        "React · Next.js · TypeScript · Node.js · REST APIs · PostgreSQL · Supabase · Git · Vercel",
      projects: projectNames,
      contact: `${portfolioData.personal.email} · LinkedIn · GitHub`,
    };

    if (command === "clear") {
      setHistory([]);
    } else {
      setHistory((items) => [
        ...items,
        `> ${terminalInput}`,
        output[command] ??
          (locale === "ar"
            ? "أمر غير معروف. اكتب help."
            : "Unknown command. Type help."),
      ]);
    }

    setTerminalInput("");
  };

  return (
    <>
      <div className="v10-engineering-dock">
        <button
          className="v10-dock-engineer"
          type="button"
          onClick={() => setTerminalOpen(true)}
          data-cursor="CODE"
          aria-label={
            locale === "ar" ? "فتح وضع المهندس" : "Open Engineer Mode"
          }
        >
          <Code2 size={16} />
          <span>{locale === "ar" ? "وضع المهندس" : "ENGINEER MODE"}</span>
        </button>

        <i className="v10-dock-divider" aria-hidden="true" />

        <button
          className="v10-dock-command"
          type="button"
          onClick={() => setPaletteOpen(true)}
          data-cursor="COMMAND"
          aria-label={
            locale === "ar" ? "فتح لوحة الأوامر" : "Open Command Palette"
          }
        >
          <Command size={14} />
          <span>CTRL K</span>
        </button>
      </div>

      <AnimatePresence>
        {paletteOpen ? (
          <motion.div
            className="v4-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) =>
              event.target === event.currentTarget && setPaletteOpen(false)
            }
          >
            <motion.div
              className="v4-command-palette"
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
            >
              <div className="v4-command-head">
                <div>
                  <Command size={16} />
                  <span>
                    {locale === "ar"
                      ? "انتقل أو نفّذ أمرًا"
                      : "Navigate or run an action"}
                  </span>
                </div>
                <kbd>ESC</kbd>
              </div>

              <div className="v4-command-group">
                <small>{locale === "ar" ? "التنقل" : "NAVIGATE"}</small>

                {commands.map(([id, label]) => (
                  <button key={id} type="button" onClick={() => go(id)}>
                    <span>{label}</span>
                    <ArrowUpRight size={14} />
                  </button>
                ))}
              </div>

              <div className="v4-command-group">
                <small>{locale === "ar" ? "إجراءات" : "ACTIONS"}</small>

                <a
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>GitHub</span>
                  <Github size={14} />
                </a>

                <a
                  href={portfolioData.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>LinkedIn</span>
                  <Linkedin size={14} />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setLocale(locale === "en" ? "ar" : "en");
                    setPaletteOpen(false);
                  }}
                >
                  <span>
                    {locale === "ar"
                      ? "Switch to English"
                      : "التبديل إلى العربية"}
                  </span>
                  <Languages size={14} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {terminalOpen ? (
          <motion.div
            className="v4-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) =>
              event.target === event.currentTarget && setTerminalOpen(false)
            }
          >
            <motion.div
              className="v4-terminal"
              initial={{ opacity: 0, y: 22, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
            >
              <div className="v4-terminal-head">
                <div>
                  <i />
                  <i />
                  <i />
                </div>
                <span>kareem@portfolio: ~/engineer-mode</span>
                <button type="button" onClick={() => setTerminalOpen(false)}>
                  <X size={15} />
                </button>
              </div>

              <div className="v4-terminal-body">
                {history.map((line, index) => (
                  <p
                    key={`${line}-${index}`}
                    className={line.startsWith(">") ? "is-command" : ""}
                  >
                    {line}
                  </p>
                ))}
              </div>

              <form onSubmit={runTerminal} className="v4-terminal-input">
                <span>➜</span>
                <input
                  autoFocus
                  value={terminalInput}
                  onChange={(event) => setTerminalInput(event.target.value)}
                  aria-label="Engineer mode command"
                  placeholder="help"
                />
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const { locale } = useLocale();
  const t = getCopy(locale).hero;
  const reduceMotion = useReducedMotion();
  const visualRef = useRef<HTMLDivElement>(null);
  const [audience, setAudience] = useState<"recruiter" | "client">("recruiter");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-audience");
    if (saved === "client" || saved === "recruiter") setAudience(saved);
  }, []);

  const chooseAudience = (next: "recruiter" | "client") => {
    setAudience(next);
    window.localStorage.setItem("portfolio-audience", next);
  };

  const headline =
    locale === "ar"
      ? { first: "أبني منتجات ويب", second: "تحل مشاكل حقيقية." }
      : {
          first: "I engineer web products",
          second: "built for real problems.",
        };

  const audienceCopy =
    locale === "ar"
      ? audience === "client"
        ? {
            body: "أحوّل الفكرة إلى منتج ويب سريع، واضح، قابل للتوسع، ومصمم ليخدم أهداف البيزنس من أول تجربة المستخدم حتى الـBackend والإطلاق.",
            primary: "شاهد ما يمكنني بناءه",
          }
        : {
            body: "Full‑Stack Web Engineer أبني منتجات React وNext.js وNode.js بتركيز على المعمارية، جودة الواجهة، البيانات، الأداء، والتسليم للإنتاج.",
            primary: "استكشف أعمالي وخبرتي",
          }
      : audience === "client"
        ? {
            body: "I turn ideas into fast, scalable web products designed around real business goals—from the interface and backend flows to production delivery.",
            primary: "See what I can build",
          }
        : {
            body: "Full‑Stack Web Engineer building React, Next.js and Node.js products with strong architecture, polished interfaces, dependable data flows, and production delivery.",
            primary: "Explore my work",
          };

  const moveVisual = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !visualRef.current) return;
    const rect = visualRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    visualRef.current.style.setProperty("--rx", `${-y * 7}deg`);
    visualRef.current.style.setProperty("--ry", `${x * 9}deg`);
  };

  const resetVisual = () => {
    if (!visualRef.current) return;
    visualRef.current.style.setProperty("--rx", "0deg");
    visualRef.current.style.setProperty("--ry", "0deg");
  };

  return (
    <section id="hero" className="v3-hero v6-hero">
      <div className="v3-shell v3-hero-grid v6-hero-grid">
        <motion.div
          className="v3-hero-copy v6-hero-copy"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.08,
                delayChildren: 0.2,
              },
            },
          }}
        >
          <motion.div className="v6-hero-status-row" variants={fadeUp}>
            <div className="v3-eyebrow">
              <span className="v3-live-dot" />
              {t.eyebrow}
            </div>

            <div
              className="v4-audience-switch v6-audience-switch"
              aria-label={
                locale === "ar"
                  ? "تخصيص عرض البورتفوليو"
                  : "Portfolio audience mode"
              }
            >
              <button
                type="button"
                className={audience === "recruiter" ? "is-active" : ""}
                onClick={() => chooseAudience("recruiter")}
              >
                <UserRound size={12} />
                {locale === "ar" ? "توظيف" : "Recruiter"}
              </button>

              <button
                type="button"
                className={audience === "client" ? "is-active" : ""}
                onClick={() => chooseAudience("client")}
              >
                <UsersRound size={12} />
                {locale === "ar" ? "عميل" : "Client"}
              </button>
            </div>
          </motion.div>

          <div
            className="v3-hero-title v6-hero-title"
            aria-label={`${headline.first} ${headline.second}`}
          >
            <div>
              <motion.span variants={titleReveal}>{headline.first}</motion.span>
            </div>
            <div className="accent-line">
              <motion.span variants={titleReveal}>
                {headline.second}
              </motion.span>
            </div>
          </div>

          <motion.p
            key={`${locale}-${audience}`}
            className="v3-hero-body v6-hero-body"
            variants={fadeUp}
          >
            {audienceCopy.body}
          </motion.p>

          <motion.div
            className="v3-hero-actions v6-hero-actions"
            variants={fadeUp}
          >
            <a
              className="v3-button v3-button-primary"
              href="#work"
              data-cursor="VIEW"
            >
              {audienceCopy.primary}
              <ArrowDownRight size={16} />
            </a>

            <a
              className="v3-button v3-button-ghost"
              href={`mailto:${portfolioData.personal.email}`}
              data-cursor="MAIL"
            >
              {t.secondary}
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div className="v6-hero-proof" variants={fadeUp}>
            <div>
              <strong>
                {String(portfolioData.projects.length).padStart(2, "0")}
              </strong>
              <span>
                {locale === "ar" ? "أعمال مختارة" : "SELECTED BUILDS"}
              </span>
            </div>
            <div>
              <strong>{portfolioData.testimonials.length} × 5★</strong>
              <span>
                {locale === "ar" ? "تقييمات عملاء" : "CLIENT REVIEWS"}
              </span>
            </div>
            <div>
              <strong>AR / EN</strong>
              <span>
                {locale === "ar" ? "تجربة ثنائية اللغة" : "BILINGUAL UX"}
              </span>
            </div>
          </motion.div>

          <motion.div className="v3-hero-meta v6-hero-meta" variants={fadeUp}>
            <span>
              <i />
              {t.status}
            </span>
            <span>{t.stack}</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="v3-hero-visual-wrap v6-hero-visual-wrap"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, x: 32 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.34,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div
            ref={visualRef}
            onMouseMove={moveVisual}
            onMouseLeave={resetVisual}
            className="v3-engineering-object v6-engineering-object"
            data-cursor="MOVE"
          >
            <div className="v3-object-stage">
              <div className="v3-object-ring ring-one" />
              <div className="v3-object-ring ring-two" />
              <div className="v3-object-ring ring-three" />

              <div className="v4-system-core">
                <div className="v4-core-halo" />
                <div className="v4-core-center">
                  <Code2 size={28} />
                  <span>KAREEM</span>
                  <strong>ENGINE</strong>
                  <small>WEB / SYSTEMS</small>
                </div>

                <span className="v4-core-node node-react">REACT</span>
                <span className="v4-core-node node-next">NEXT.JS</span>
                <span className="v4-core-node node-node">NODE.JS</span>
                <span className="v4-core-node node-api">REST API</span>
                <span className="v4-core-node node-data">POSTGRES</span>
                <span className="v4-core-node node-ui">UI SYSTEM</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="v3-hero-scroll v6-hero-scroll">
        <span>{t.scroll}</span>
        <ArrowDownRight size={15} />
      </div>
    </section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};
const titleReveal = {
  hidden: { y: "115%" },
  show: {
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function SectionIntro({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });
  const reduceMotion = useReducedMotion();
  return (
    <div ref={ref} className="v3-section-intro">
      <motion.span
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      >
        {kicker}
      </motion.span>
      <div>
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {title}
        </motion.h2>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}

function Work() {
  const { locale } = useLocale();
  const t = getCopy(locale).work;
  const featured = portfolioData.projects.filter((project) => project.featured);
  const supporting = portfolioData.projects.filter(
    (project) => !project.featured,
  );

  return (
    <section id="work" className="v3-section v3-work">
      <div className="v3-shell">
        <SectionIntro
          kicker={t.kicker}
          title={t.title}
          description={t.description}
        />
        <div className="v3-featured-list">
          {featured.map((project, index) => (
            <FeaturedProject key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="v3-more-head">
          <span>{t.more}</span>
          <i />
        </div>
        <div className="v3-project-grid">
          {supporting.map((project, index) => (
            <CompactProject key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  const { locale } = useLocale();
  const t = getCopy(locale).work;
  const p = localProject(project, locale);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      ref={ref}
      className={`v3-featured ${index % 2 ? "is-reverse" : ""}`}
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75 }}
    >
      <ProjectPreview project={project} index={index} />
      <div className="v3-featured-copy">
        <div className="v5-project-chapter">
          <span>{locale === "ar" ? "مشروع مميز" : "FEATURED PROJECT"}</span>
          <strong>0{index + 1}</strong>
        </div>
        <div className="v3-project-topline">
          <span>{p.category}</span>
          <span>{p.status}</span>
        </div>
        <h3>
          <a href={`/work/${project.id}`}>{project.title}</a>
        </h3>
        <p className="v3-project-lead">{p.description}</p>
        <div className="v4-story-steps">
          <article>
            <span>01</span>
            <div>
              <small>{t.role}</small>
              <p>{p.role}</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <small>{t.challenge}</small>
              <p>{p.challenge}</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <small>{t.outcome}</small>
              <p>{p.outcome}</p>
            </div>
          </article>
        </div>
        <div className="v3-tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

function ProjectPreview({
  project,
  index,
  compact = false,
}: {
  project: PortfolioProject;
  index: number;
  compact?: boolean;
}) {
  const { locale } = useLocale();
  const p = localProject(project, locale);
  const [imageFailed, setImageFailed] = useState(false);
  const accent = ["a", "b", "c", "d", "e", "f", "g"][index % 7];

  return (
    <a
      href={`/work/${project.id}`}
      className={`v3-project-preview v5-project-preview-link accent-${accent} ${compact ? "is-compact" : ""}`}
      data-cursor="VIEW"
      aria-label={
        locale === "ar"
          ? `فتح دراسة حالة ${project.title}`
          : `Open ${project.title} case study`
      }
    >
      <div className="v3-browser-bar">
        <div>
          <i />
          <i />
          <i />
        </div>
        <span>{project.id}.product</span>
        <small>CASE</small>
      </div>
      <div className="v3-preview-canvas">
        <div className="v3-preview-sidebar">
          <strong>{project.title.slice(0, 2).toUpperCase()}</strong>
          {Array.from({ length: 5 }).map((_, i) => (
            <i key={i} />
          ))}
        </div>
        <div className="v3-preview-main">
          <div className="v3-preview-nav">
            <i />
            <i />
            <i />
            <span />
          </div>
          <div className="v3-preview-hero">
            <div>
              <span>{p.category}</span>
              <strong>{project.title}</strong>
              <p>{project.tags.slice(0, 3).join(" · ")}</p>
            </div>
            <div className="v3-preview-orb">
              <i />
              <i />
            </div>
          </div>
          <div className="v3-preview-cards">
            <i />
            <i />
            <i />
          </div>
        </div>
        {!imageFailed ? (
          <div className="v3-project-real-image">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              sizes={
                compact
                  ? "(max-width: 900px) 100vw, 50vw"
                  : "(max-width: 900px) 100vw, 55vw"
              }
              priority={index === 0 && !compact}
              onError={() => setImageFailed(true)}
            />
            <div className="v3-project-real-overlay">
              <span>{p.category}</span>
              <strong>{project.title}</strong>
            </div>
          </div>
        ) : null}
      </div>
      <span className="v3-preview-index">0{index + 1}</span>
    </a>
  );
}

function CompactProject({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  const { locale } = useLocale();
  const p = localProject(project, locale);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      ref={ref}
      className="v3-compact-project"
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: reduceMotion ? 0 : index * 0.05 }}
    >
      <ProjectPreview project={project} index={index + 3} compact />
      <div className="v3-compact-body">
        <div className="v3-project-topline">
          <span>{p.category}</span>
          <span>{p.status}</span>
        </div>
        <h3>
          <a href={`/work/${project.id}`}>{project.title}</a>
        </h3>
        <p>{p.description}</p>
        <div className="v3-tag-row compact">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <ProjectLinks project={project} compact />
      </div>
    </motion.article>
  );
}

function ProjectLinks({
  project,
  compact = false,
}: {
  project: PortfolioProject;
  compact?: boolean;
}) {
  const { locale } = useLocale();
  if (!project.links.length) return null;
  const caseLabel = locale === "ar" ? "دراسة الحالة" : "Case study";
  return (
    <div
      className={`v3-project-links v5-icon-links ${compact ? "compact" : ""}`}
    >
      <a
        href={`/work/${project.id}`}
        data-cursor="VIEW"
        title={caseLabel}
        aria-label={`${caseLabel}: ${project.title}`}
        data-tooltip={caseLabel}
      >
        <Code2 size={17} />
      </a>
      {project.links.map((link) => (
        <a
          key={`${project.id}-${link.href}`}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          data-cursor="OPEN"
          title={link.label}
          aria-label={link.label}
          data-tooltip={link.label}
        >
          {linkIcon(link.kind)}
        </a>
      ))}
    </div>
  );
}

function linkIcon(kind: ProjectLinkKind) {
  if (kind === "github") return <Github size={15} />;
  return <ExternalLink size={15} />;
}

function Capabilities() {
  const { locale } = useLocale();
  const t = getCopy(locale).capabilities;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [activeCapability, setActiveCapability] = useState(0);

  const sectionTitle =
    locale === "ar"
      ? "عين Frontend، وعقلية Full‑Stack."
      : "Frontend eye. Full‑Stack mindset.";

  const sectionDescription =
    locale === "ar"
      ? "أهتم بتجربة المستخدم بقدر اهتمامي بالـ APIs والبيانات والصلاحيات والأداء والتسليم للإنتاج."
      : "I care about the interface as much as the APIs, data, permissions, performance, and production delivery behind it.";

  const layerLabels =
    locale === "ar"
      ? ["الواجهة", "التطبيق", "API", "البيانات", "التسليم"]
      : ["INTERFACE", "APPLICATION", "API", "DATA", "DELIVERY"];

  const statusLines =
    locale === "ar"
      ? [
          "تجربة Responsive",
          "تدفقات API واضحة",
          "بيانات موثوقة",
          "جاهز للإنتاج",
        ]
      : [
          "Responsive experience",
          "Clear API flows",
          "Reliable data",
          "Production ready",
        ];

  const isLayerActive = (layerIndex: number) => {
    if (activeCapability === 0) return layerIndex <= 1;
    if (activeCapability === 1) return layerIndex >= 1 && layerIndex <= 3;
    return layerIndex === 4;
  };

  return (
    <section id="capabilities" className="v3-section v6-capabilities">
      <div className="v3-shell">
        <SectionIntro
          kicker={t.kicker}
          title={sectionTitle}
          description={sectionDescription}
        />

        <div
          ref={ref}
          className="v3-capabilities-layout v6-capabilities-layout"
        >
          <div className="v3-capability-cards v6-capability-cards">
            {t.pillars.map((pillar, index) => (
              <motion.article
                key={pillar.n}
                className={activeCapability === index ? "is-active" : ""}
                tabIndex={0}
                onMouseEnter={() => setActiveCapability(index)}
                onFocus={() => setActiveCapability(index)}
                initial={reduceMotion ? false : { opacity: 0, x: -28 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <span className="v6-capability-number">{pillar.n}</span>

                <div className="v6-capability-heading">
                  <small>
                    {index === 0
                      ? locale === "ar"
                        ? "PRODUCT FRONTEND"
                        : "PRODUCT FRONTEND"
                      : index === 1
                        ? locale === "ar"
                          ? "BACKEND & DATA"
                          : "BACKEND & DATA"
                        : locale === "ar"
                          ? "PRODUCT DELIVERY"
                          : "PRODUCT DELIVERY"}
                  </small>
                  <h3>{pillar.title}</h3>
                </div>

                <div className="v6-capability-content">
                  <p>{pillar.text}</p>
                  <div className="v6-capability-tags">
                    {pillar.tags.slice(0, 4).map((tag) => (
                      <small key={tag}>{tag}</small>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.aside
            className="v3-console v6-architecture-console"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.14 }}
          >
            <div className="v3-console-head v6-console-head">
              <span>
                {locale === "ar" ? "معمارية المنتج" : "PRODUCT ARCHITECTURE"}
              </span>
              <div>
                <i />
                <i />
                <i />
              </div>
            </div>

            <div className="v3-console-command v6-console-command">
              <span>$</span>
              ship --clear --reliable --production-ready
            </div>

            <div
              className="v6-layer-stack"
              aria-label={locale === "ar" ? "طبقات المنتج" : "Product layers"}
            >
              {layerLabels.map((label, index) => (
                <div
                  key={label}
                  className={`v6-layer ${isLayerActive(index) ? "is-active" : ""}`}
                >
                  <span>0{index + 1}</span>
                  <strong>{label}</strong>
                  {index < layerLabels.length - 1 ? <i /> : null}
                </div>
              ))}
            </div>

            <div className="v6-system-status">
              <div className="v6-system-status-head">
                <span>{locale === "ar" ? "حالة النظام" : "SYSTEM STATUS"}</span>
                <strong>READY</strong>
              </div>

              {statusLines.map((line, index) => (
                <p key={line}>
                  <span>0{index + 1}</span>
                  {line}
                  <Check size={13} />
                </p>
              ))}
            </div>

            <div className="v3-console-stack v6-console-stack">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const { locale } = useLocale();
  const steps =
    locale === "ar"
      ? [
          [
            "01",
            "اكتشاف",
            "أفهم المستخدم والهدف التجاري والمتطلبات والقيود قبل كتابة الكود.",
          ],
          [
            "02",
            "معمارية",
            "أحوّل المتطلبات إلى تدفقات واضحة، مكونات، APIs، بيانات وصلاحيات قابلة للتوسع.",
          ],
          [
            "03",
            "بناء",
            "أنفذ الواجهة والنظام مع حالات حقيقية وResponsive وتجربة RTL/LTR عند الحاجة.",
          ],
          [
            "04",
            "إطلاق",
            "أراجع الأداء والجودة والـSEO والحالات الطرفية ثم أنشر وأسلم المنتج بشكل منظم.",
          ],
        ]
      : [
          [
            "01",
            "Discover",
            "Understand the user, business goal, requirements, constraints, and risk before code starts.",
          ],
          [
            "02",
            "Architect",
            "Turn requirements into clear flows, components, APIs, data models, and scalable permissions.",
          ],
          [
            "03",
            "Build",
            "Engineer the interface and system around real states, responsive behavior, and multilingual UX when needed.",
          ],
          [
            "04",
            "Ship",
            "Verify quality, performance, SEO, edge cases, deployment, and a clean production handoff.",
          ],
        ];

  return (
    <section
      className="v3-section v4-process v11-process"
      aria-labelledby="process-title"
    >
      <div className="v3-shell">
        <div className="v11-process-intro">
          <span>
            {locale === "ar"
              ? "PROCESS / طريقة العمل"
              : "PROCESS / HOW I BUILD"}
          </span>
          <div>
            <h2 id="process-title">
              {locale === "ar"
                ? "من فكرة غير مرتبة إلى منتج يمكن الاعتماد عليه."
                : "From an unclear idea to a product people can rely on."}
            </h2>
            <p>
              {locale === "ar"
                ? "الهدف مش تسليم صفحات؛ الهدف بناء منتج مفهوم، قابل للصيانة، وجاهز للبيزنس الحقيقي."
                : "The goal is not to ship pages. It is to ship a product that is understandable, maintainable, and ready for real business."}
            </p>
          </div>
        </div>

        <div className="v4-process-grid v11-process-grid">
          {steps.map(([n, title, body]) => (
            <article key={n}>
              <span>{n}</span>
              <div className="v4-process-icon v11-process-icon">
                {n === "01" ? (
                  <Sparkles size={16} />
                ) : n === "02" ? (
                  <Cpu size={16} />
                ) : n === "03" ? (
                  <Code2 size={16} />
                ) : (
                  <Server size={16} />
                )}
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>

        <div className="v4-stack-architecture v11-stack-architecture">
          <span>{locale === "ar" ? "طبقات المنتج" : "PRODUCT LAYERS"}</span>
          <div>
            <strong>INTERFACE</strong>
            <i />
            <strong>APPLICATION</strong>
            <i />
            <strong>API</strong>
            <i />
            <strong>DATA</strong>
            <i />
            <strong>DELIVERY</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const { locale } = useLocale();
  const t = getCopy(locale).experience;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  const reviewCount = portfolioData.testimonials.length;
  const averageScore =
    portfolioData.testimonials.reduce((sum, review) => sum + review.score, 0) /
    Math.max(reviewCount, 1);

  const title =
    locale === "ar"
      ? "خبرة عملية في تسليم منتجات ويب حقيقية."
      : "Hands-on experience shipping real web products.";

  const description =
    locale === "ar"
      ? "من بناء منتجات كاملة من الصفر إلى تطوير منصات قائمة، مع مسؤولية مباشرة عن الواجهة، الـ APIs، البيانات، التعديلات، الاختبارات والإطلاق."
      : "From building products from scratch to improving existing platforms, with direct ownership across interfaces, APIs, data, revisions, testing, and production delivery.";

  const reviewTitle =
    locale === "ar"
      ? `${reviewCount} تقييمات كاملة من عملاء حقيقيين`
      : `${reviewCount} complete five-star client reviews`;

  const reviewBody =
    locale === "ar"
      ? "احترافية في التنفيذ، سرعة في التعديلات، اهتمام بالتفاصيل، وتواصل موثوق حتى التسليم."
      : "Professional delivery, fast revisions, attention to detail, and dependable communication through final handoff.";

  const proofTitles =
    locale === "ar"
      ? [
          "منتجات عملاء من البداية للنهاية",
          "ملكية Frontend لمنصة كبيرة",
          "تحديث منتجات قائمة",
        ]
      : portfolioData.experience.proof.map((item) => item.title);

  return (
    <section id="experience" className="v3-section v3-experience v7-experience">
      <div className="v3-shell">
        <SectionIntro
          kicker={locale === "ar" ? "03 / الخبرة" : "03 / EXPERIENCE"}
          title={title}
          description={description}
        />

        <div ref={ref} className="v3-experience-grid v7-experience-grid">
          <motion.article
            className="v3-experience-main v7-experience-main"
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="v3-experience-top v7-experience-top">
              <span>{t.period}</span>
              <i>ACTIVE</i>
            </div>

            <div className="v7-role-block">
              <span className="v7-role-label">
                {locale === "ar" ? "الدور الحالي" : "CURRENT ROLE"}
              </span>
              <h3>{t.current}</h3>
              <p className="v3-experience-context">{t.context}</p>
            </div>

            <p className="v3-experience-body v7-experience-body">{t.body}</p>

            <div className="v3-metrics v7-metrics">
              {t.metrics.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            className="v3-feedback-card v7-feedback-card"
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="v3-feedback-top v7-feedback-top">
              <span>{locale === "ar" ? "دليل العملاء" : "CLIENT PROOF"}</span>
              <strong>{averageScore.toFixed(1)} / 5</strong>
            </div>

            <div className="v7-feedback-content">
              <div
                className="v4-feedback-stars v7-feedback-stars"
                aria-label={`${averageScore.toFixed(1)} out of 5 stars`}
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>

              <strong className="v7-review-count">{reviewTitle}</strong>
              <p>{reviewBody}</p>
            </div>

            <div className="v7-feedback-author">
              <strong>Kareem Hanafy</strong>
              <span>
                {locale === "ar"
                  ? "مشاريع عملاء مستقلة"
                  : "Independent client delivery"}
              </span>
            </div>
          </motion.article>
        </div>

        <div className="v3-proof-strip v7-proof-strip">
          {portfolioData.experience.proof.map((proof, index) => (
            <div key={proof.title}>
              <span>0{index + 1}</span>
              <strong>{proofTitles[index]}</strong>
              <small>{proof.projects}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { locale } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  const reduceMotion = useReducedMotion();

  const reviews = portfolioData.testimonials;
  const reviewCount = reviews.length;
  const averageScore =
    reviews.reduce((sum, review) => sum + review.score, 0) /
    Math.max(reviewCount, 1);

  return (
    <section
      className="v3-section v4-testimonials v8-testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="v3-shell">
        <div className="v8-testimonials-head">
          <div className="v8-testimonials-heading">
            <span>{locale === "ar" ? "آراء العملاء" : "CLIENT PROOF"}</span>
            <h2 id="testimonials-title">
              {locale === "ar"
                ? "ثقة مبنية على شغل تم تسليمه."
                : "Trust earned through delivered work."}
            </h2>
          </div>

          <div className="v8-testimonials-summary">
            <div>
              <strong>{reviewCount}</strong>
              <span>
                {locale === "ar" ? "تقييمات موثقة" : "CLIENT REVIEWS"}
              </span>
            </div>

            <i />

            <div>
              <strong>{averageScore.toFixed(1)}</strong>
              <span>
                {locale === "ar" ? "متوسط التقييم" : "AVERAGE RATING"}
              </span>
            </div>

            <div
              className="v8-summary-stars"
              aria-label={`${averageScore.toFixed(1)} out of 5 stars`}
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={12} fill="currentColor" />
              ))}
            </div>
          </div>
        </div>

        <div ref={ref} className="v8-testimonials-grid">
          {reviews.map((review, index) => (
            <motion.article
              key={`${review.author}-${index}`}
              className="v8-testimonial-card"
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: reduceMotion ? 0 : index * 0.06,
              }}
            >
              <div className="v8-testimonial-top">
                <span>0{index + 1}</span>

                <div
                  className="v8-testimonial-stars"
                  aria-label={`${review.score} out of 5 stars`}
                >
                  {Array.from({ length: review.score }).map((_, starIndex) => (
                    <Star key={starIndex} size={12} fill="currentColor" />
                  ))}
                </div>

                <strong>{review.score}.0</strong>
              </div>

              <blockquote dir={locale === "ar" ? "rtl" : "ltr"}>
                “{locale === "ar" ? review.quoteAr : review.quoteEn}”
              </blockquote>

              <div className="v8-testimonial-meta">
                <div>
                  <strong>{review.author}</strong>
                  <span>{locale === "ar" ? "عميل" : "CLIENT"}</span>
                </div>

                <p>{locale === "ar" ? review.projectAr : review.projectEn}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const { locale } = useLocale();
  const t = getCopy(locale).about;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  const title =
    locale === "ar"
      ? "أبني الواجهة، وأفهم النظام وراءها."
      : "I build the interface—and understand the system behind it.";

  const description =
    locale === "ar"
      ? "بدأت من الـFrontend وتوسعت إلى Full‑Stack لأن المنتج القوي يحتاج تجربة واضحة ونظامًا موثوقًا خلفها."
      : "I started in frontend and expanded into full-stack because strong products need both a clear interface and a reliable system behind it.";

  const lead =
    locale === "ar"
      ? "تركيزي الأساسي هو الويب: منتجات متجاوبة، متاجر إلكترونية، Dashboards، منصات متعددة اللغات، APIs، وأنظمة Backend تدعم تجربة المنتج كاملة."
      : "My core focus is the web: responsive products, e-commerce, dashboards, multilingual platforms, APIs, and backend systems that support the complete product experience.";

  const method =
    locale === "ar"
      ? "أفهم المشكلة → أبسّط التدفق → أبني النظام → أختبر الحالات الحقيقية → أسلّم بشكل منظم."
      : "Understand the problem → simplify the flow → engineer the system → test real states → deliver cleanly.";

  return (
    <section id="about" className="v3-section v9-about">
      <div className="v3-shell">
        <SectionIntro
          kicker={locale === "ar" ? "04 / عني" : "04 / ABOUT"}
          title={title}
          description={description}
        />

        <div ref={ref} className="v3-about-layout v9-about-layout">
          <motion.div
            className="v3-about-copy v9-about-copy"
            initial={reduceMotion ? false : { opacity: 0, x: 26 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="v9-about-lead">{lead}</p>
            <p className="v9-about-method">{method}</p>

            <div className="v3-principles v9-principles">
              {t.principles.map(([n, principleTitle, text]) => (
                <article key={principleTitle}>
                  <span>{n}</span>
                  <strong>{principleTitle}</strong>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="v3-about-links v9-about-links">
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor="OPEN"
              >
                <Linkedin size={14} />
                LinkedIn
                <ArrowUpRight size={12} />
              </a>

              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="OPEN"
              >
                <Github size={14} />
                GitHub
                <ArrowUpRight size={12} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="v3-about-art v9-about-art"
            initial={reduceMotion ? false : { opacity: 0, x: -26 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <div className="v3-profile-frame v9-profile-frame">
              <div className="v5-profile-status v9-profile-status">
                <i />
                {locale === "ar"
                  ? "متاح لفرص مختارة"
                  : "OPEN TO SELECT OPPORTUNITIES"}
              </div>

              <div className="v9-id-index">KH / 2026</div>

              <div className="v9-profile-photo-wrap">
                <Image
                  src="/profile/kareem-portrait.png"
                  alt="Kareem Hanafy"
                  fill
                  sizes="(max-width: 900px) 90vw, 420px"
                  className="v9-profile-photo"
                  priority={false}
                />
              </div>

              <div
                className="v5-profile-stack v9-profile-stack"
                aria-hidden="true"
              >
                <span>REACT</span>
                <span>NEXT.JS</span>
                <span>NODE.JS</span>
                <span>TYPESCRIPT</span>
              </div>

              <div className="v3-profile-scan v9-profile-scan" />
              <div className="v3-profile-corners">
                <i />
                <i />
                <i />
                <i />
              </div>

              <div className="v9-profile-footer">
                <div>
                  <span>FULL‑STACK</span>
                  <strong>WEB ENGINEER</strong>
                </div>

                <div>
                  <span>{locale === "ar" ? "الموقع" : "LOCATION"}</span>
                  <strong>{t.location}</strong>
                </div>
              </div>
            </div>

            <div className="v3-about-signature v9-about-signature">
              <span>Kareem Hanafy</span>
              <span>® 2026</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type SubmitStatus = "idle" | "sending" | "sent" | "error";
function Contact() {
  const { locale } = useLocale();
  const t = getCopy(locale).contact;
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current || status === "sending") return;

    const formData = new FormData(formRef.current);
    if (formData.get("company_website")) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      formRef.current.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="v3-section v3-contact v11-contact">
      <div className="v3-shell">
        <div className="v3-contact-panel v11-contact-panel">
          <div className="v3-contact-copy v11-contact-copy">
            <span className="v3-contact-kicker">{t.kicker}</span>
            <h2>{t.title}</h2>
            <p>{t.body}</p>

            <a
              className="v3-contact-email v11-contact-email"
              href={`mailto:${portfolioData.personal.email}`}
              data-cursor="MAIL"
              dir="ltr"
            >
              {portfolioData.personal.email}
              <ArrowUpRight size={17} />
            </a>

            <div className="v3-contact-socials v11-contact-socials">
              <Social
                href={portfolioData.social.linkedin}
                icon={<Linkedin size={14} />}
              >
                LinkedIn
              </Social>
              <Social
                href={portfolioData.social.github}
                icon={<Github size={14} />}
              >
                GitHub
              </Social>
              <Social
                href={`mailto:${portfolioData.personal.email}`}
                icon={<Mail size={14} />}
              >
                Email
              </Social>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="v3-contact-form v11-contact-form"
            aria-busy={status === "sending"}
          >
            <div className="v3-form-head v11-form-head">
              <span>{t.brief}</span>
              <small>{t.reply}</small>
            </div>

            <input
              className="v3-honeypot"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="v3-form-row">
              <FormField
                label={t.name}
                name="from_name"
                type="text"
                placeholder={t.namePh}
              />
              <FormField
                label={t.email}
                name="from_email"
                type="email"
                placeholder="you@company.com"
              />
            </div>

            <label className="v3-field">
              <span>{t.details}</span>
              <textarea
                name="message"
                rows={5}
                required
                maxLength={3000}
                placeholder={t.detailsPh}
              />
            </label>

            <button
              className="v3-submit v11-submit"
              disabled={status === "sending"}
              type="submit"
              data-cursor="SEND"
            >
              <span>{status === "sending" ? t.sending : t.send}</span>
              <Send size={15} />
            </button>

            <p
              id="contact-form-status"
              className={`v3-form-status is-${status}`}
              aria-live="polite"
            >
              {status === "sent" ? t.sent : status === "error" ? t.error : ""}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: "text" | "email";
  placeholder: string;
}) {
  return (
    <label className="v3-field">
      <span>{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        autoComplete={type === "email" ? "email" : "name"}
      />
    </label>
  );
}
function Social({
  href,
  icon,
  children,
}: {
  href: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {icon}
      {children}
      <ArrowUpRight size={12} />
    </a>
  );
}

function SiteFooter() {
  const { locale } = useLocale();
  const t = getCopy(locale).footer;
  const year = new Date().getFullYear();

  return (
    <footer className="v3-footer v10-footer">
      <div className="v3-shell v3-footer-inner v10-footer-inner">
        <a
          href="#hero"
          className="v3-footer-brand v10-footer-brand"
          dir="ltr"
          aria-label="Kareem Hanafy — Back to top"
        >
          KAREEM HANAFY<span aria-hidden="true">.</span>
        </a>

        <p>
          © {year} — {t.line}
        </p>

        <a href="#hero" className="v10-footer-top">
          {t.top}
          <ArrowUpRight size={12} />
        </a>
      </div>
    </footer>
  );
}
