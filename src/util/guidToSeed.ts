import { alphabetNumericModel } from "../models/alphabetNumeric.model";
import { alphabetNumeric } from "./alphaNumber";

export const guidToSeed = (guid: string) => {
  const guidNewStr = guid.replace(/-/g, "").toLowerCase();
  let i = 0;
  let convertedNumber = 0;
  let seedMultiplier = 1;
  while (i < guidNewStr.length) {
    const char = guidNewStr.charAt(i);
    if (alphabetNumeric[char as keyof alphabetNumericModel]) {
      const alphaNumber = alphabetNumeric[char as keyof alphabetNumericModel];
      convertedNumber += alphaNumber;
      if (i === 1) {
        seedMultiplier += alphaNumber;
      }
      if (i === guidNewStr.length) {
        seedMultiplier += alphaNumber;
      }
    } else {
      const number = parseInt(char);
      convertedNumber += number;
      if (i === 1) {
        seedMultiplier += number;
      }
      if (i === guidNewStr.length) {
        seedMultiplier += number;
      }
    }
    i++;
  }
  return {
    seed: convertedNumber,
    seedMultiplier,
  };
};
