export const addShapeRanges = (
  baseShapeRanges: number[][],
  offsets: number[]
) => {
  const offsettedRanges: number[][] = [];
  offsets.forEach((offset) => {
    baseShapeRanges.forEach((range) => {
      offsettedRanges.push([range[0] + offset, range[1] + offset]);
    });
  });
  return offsettedRanges;
};
