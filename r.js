// r.js — UNI‑Modul (IHR → R)

export const R = {
  uni: "R",                     // EIN ZEICHEN (UNI‑gültig)
  raw: "RAW:IHR-RESONANZ"       // RAW‑Deutung (Narrativität / 4D)
};

// Autonomes Modul
export function getR() {
  return R;
}
