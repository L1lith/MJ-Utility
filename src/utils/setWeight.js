export default function setWeight(str, weight = 1) {
  if (typeof str != "string") throw new Error("Expected a string");
  if (str.includes(","))
    throw new Error("Prompt cannot contain a comma for this operation");
  if (!isFinite(weight)) throw new Error("Weight is not a valid number");

  const [query] = str.split("::");
  return query + "::" + weight;
}
