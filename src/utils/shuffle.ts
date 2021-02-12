export default function shuffle(array: string[]): string[] {
  const clone = [...array];
  let currentIndex = clone.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = clone[currentIndex];
    clone[currentIndex] = clone[randomIndex];
    clone[randomIndex] = temporaryValue;
  }

  return clone;
}
