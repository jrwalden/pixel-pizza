import { rgbaModel } from "./rgba.model";

export type profileOptions = "yellow" | "red" | "brown";
type colorOptions =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20;

export type profileModel = Record<colorOptions, rgbaModel>;

export type colorProfileModel = Record<profileOptions, profileModel>;
