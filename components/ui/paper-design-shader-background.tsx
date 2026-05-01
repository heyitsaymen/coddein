"use client";

import { GrainGradient } from "@paper-design/shaders-react";

export function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <GrainGradient
        style={{ height: "100%", width: "100%" }}
        colorBack="hsl(146, 50%, 5%)"
        softness={0.76}
        intensity={0.55}
        noise={0}
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={1}
        rotation={0}
        speed={1}
        colors={[
          "hsl(146, 80%, 25%)",
          "hsl(149, 75%, 40%)",
          "hsl(142, 90%, 55%)",
        ]}
      />
    </div>
  );
}
