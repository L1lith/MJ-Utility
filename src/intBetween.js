// Thanks to this legendary post https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript/7228322#7228322
export default function intBetween(min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
