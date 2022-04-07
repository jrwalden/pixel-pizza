export const generateNumber = (base: number, scope: number) => {
  let i = 0;
  let count: number = 1;
  while (i < base) {
    if (count > scope) {
      count = 1;
    } else {
      count++;
    }
    i++;
  }
  return count;
};
