import randomWordPrompt from "../utils/randomWordPrompt.js";
import setWeight from "../utils/setWeight.js";

const subPrompts = 4;
const wordCount = 8;

async function randomWordScramble() {
  let prompts = [];
  let positive = false;
  let waitList = [];
  for (let i = 1; i <= subPrompts; i++) {
    const isPositive = (positive = !positive);
    const done = randomWordPrompt(wordCount);
    done.then((prompt) => {
      prompts.push(setWeight(prompt, isPositive ? 1 : -1));
    });
    waitList.push(done);
  }
  await Promise.all(waitList);
  const output = prompts.join(",") + " --chaos 10";
  console.log("Your Prompt:\n" + output);
}

randomWordScramble().catch(console.error);
