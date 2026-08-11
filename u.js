// u.js — UNI‑Modul (ein Zeichen + RAW)

export const U = {
  uni: "U",                     // EIN ZEICHEN (UNI‑gültig)
  raw: "RAW:USER-UNIT"          // RAW‑Deutung (4D‑Codierung)
};

// Autonomes Modul
export function getU() {
  return U;
}
