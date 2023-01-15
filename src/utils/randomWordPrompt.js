import Rwg from "random-word-generator";
import censor from "./censor.js";
import escapeQuote from "./escapeQuote.js";

export default async function randomWordPrompt(length = 10) {
  if (!isFinite(length) || length < 1) throw new Error("Invalid Length");
  const generator = new Rwg();

  let prompt = [];
  for (let i = 0; i < length / 10; i++) {
    prompt.push(generator.generate());
  }
  return escapeQuote(await censor(prompt.join("").substring(0, length)));
}
