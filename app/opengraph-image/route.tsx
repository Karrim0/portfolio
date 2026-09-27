import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const dynamic = "force-static";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };
export const alt = "Kareem Mohamed Hanafy — Full-Stack Web Developer";

export function GET() {
  const portrait = `${site.url}${site.portrait}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "48px 56px",
        background: "#0c0f10",
        color: "#eff2e8",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 18,
          color: "#b9c0b2",
          letterSpacing: 0.4,
        }}
      >
        <span>@kaghim_0</span>
        <span>FULL-STACK WEB DEVELOPER / EGYPT</span>
      </div>

      <div
        style={{
          display: "flex",
          gap: 42,
          alignItems: "center",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            maxWidth: 700,
          }}
        >
          <span
            style={{
              fontSize: 24,
              color: "#d3ff80",
              marginBottom: 14,
              letterSpacing: 1,
            }}
          >
            KAREEM MOHAMED HANAFY
          </span>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 74,
              lineHeight: 0.98,
              letterSpacing: -3.5,
              fontWeight: 800,
              marginBottom: 18,
            }}
          >
            <span style={{ display: "flex" }}>FULL-STACK</span>
            <span style={{ display: "flex", color: "#d3ff80" }}>
              WEB DEVELOPER.
            </span>
          </div>

          <p
            style={{
              fontSize: 28,
              lineHeight: 1.35,
              color: "#d5dbcf",
              margin: 0,
              maxWidth: 650,
            }}
          >
            Building web applications, e-commerce platforms, real-estate
            systems, multilingual products, APIs, and admin tools.
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 24,
              flexWrap: "wrap",
            }}
          >
            {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"].map(
              (item) => (
                <span
                  key={item}
                  style={{
                    display: "flex",
                    padding: "10px 14px",
                    border: "1px solid #2a3132",
                    borderRadius: 999,
                    fontSize: 18,
                    color: "#eff2e8",
                    background: "#14191a",
                  }}
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        <div
          style={{
            width: 280,
            height: 360,
            borderRadius: 28,
            overflow: "hidden",
            border: "1px solid #2a3132",
            background: "#161b1c",
            display: "flex",
            flexShrink: 0,
          }}
        >
          <img
            src={portrait}
            width="280"
            height="360"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "50% 28%",
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #283031",
          paddingTop: 22,
          fontSize: 20,
          color: "#c9d0c3",
        }}
      >
        <span>Portfolio · Case Studies · Contact</span>
        <span>kaghim.vercel.app ↗</span>
      </div>
    </div>,
    size,
  );
}