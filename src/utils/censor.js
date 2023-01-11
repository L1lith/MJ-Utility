import { readFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import intBetween from "./intBetween.js";
import isUnique from "./isUnique.js";

const __filename = fileURLToPath(import.meta.url);

const bannedWordsFile = join(dirname(__filename), "../data", "bannedWords.txt");
const censorCharacters = "*#$%@!^+";

export default async function censor(str) {
  if (typeof str != "string") throw new Error("Expected a string");
  const bannedWords = (await readFile(bannedWordsFile, "utf8"))
    .split("\n")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)
    .filter(isUnique);

  bannedWords.forEach((bannedWord) => {
    const re = new RegExp(bannedWord, "ig");
    let match;
    while ((match = re.exec(str))) {
      let replacement = "";
      for (let i = 0; i < bannedWord.length; i++) {
        const current = match[0][i];
        if (/[\s\n]/.test(current)) {
          replacement += current;
        } else if (bannedWord.length < 3) {
          replacement +=
            censorCharacters[intBetween(0, censorCharacters.length - 1)];
        } else if (i === 0 && bannedWord.length > 1) {
          replacement = match[0][0];
        } else if (i === bannedWord.length - 1 && i > 0) {
          replacement += current;
        } else {
          replacement +=
            censorCharacters[intBetween(0, censorCharacters.length - 1)];
        }
      }
      str = str.replaceAll(match, replacement);
    }
  });
  return str;
}
