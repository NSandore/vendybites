import { ImageResponse } from "next/og";

export const alt = "VendyBites modern vending machines for Connecticut businesses";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0F",
          color: "white",
          padding: "72px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "720px",
            height: "720px",
            borderRadius: "999px",
            right: "-180px",
            top: "-240px",
            background: "radial-gradient(circle, rgba(170,240,238,0.45), rgba(254,211,131,0.18), transparent 68%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "72px",
            bottom: "72px",
            width: "430px",
            height: "3px",
            background: "linear-gradient(90deg, #aaf0ee, #fed383)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #aaf0ee, #fed383)",
              color: "#0A0A0F",
              fontSize: "42px",
              fontWeight: 900,
            }}
          >
            V
          </div>
          <div style={{ display: "flex", fontSize: "46px", fontWeight: 900, letterSpacing: "-1.5px" }}>
            <span>Vendy</span>
            <span style={{ color: "#aaf0ee" }}>Bites</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "26px", maxWidth: "870px" }}>
          <div
            style={{
              color: "#fed383",
              fontSize: "25px",
              fontWeight: 800,
              letterSpacing: "5px",
              textTransform: "uppercase",
            }}
          >
            Connecticut vending, done right
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: "80px", lineHeight: 0.95, fontWeight: 900, letterSpacing: "-4px" }}>
            <span>Modern machines.</span>
            <span>Local support.</span>
          </div>
          <div style={{ color: "rgba(255,255,255,0.72)", fontSize: "30px", lineHeight: 1.35, maxWidth: "760px" }}>
            Brand-new smart vending machines for offices, gyms, apartments, salons, hotels, campuses, and retail spaces.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
