const censorMap = {
  bosom: "chest",
};

export default function censor(str, censor = censorMap) {
  if (typeof str != "string") throw new Error("Expected a string");
  if (typeof censor != "object" || censor === null)
    throw new Error("Expected an object for the censor map");

  Object.entries(censor).forEach(([key, value]) => {
    str = str.replaceAll(key, value);
  });
  return str;
}
