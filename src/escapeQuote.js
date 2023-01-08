const escapeMap = {};

export default function escapeQuote(str) {
  Object.entries(escapeMap).forEach(([key, value]) => {
    str.replaceAll(key, value);
  });
}
