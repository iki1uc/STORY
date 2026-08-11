// r.js — Datenmodul (bereinigt, EIN ZEICHEN + RAW)

export const R = {
  uni: "R",                     // EIN ZEICHEN (UNI‑gültig)
  raw: "RAW:DATA-SET-3"         // RAW‑Deutung (bereinigter Datensatz)
};

// Autonomes Modul
export function getR() {
  return R;
}
