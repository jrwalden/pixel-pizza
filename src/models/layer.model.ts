import { profileOptions } from "./colorProfile.model";

export interface layerModel {
  profile: profileOptions;
  targetRanges: number[][];
}
