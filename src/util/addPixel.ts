import { rgbaModel } from "../models/rgba.model";

export const addPixel = (
  context: any,
  rgba: rgbaModel,
  xLoc: number,
  yLoc: number,
  scale: number
) => {
  context.fillStyle = `rgb(${rgba})`;
  context.fillRect(xLoc, yLoc, scale, scale);
};
