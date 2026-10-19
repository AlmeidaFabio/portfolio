import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = site.name + " — " + site.role;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [instrumentSerif, geistRegular, geistMedium] = await Promise.all([
    readFile(join(process.cwd(), "src/app/_fonts/InstrumentSerif-Italic.ttf")),
    readFile(join(process.cwd(), "src/app/_fonts/Geist-Regular.ttf")),
    readFile(join(process.cwd(), "src/app/_fonts/Geist-Medium.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07070a",
          padding: "72px",
          position: "relative",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "-180px",
            width: "620px",
            height: "620px",
            borderRadius: "999px",
            background: "rgba(214,255,75,0.16)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "46px",
                height: "46px",
                borderRadius: "999px",
                background: "#d6ff4b",
                color: "#07070a",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              FA
            </div>
            <div style={{ display: "flex", color: "#ffffff", fontSize: "22px", fontWeight: 500 }}>
              {site.name}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: "999px",
              padding: "10px 18px",
              color: "rgba(255,255,255,0.7)",
              fontSize: "16px",
            }}
          >
            <div style={{ width: "8px", height: "8px", borderRadius: "999px", background: "#d6ff4b" }} />
            Disponível para projetos
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "96px",
              lineHeight: 0.95,
              letterSpacing: "-4px",
              color: "#ffffff",
              fontWeight: 500,
            }}
          >
            Do banco de dados
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontSize: "96px",
              lineHeight: 0.95,
              letterSpacing: "-4px",
              color: "#ffffff",
              fontWeight: 500,
            }}
          >
            <span>à&nbsp;</span>
            <span style={{ color: "#d6ff4b", fontFamily: "Instrument Serif", fontStyle: "italic" }}>
              interface.
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "26px",
            color: "rgba(255,255,255,0.5)",
            fontSize: "18px",
          }}
        >
          <span>Desenvolvedor Full Stack · TypeScript, React &amp; Node</span>
          <span style={{ color: "#d6ff4b" }}>{new URL(site.url).host}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: geistRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Geist",
          data: geistMedium,
          style: "normal",
          weight: 500,
        },
        {
          name: "Instrument Serif",
          data: instrumentSerif,
          style: "italic",
          weight: 400,
        },
      ],
    },
  );
}
