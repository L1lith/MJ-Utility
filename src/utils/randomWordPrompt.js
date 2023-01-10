import Rwg from "random-word-generator";
import censor from "../utils/censor.js";
import escapeQuote from "../utils/escapeQuote.js";

export default async function randomWordPrompt(length = 10) {
  if (!isFinite(length) || length < 1) throw new Error("Invalid Length");
  const generator = new Rwg();

  let prompt = [];
  for (let i = 0; i < length; i++) {
    prompt.push(generator.generate());
  }
  return escapeQuote(await censor(prompt.join(" ")));
}
