import { ImageResponse } from "next/og";
import { site, stats } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(circle at 80% 0%, #3a2c1c 0%, #08080a 55%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#e8c9a0" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#34d399" }} />
          {site.availability}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -3 }}>{site.name}</div>
          <div style={{ fontSize: 40, color: "#d6d3d1" }}>
            Senior Full-Stack Engineer · Web, Mobile & AI
          </div>
        </div>
        <div style={{ display: "flex", gap: 56 }}>
          {stats.slice(0, 3).map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 52, fontWeight: 700, color: "#e8c9a0" }}>{s.value}</div>
              <div style={{ fontSize: 22, color: "#a8a29e", maxWidth: 300 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
