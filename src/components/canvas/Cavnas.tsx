import React, { useEffect, useRef } from "react";
import { addPixel } from "../../util/addPixel";
import { layerModel } from "../../models/layer.model";
import { colorProfiles } from "../../assets/profiles/colour";
import { profileOptions, profileModel } from "../../models/colorProfile.model";
import { generateNumber } from "../../util/generateNumber";

interface CanvasProps {
  layers: layerModel[];
  scale: number;
  seed: number;
  seedMultiplier: number;
  className?: string;
}

const Canvas = ({
  layers,
  scale = 1,
  seed,
  seedMultiplier,
  className,
}: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const size = scale * 100;
  const pixelCount = size * size;

  useEffect(() => {
    if (canvasRef) {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      let x = 0;
      let y = 0;

      if (context) {
        layers?.forEach((layer) => {
          const profileNumber = generateNumber(seed * seedMultiplier, 20);
          layer.targetRanges.forEach((range) => {
            let i = 0;
            while (i < pixelCount) {
              if (i >= range[0] * scale && i <= range[1] * scale) {
                addPixel(
                  context,
                  colorProfiles[layer.profile as profileOptions][
                    profileNumber as keyof profileModel
                  ],
                  x,
                  y,
                  scale
                );
              }
              y = Math.floor((i * scale) / size);
              if (x < size) x = x + scale;
              else x = scale;
              i = i + scale;
            }
          });
        });
      }
    }
  }, [canvasRef, layers, pixelCount, size, scale, seed, seedMultiplier]);

  return (
    <canvas
      className={className}
      width={size}
      height={size}
      style={{ background: "#f6f6f6" }}
      ref={canvasRef}
    />
  );
};

export default Canvas;
