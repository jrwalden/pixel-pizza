import { addShapeRanges } from "../../util/addShapeRanges";
import { pepperoniBase } from "../baseShapes/pepperoniBase";
import { layerModel } from "../../models/layer.model";
import { assetOption, assetOptionModel } from "../../models/assetOptions.model";

const pepperoniOptions: assetOptionModel = {
  1: [1522, 1842, 1563, 3532, 3455, 5147, 6744],
  2: [1522, 1563, 3532, 3455, 5147],
  3: [1842, 1563, 3532, 5147, 6744],
  4: [1842, 3455, 6744],
  5: [1842, 5147],
};

export const addPepperoni = (option: number) => {
  const selector = option > 10 ? 10 : option;
  const pepperoni: layerModel = {
    profile: "red",
    targetRanges: addShapeRanges(
      pepperoniBase,
      pepperoniOptions[(selector as assetOption) || 1]
    ),
  };
  return pepperoni;
};
