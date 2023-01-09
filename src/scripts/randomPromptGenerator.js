import Rwg from "random-word-generator";
import censor from "../utils/censor.js";
import escapeQuote from "../utils/escapeQuote.js";

async function randomPromptGenerator() {
  const generator = new Rwg();

  let prompt = [];
  for (let i = 0; i < 100; i++) {
    prompt.push(generator.generate());
  }
  prompt = escapeQuote(await censor(prompt.join(" ")));
  console.log("Your Prompt:\n" + prompt);
}

randomPromptGenerator().catch(console.error);
