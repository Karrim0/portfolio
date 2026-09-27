import { ImageResponse } from "next/og";
import { projects, site } from "@/data/site";

export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const project = projects("en").find((item) => item.id === slug);

  if (!project) {
    return new Response("Project not found", { status: 404 });
  }

  const cover = `${site.url}${project.cover.src}`;
  const tags = project.tags.slice(0, 4).join(" · ");

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "46px 52px",
        background: "#0c0f10",
        color: "#f4f6ef",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 18,
          color: "#bcc4b6",
        }}
      >
        <span>KAREEM MOHAMED HANAFY</span>
        <span>SELECTED WORK / CASE STUDY</span>
      </div>

      <div
        style={{
          display: "flex",
          gap: 34,
          alignItems: "stretch",
          flex: 1,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            maxWidth: 560,
          }}
        >
          <span
            style={{
              display: "flex",
              width: "fit-content",
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid #2b3334",
              background: "#14191a",
              color: "#d3ff80",
              fontSize: 18,
              marginBottom: 16,
            }}
          >
            {project.category}
          </span>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 64,
              lineHeight: 1.02,
              letterSpacing: -2.5,
              fontWeight: 800,
              marginBottom: 14,
            }}
          >
            <span style={{ display: "flex" }}>{project.title}</span>
          </div>

          <p
            style={{
              fontSize: 24,
              lineHeight: 1.35,
              color: "#d7ddd2",
              margin: 0,
            }}
          >
            {project.description}
          </p>

          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 20,
              color: "#bfc6ba",
            }}
          >
            {tags}
          </div>
        </div>

        <div
          style={{
            width: 470,
            borderRadius: 28,
            overflow: "hidden",
            border: "1px solid #2b3334",
            background: "#161b1c",
            display: "flex",
            flexShrink: 0,
          }}
        >
          <img
            src={cover}
            width="470"
            height="320"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
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
          paddingTop: 20,
          fontSize: 20,
          color: "#c9d0c3",
        }}
      >
        <span>Full-Stack Web Developer</span>
        <span>@kaghim_0 ↗</span>
      </div>
    </div>,
    size,
  );
}