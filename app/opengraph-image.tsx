import { ImageResponse } from "next/og";

export const alt = "Kareem Mohamed Hanafy — Full-Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#07080b",
          color: "#f4f5f7",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.18,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.13) 1px, transparent 1px)",
            backgroundSize: "62px 62px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -210,
            right: -100,
            width: 650,
            height: 650,
            borderRadius: 999,
            background: "rgba(79,126,255,.25)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 82,
            top: 82,
            display: "flex",
            width: 350,
            height: 350,
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(120,166,255,.22)",
            borderRadius: 999,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 210,
              height: 210,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "1px dashed rgba(120,166,255,.34)",
              borderRadius: 999,
              background: "rgba(120,166,255,.06)",
            }}
          >
            <span style={{ fontSize: 18, letterSpacing: 5, color: "#78a6ff" }}>WEB</span>
            <strong style={{ marginTop: 7, fontSize: 31 }}>PRODUCT</strong>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            padding: "62px 70px",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 22, fontWeight: 700 }}>
            <span>Kareem Hanafy</span>
            <span style={{ color: "#78a6ff" }}>.</span>
          </div>

          <div style={{ display: "flex", maxWidth: 760, flexDirection: "column" }}>
            <span style={{ color: "#78a6ff", fontSize: 19, letterSpacing: 5, textTransform: "uppercase" }}>
              Full-Stack Web Developer
            </span>
            <div style={{ marginTop: 22, fontSize: 61, lineHeight: 1.02, fontWeight: 700, letterSpacing: -3.2 }}>
              Web products that are clear, reliable, and ready for real business.
            </div>
          </div>

          <div style={{ display: "flex", gap: 24, color: "rgba(244,245,247,.58)", fontSize: 18 }}>
            <span>React &amp; Next.js</span>
            <span>TypeScript &amp; APIs</span>
            <span>PostgreSQL</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
