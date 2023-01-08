export default function escapeQuote(str) {
  if (typeof str != "string") throw new Error("Expected a string");

  Object.entries(escapeMap).forEach(([key, value]) => {
    str = str.replaceAll(key, value);
  });
  return str;
}
