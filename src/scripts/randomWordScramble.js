import randomWordPrompt from "../utils/randomWordPrompt.js";
import setWeight from "../utils/setWeight.js";
import intBetween from "../utils/intBetween.js";

const subPrompts = Math.round(Math.random() * 30);
const maxWordCount = 8;
const decimals = 2;

async function randomWordScramble() {
  let prompts = [];
  let positive = false;
  let waitList = [];
  let totalWeight = 0;
  for (let i = 1; i <= subPrompts; i++) {
    const isPositive = (positive = !positive);
    const done = randomWordPrompt(intBetween(1, Math.max(maxWordCount, 1)));
    let weight =
      Math.round(Math.random() * Math.pow(10, decimals)) /
      Math.pow(10, decimals);
    weight = isPositive ? weight : -weight;
    totalWeight += weight;
    done.then((prompt) => {
      prompts.push(setWeight(prompt, weight));
    });
    waitList.push(done);
  }
  await Promise.all(waitList);
  const output = prompts.join(","); // + " --chaos 10";
  console.log(`Total Weight: ${totalWeight}\nYour Prompt:\n${output}`);
}

randomWordScramble().catch(console.error);
