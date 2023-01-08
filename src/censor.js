import { readFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const bannedWordsFile = join(dirname(__filename), "data", "bannedWords.txt");

export default async function censor(str) {
  if (typeof str != "string") throw new Error("Expected a string");
  const bannedWords = (await readFile(bannedWordsFile, "utf8"))
    .split("\n")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);

  bannedWords.forEach((bannedWord) => {
    const re = new RegExp(bannedWord, "ig");
    let match;
    while ((match = re.exec(str))) {
      let replacement = "";
      for (let i = 0; i < match.length; i++) {
        replacement += "*";
      }
      str = str.replaceAll(match, replacement);
    }
  });
  return str;
}
