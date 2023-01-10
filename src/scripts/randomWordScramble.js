import randomWordPrompt from "../utils/randomWordPrompt.js";
import setWeight from "../utils/setWeight.js";

const subPrompts = 45;
const wordCount = 4;
const decimals = 2;

async function randomWordScramble() {
  let prompts = [];
  let positive = false;
  let waitList = [];
  for (let i = 1; i <= subPrompts; i++) {
    const isPositive = (positive = !positive);
    const done = randomWordPrompt(wordCount);
    const weight =
      Math.round(Math.random() * Math.pow(10, decimals)) /
      Math.pow(10, decimals);
    done.then((prompt) => {
      prompts.push(setWeight(prompt, isPositive ? weight : -weight));
    });
    waitList.push(done);
  }
  await Promise.all(waitList);
  const output = prompts.join(","); // + " --chaos 10";
  console.log("Your Prompt:\n" + output);
}

randomWordScramble().catch(console.error);
