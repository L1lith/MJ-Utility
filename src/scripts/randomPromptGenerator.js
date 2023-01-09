import Rwg from "random-word-generator";
import censor from "../utils/censor.js";
import escapeQuote from "../utils/escapeQuote.js";

async function randomPromptGenerator() {
  const generator = new Rwg();

  let prompt = [];
  for (let i = 0; i < 100; i++) {
    prompt.push(generator.generate());
  }
  console.log("Your Prompt:\n" + prompt.join(" "));
}

randomPromptGenerator().catch(console.error);
