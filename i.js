export async function csvToJSFile(csvPath, jsPath) {
  const res = await fetch(csvPath);
  const text = await res.text();

  const rows = text.trim().split("\n");
  const header = rows[0].split(",");

  const rawList = rows.slice(1).map(line => {
    const values = line.split(",");
    const obj = {};
    header.forEach((h, i) => obj[h.trim()] = values[i].trim());
    return obj;
  });

  const jsData = rawList.map(raw => ({
    uni: raw[header[0]][0],     // EIN ZEICHEN
    raw: JSON.stringify(raw)    // RAW‑Deutung
  }));

  const jsText =
`export const DATA = ${JSON.stringify(jsData, null, 2)};`;

  console.log("JS‑Datei erzeugt:", jsPath);
  console.log(jsText);
}
