"use client";

import React, { forwardRef, useEffect, useRef } from "react";

import { Canvas } from "@react-three/fiber";


import Glow from "./Glow";


const RendererScene = forwardRef<any, any>(({}, ref) => {


  return (
    <Canvas camera={{ fov: 45, position: [10, 10, 12] }}  >
      <Glow />
    </Canvas>
  );
});

RendererScene.displayName = "RendererScene";

export default RendererScene;
