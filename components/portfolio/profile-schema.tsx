import { site, homePath, type Locale } from "@/data/site";

export function ProfileSchema({ locale }: { locale: Locale }) {
  const isArabic = locale === "ar";
  const pageUrl = site.url + homePath(locale);

  const socialProfiles = Object.values(site.social).filter(
    (value) =>
      value.startsWith("https://") || value.startsWith("http://"),
  );

  const person = {
    "@type": "Person",
    "@id": `${site.url}/#person`,

    name: site.fullName,

    alternateName: [
      "Kareem Hanafy",
      "Kareem Mohamed",
      "Karim Hanafy",
      "Kaghim",
      "kaghim_0",
      "كريم محمد حنفي",
      "كريم محمد",
      "كريم حنفي",
    ],

    url: site.url,

    image: {
      "@type": "ImageObject",
      url: site.url + site.portrait,
    },

    jobTitle: "Full-Stack Web Developer",

    description: isArabic
      ? "كريم محمد حنفي مطور ويب Full-Stack من مصر، يعمل على تطبيقات الويب والمتاجر الإلكترونية والمنصات والمنتجات الرقمية."
      : "Kareem Mohamed Hanafy is a Full-Stack Web Developer based in Egypt, building web applications, e-commerce platforms, business systems, and digital products.",

    sameAs: socialProfiles,

    knowsAbout: [
      "Full-Stack Web Development",
      "Frontend Development",
      "Backend Development",
      "Web Applications",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "PHP",
      "REST APIs",
      "Authentication",
      "Responsive Web Design",
      "Progressive Web Apps",
      "E-commerce",
      "Multilingual Websites",
    ],
  };

  const data = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",

    "@id": `${pageUrl}#profilepage`,
    url: pageUrl,

    name: isArabic
      ? "كريم محمد حنفي | مطور ويب Full-Stack"
      : "Kareem Mohamed Hanafy | Full-Stack Web Developer",

    description: isArabic
      ? "الصفحة الشخصية والمهنية لكريم محمد حنفي، مطور ويب Full-Stack من مصر."
      : "The professional portfolio and profile of Kareem Mohamed Hanafy, a Full-Stack Web Developer based in Egypt.",

    inLanguage: isArabic ? "ar-EG" : "en",

    mainEntity: person,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}