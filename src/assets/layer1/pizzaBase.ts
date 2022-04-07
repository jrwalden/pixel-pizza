import { layerModel } from "../../models/layer.model";

const triangleRanges = () => {
  let i = 0;
  const rangeArrays: number[][] = [[1010, 1090]];
  while (i < 80) {
    const selector = i > 1 ? i * 2 : i;
    const dupArray = [
      rangeArrays[selector][0] + 100,
      rangeArrays[selector][1] + 100,
    ];
    const newArray = [
      rangeArrays[selector][0] + 201,
      rangeArrays[selector][1] + 199,
    ];
    rangeArrays.push(dupArray, newArray);
    i++;
  }
  console.log(rangeArrays);
  return rangeArrays;
};

export const pizzaBase: layerModel = {
  profile: "yellow",
  targetRanges: triangleRanges(),
};
