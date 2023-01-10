import randomWordPrompt from "../utils/randomWordPrompt.js";
import setWeight from "../utils/setWeight.js";

const subPrompts = 30;
const wordCount = 4;
const decimals = 2;

async function randomWordScramble() {
  let prompts = [];
  let positive = false;
  let waitList = [];
  let totalWeight = 0;
  for (let i = 1; i <= subPrompts; i++) {
    const isPositive = (positive = !positive);
    const done = randomWordPrompt(wordCount);
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
