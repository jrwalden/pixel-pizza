import React from "react";
import { pizzaCrust } from "../../assets/layer1/pizzaCrust";
import { pizzaBase } from "../../assets/layer1/pizzaBase";
import { addPepperoni } from "../../assets/layer2/pepperoni";
import Canvas from "../canvas/Cavnas";
import { generateNumber } from "../../util/generateNumber";

interface WrapperProps {
  seed: number;
  seedMultiplier: number;
  className?: string;
}

const Wrapper = ({ seed, seedMultiplier, className }: WrapperProps) => {
  const pepperoni = addPepperoni(generateNumber(seed * seed, 5));
  const layers = [pizzaCrust, pizzaBase, pepperoni];

  return (
    <Canvas
      scale={5}
      layers={layers}
      seed={seed}
      seedMultiplier={seedMultiplier}
      className={className}
    />
  );
};

export default Wrapper;
