import React, { forwardRef, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGLTF, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Glow = forwardRef<any, any>(({}, parallaxRef: any) => {
  const { camera } = useThree();

  const groupRef = useRef<any>();

  const { nodes } = useGLTF("/models/glow.glb") as any;
  const bodyNormal = useTexture("/models/glow.jpg");

  useEffect(() => {
    gsap.to(camera.position, {
      x: 4,
      y: 10,
      z: 13,
      duration: 100,
      onUpdate: () => camera.updateProjectionMatrix(),
      scrollTrigger: {
        trigger: "#root",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
    gsap.to(groupRef.current.rotation, {
      y: Math.PI * 1.25,
      duration: 1,
      onUpdate: () => camera.updateProjectionMatrix(),
      scrollTrigger: {
        trigger: "#root",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  });

  return (
    <group ref={groupRef} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ground.geometry}
        material={nodes.ground.material}
        position={[0, 1, 0]}
        scale={4.17}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[-0.94, 1.26, -1.12]}
        rotation={[0, -0.89, 0]}
        scale={0.67}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[1.3, 1.07, -0.79]}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf.geometry}
        material={nodes.leaf.material}
        position={[0, 1, 0]}
        scale={0.11}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf001.geometry}
        material={nodes.leaf001.material}
        position={[-0.42, 4.8, 1.36]}
        rotation={[1.32, -0.89, 1.61]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf002.geometry}
        material={nodes.leaf002.material}
        position={[0.52, 4.65, -2.42]}
        rotation={[2.74, -0.69, 1.57]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf003.geometry}
        material={nodes.leaf003.material}
        position={[-0.44, 5.42, -2.4]}
        rotation={[0.29, -0.99, 1.18]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf004.geometry}
        material={nodes.leaf004.material}
        position={[0, 5.37, -1.5]}
        rotation={[0.33, -1.06, -0.17]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf005.geometry}
        material={nodes.leaf005.material}
        position={[-0.25, 4.8, 1.29]}
        rotation={[-0.25, 1.48, 1.18]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf006.geometry}
        material={nodes.leaf006.material}
        position={[-0.19, 5.16, -2.08]}
        rotation={[-0.49, 1.09, 0.48]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf007.geometry}
        material={nodes.leaf007.material}
        position={[0.99, 4.46, -1.93]}
        rotation={[-1.77, 1.19, -3.07]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf008.geometry}
        material={nodes.leaf008.material}
        position={[-0.61, 4.63, 1.11]}
        rotation={[-1.11, -0.23, 0.46]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf009.geometry}
        material={nodes.leaf009.material}
        position={[-0.3, 5.3, -2.31]}
        rotation={[1.32, -0.96, 1.66]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf010.geometry}
        material={nodes.leaf010.material}
        position={[-0.9, 4.18, -0.79]}
        rotation={[-0.39, 0.93, -0.22]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf011.geometry}
        material={nodes.leaf011.material}
        position={[1.52, 4.47, 1.24]}
        rotation={[-0.52, -0.05, -0.97]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf012.geometry}
        material={nodes.leaf012.material}
        position={[-1, 4.71, -0.01]}
        rotation={[-1.07, 0.28, 2.24]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf013.geometry}
        material={nodes.leaf013.material}
        position={[-1, 4.34, 0.81]}
        rotation={[0.67, -0.34, -0.44]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf014.geometry}
        material={nodes.leaf014.material}
        position={[-0.39, 4.04, -0.49]}
        rotation={[2.57, -0.3, 2.82]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf015.geometry}
        material={nodes.leaf015.material}
        position={[1.44, 3.94, 0.19]}
        rotation={[0.57, 1.31, 0.38]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf016.geometry}
        material={nodes.leaf016.material}
        position={[-0.99, 4.77, 0.12]}
        rotation={[3.02, -0.13, 1.55]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf017.geometry}
        material={nodes.leaf017.material}
        position={[-0.52, 3.64, 0.27]}
        rotation={[2.26, 0.4, -2.88]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf018.geometry}
        material={nodes.leaf018.material}
        position={[-0.95, 4.25, -0.94]}
        rotation={[-0.32, -1.38, -1.78]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf019.geometry}
        material={nodes.leaf019.material}
        position={[0.74, 4.61, -1.47]}
        rotation={[1.88, -0.72, 1.14]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf020.geometry}
        material={nodes.leaf020.material}
        position={[0.59, 4.81, -2.63]}
        rotation={[-0.77, 0.49, 0.48]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf021.geometry}
        material={nodes.leaf021.material}
        position={[-0.83, 4.34, -0.58]}
        rotation={[1.47, -0.29, 1.36]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf022.geometry}
        material={nodes.leaf022.material}
        position={[-1.35, 4.5, 1.5]}
        rotation={[-0.83, -0.57, -3]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf023.geometry}
        material={nodes.leaf023.material}
        position={[1.02, 3.99, 0.49]}
        rotation={[-2.43, -0.8, -2.97]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf024.geometry}
        material={nodes.leaf024.material}
        position={[-0.62, 4.2, 0.64]}
        rotation={[2.08, 0.23, 1.63]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf025.geometry}
        material={nodes.leaf025.material}
        position={[0.53, 4.43, -1.06]}
        rotation={[-0.25, -0.58, 0.76]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf026.geometry}
        material={nodes.leaf026.material}
        position={[-0.64, 4.14, -0.68]}
        rotation={[0.73, 0.04, 0.42]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf027.geometry}
        material={nodes.leaf027.material}
        position={[-0.8, 4.68, -0.12]}
        rotation={[-1.15, 0.42, 0.29]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf028.geometry}
        material={nodes.leaf028.material}
        position={[-0.46, 4.97, -0.03]}
        rotation={[0.71, 0.78, 0.74]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf029.geometry}
        material={nodes.leaf029.material}
        position={[-0.99, 4.25, -0.94]}
        rotation={[1.49, -0.16, -0.68]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf030.geometry}
        material={nodes.leaf030.material}
        position={[-0.74, 4.59, 1.07]}
        rotation={[-1.93, -0.82, -1.64]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf031.geometry}
        material={nodes.leaf031.material}
        position={[-0.64, 4.09, 0.64]}
        rotation={[-1.73, 0.33, -0.64]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf032.geometry}
        material={nodes.leaf032.material}
        position={[1.07, 4.49, -1.96]}
        rotation={[1.19, -0.44, 2.13]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf033.geometry}
        material={nodes.leaf033.material}
        position={[0.84, 3.45, 0.67]}
        rotation={[-2.09, -0.9, -3.1]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf034.geometry}
        material={nodes.leaf034.material}
        position={[-0.57, 5.55, -2.47]}
        rotation={[0.29, -0.31, 0.13]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf035.geometry}
        material={nodes.leaf035.material}
        position={[-0.49, 4.02, -0.5]}
        rotation={[-2.92, 0.87, -2.21]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf036.geometry}
        material={nodes.leaf036.material}
        position={[-0.78, 4.34, -0.46]}
        rotation={[-3.09, 0.54, -2.03]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf037.geometry}
        material={nodes.leaf037.material}
        position={[0.78, 4.49, -1.59]}
        rotation={[-2.24, -0.19, -1.1]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf038.geometry}
        material={nodes.leaf038.material}
        position={[-0.52, 3.85, 0.37]}
        rotation={[-1.15, -0.77, -0.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf039.geometry}
        material={nodes.leaf039.material}
        position={[0.43, 4.6, -2.28]}
        rotation={[1.92, 0.06, 2.75]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf040.geometry}
        material={nodes.leaf040.material}
        position={[-1.07, 4.34, 1.41]}
        rotation={[0.86, 0.09, -2.36]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf041.geometry}
        material={nodes.leaf041.material}
        position={[0.31, 4.76, -1.47]}
        rotation={[-0.09, 0.46, -0.54]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf042.geometry}
        material={nodes.leaf042.material}
        position={[0.15, 5.12, -1.49]}
        rotation={[-2.38, 0.22, -3.03]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf043.geometry}
        material={nodes.leaf043.material}
        position={[-0.31, 5.28, -2.3]}
        rotation={[-2.67, 0.05, 0.6]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf044.geometry}
        material={nodes.leaf044.material}
        position={[1.09, 4.43, -1.98]}
        rotation={[-0.78, -0.73, 0.32]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf045.geometry}
        material={nodes.leaf045.material}
        position={[0.61, 4.46, -1.48]}
        rotation={[-0.65, -0.79, -0.05]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf046.geometry}
        material={nodes.leaf046.material}
        position={[0.38, 4.87, -1.5]}
        rotation={[0.83, -0.01, 0.18]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf047.geometry}
        material={nodes.leaf047.material}
        position={[0.55, 4.77, -2.58]}
        rotation={[-0.31, 1.25, 0.04]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf048.geometry}
        material={nodes.leaf048.material}
        position={[0.55, 4.74, -2.57]}
        rotation={[-0.79, 1.26, -0.68]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf049.geometry}
        material={nodes.leaf049.material}
        position={[-0.41, 4.03, -0.38]}
        rotation={[-1.43, -0.04, 2.58]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf050.geometry}
        material={nodes.leaf050.material}
        position={[1.43, 4.33, 1.18]}
        rotation={[0.21, -1.17, -0.57]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf051.geometry}
        material={nodes.leaf051.material}
        position={[0.01, 5.38, -1.49]}
        rotation={[-0.61, -0.23, -0.33]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf052.geometry}
        material={nodes.leaf052.material}
        position={[-0.43, 4.1, 0.62]}
        rotation={[-0.1, 0.23, 1.04]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf053.geometry}
        material={nodes.leaf053.material}
        position={[-0.58, 4.15, 0.68]}
        rotation={[2.11, 0.81, -1.13]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf054.geometry}
        material={nodes.leaf054.material}
        position={[-0.32, 4.78, 1.3]}
        rotation={[-1.97, -0.95, -1.01]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf055.geometry}
        material={nodes.leaf055.material}
        position={[-0.36, 5.33, -2.34]}
        rotation={[-0.04, -0.78, 1.39]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf056.geometry}
        material={nodes.leaf056.material}
        position={[-0.47, 3.68, 0.46]}
        rotation={[0.58, -0.17, -2.04]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf057.geometry}
        material={nodes.leaf057.material}
        position={[-1, 4.8, 0.03]}
        rotation={[0.56, -0.15, -0.19]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf058.geometry}
        material={nodes.leaf058.material}
        position={[0.6, 4.51, -1.18]}
        rotation={[-1.09, -0.17, -1.45]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf059.geometry}
        material={nodes.leaf059.material}
        position={[-0.39, 4.04, -0.49]}
        rotation={[0.33, -0.12, 2.53]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf060.geometry}
        material={nodes.leaf060.material}
        position={[0.46, 4.6, -2.26]}
        rotation={[1.47, -0.66, 0.3]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf061.geometry}
        material={nodes.leaf061.material}
        position={[-0.47, 4.8, 1.18]}
        rotation={[2, 0.77, -1.47]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf062.geometry}
        material={nodes.leaf062.material}
        position={[1.37, 3.91, 0.31]}
        rotation={[1.02, 1.13, -2.22]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf063.geometry}
        material={nodes.leaf063.material}
        position={[0.25, 4.82, 1.31]}
        rotation={[0.63, -0.4, 2.01]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf064.geometry}
        material={nodes.leaf064.material}
        position={[0.4, 4.62, -1.33]}
        rotation={[1.35, 0.42, -1.16]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf065.geometry}
        material={nodes.leaf065.material}
        position={[0.94, 3.57, 0.63]}
        rotation={[-2.09, -0.52, -1.61]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf066.geometry}
        material={nodes.leaf066.material}
        position={[1.21, 3.97, 0.84]}
        rotation={[-1.28, -0.16, -0.17]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf067.geometry}
        material={nodes.leaf067.material}
        position={[0.84, 4.59, -1.91]}
        rotation={[-0.35, 0.14, 1.33]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf068.geometry}
        material={nodes.leaf068.material}
        position={[0.82, 4.51, -2.03]}
        rotation={[-0.23, -0.3, -0.93]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf069.geometry}
        material={nodes.leaf069.material}
        position={[0.65, 3.51, 0.65]}
        rotation={[2.08, 1.19, -1.02]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf070.geometry}
        material={nodes.leaf070.material}
        position={[0.95, 4.27, 0.29]}
        rotation={[1.24, 0.69, -0.39]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf071.geometry}
        material={nodes.leaf071.material}
        position={[-1.02, 5.07, -0.25]}
        rotation={[-2.02, -0.88, -1.13]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf072.geometry}
        material={nodes.leaf072.material}
        position={[-0.8, 4.68, -0.12]}
        rotation={[-0.99, -0.13, 0.02]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf073.geometry}
        material={nodes.leaf073.material}
        position={[-0.93, 4.48, 0.07]}
        rotation={[-0.24, 0.74, 1.09]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf074.geometry}
        material={nodes.leaf074.material}
        position={[0.4, 4.2, -1.04]}
        rotation={[-2.62, 0.06, 0.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf075.geometry}
        material={nodes.leaf075.material}
        position={[-0.77, 4.38, -0.49]}
        rotation={[2.87, -0.93, -2.65]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf076.geometry}
        material={nodes.leaf076.material}
        position={[-0.9, 4.18, -0.77]}
        rotation={[-2.63, 0.57, -2.83]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf077.geometry}
        material={nodes.leaf077.material}
        position={[-0.37, 3.54, 0.23]}
        rotation={[-2.04, 0.21, 1.54]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf078.geometry}
        material={nodes.leaf078.material}
        position={[0.55, 4.34, -1.14]}
        rotation={[1.13, -0.72, 1.94]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf079.geometry}
        material={nodes.leaf079.material}
        position={[-0.53, 4.89, 1.37]}
        rotation={[1.08, -0.46, -0.43]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf080.geometry}
        material={nodes.leaf080.material}
        position={[-0.87, 4.53, 0.15]}
        rotation={[2.44, -0.23, 3.12]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf081.geometry}
        material={nodes.leaf081.material}
        position={[-1.13, 4.29, 1.3]}
        rotation={[-2.04, 1.25, 2.91]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf082.geometry}
        material={nodes.leaf082.material}
        position={[0.53, 4.76, -2.51]}
        rotation={[2.4, 0.3, -1.95]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf083.geometry}
        material={nodes.leaf083.material}
        position={[-0.39, 4.84, 1.25]}
        rotation={[2.78, 0.26, -0.47]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf084.geometry}
        material={nodes.leaf084.material}
        position={[-1.03, 4.28, 1.22]}
        rotation={[-1.37, -0.82, 0.26]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf085.geometry}
        material={nodes.leaf085.material}
        position={[0.49, 4.42, -1.34]}
        rotation={[-2.55, -1.07, -2.21]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf086.geometry}
        material={nodes.leaf086.material}
        position={[0.25, 4.84, -1.5]}
        rotation={[-0.28, 0.75, 1.85]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf087.geometry}
        material={nodes.leaf087.material}
        position={[0.39, 4.64, -1.38]}
        rotation={[-1.94, -0.47, 1.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf088.geometry}
        material={nodes.leaf088.material}
        position={[-0.48, 5.4, -2.35]}
        rotation={[3.06, 0.24, -3.04]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf089.geometry}
        material={nodes.leaf089.material}
        position={[-0.39, 4.04, -0.49]}
        rotation={[1.24, 0.95, 1.56]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf090.geometry}
        material={nodes.leaf090.material}
        position={[-0.29, 4.16, 0.67]}
        rotation={[-1.09, 0.13, 0.62]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf091.geometry}
        material={nodes.leaf091.material}
        position={[0.68, 3.45, 0.58]}
        rotation={[0.49, 0.43, 0.41]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf092.geometry}
        material={nodes.leaf092.material}
        position={[1.05, 4.83, 0.23]}
        rotation={[-1.63, 0.7, 0.47]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf093.geometry}
        material={nodes.leaf093.material}
        position={[0.7, 4.51, -2.06]}
        rotation={[-0.82, -0.56, 0.23]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf094.geometry}
        material={nodes.leaf094.material}
        position={[0.62, 4.63, -1.52]}
        rotation={[1.2, -0.03, 0.34]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf095.geometry}
        material={nodes.leaf095.material}
        position={[0.94, 4.17, 0.35]}
        rotation={[-1.83, -0.38, -0.34]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf096.geometry}
        material={nodes.leaf096.material}
        position={[-0.94, 4.32, 0.73]}
        rotation={[2.1, 0.4, -1.08]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf097.geometry}
        material={nodes.leaf097.material}
        position={[-1.42, 4.54, 1.62]}
        rotation={[-1.66, 0.09, -2.08]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf098.geometry}
        material={nodes.leaf098.material}
        position={[0.59, 4.67, -1.37]}
        rotation={[1.3, -0.63, 2.93]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf099.geometry}
        material={nodes.leaf099.material}
        position={[0.43, 4.34, -1.22]}
        rotation={[-1.34, -1.02, -1.48]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf100.geometry}
        material={nodes.leaf100.material}
        position={[1.28, 4.03, 0.93]}
        rotation={[0.52, 0.04, 0.24]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf101.geometry}
        material={nodes.leaf101.material}
        position={[-0.99, 5, -0.23]}
        rotation={[1, 0.6, 0.02]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf102.geometry}
        material={nodes.leaf102.material}
        position={[-0.61, 4.93, 1.53]}
        rotation={[2.22, 0.82, -1.26]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf103.geometry}
        material={nodes.leaf103.material}
        position={[0.5, 4.71, -1.3]}
        rotation={[-3.07, -1.05, -1.97]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf104.geometry}
        material={nodes.leaf104.material}
        position={[0.88, 4.5, -1.85]}
        rotation={[-1.11, -0.21, 0.07]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf105.geometry}
        material={nodes.leaf105.material}
        position={[0.65, 3.51, 0.65]}
        rotation={[1.51, 1.08, -2.32]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf106.geometry}
        material={nodes.leaf106.material}
        position={[-1, 4.24, 0.86]}
        rotation={[-1.37, 0.25, 2.6]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf107.geometry}
        material={nodes.leaf107.material}
        position={[-0.48, 4.09, 0.66]}
        rotation={[-2.67, -1.02, 2.64]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf108.geometry}
        material={nodes.leaf108.material}
        position={[1.37, 4.25, 1.05]}
        rotation={[2, -0.97, 2.82]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf109.geometry}
        material={nodes.leaf109.material}
        position={[0.39, 4.35, -1.21]}
        rotation={[-2.17, 0.93, 3.05]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf110.geometry}
        material={nodes.leaf110.material}
        position={[1.71, 4.07, -0.06]}
        rotation={[1.38, 0.19, -0.26]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf111.geometry}
        material={nodes.leaf111.material}
        position={[0.63, 4.43, -1.27]}
        rotation={[-1.07, -1.04, -0.32]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf112.geometry}
        material={nodes.leaf112.material}
        position={[-0.15, 5.25, -2.15]}
        rotation={[0.64, -0.56, 1.04]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf113.geometry}
        material={nodes.leaf113.material}
        position={[0.13, 5.06, -1.68]}
        rotation={[0.88, -0.23, -0.17]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf114.geometry}
        material={nodes.leaf114.material}
        position={[-0.94, 4.32, 0.73]}
        rotation={[-0.39, -0.26, -0.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf115.geometry}
        material={nodes.leaf115.material}
        position={[0.55, 3.31, 0.77]}
        rotation={[2.15, -0.53, -3.03]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf116.geometry}
        material={nodes.leaf116.material}
        position={[-0.58, 4.11, -0.65]}
        rotation={[-0.18, -0.82, -0.9]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf117.geometry}
        material={nodes.leaf117.material}
        position={[0.59, 4.58, -1.22]}
        rotation={[1.98, -1.45, 1.48]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf118.geometry}
        material={nodes.leaf118.material}
        position={[-0.36, 3.75, -0.05]}
        rotation={[-3.06, -0.9, 2.6]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf119.geometry}
        material={nodes.leaf119.material}
        position={[-0.58, 4.15, 0.68]}
        rotation={[-3.13, 0.83, 2.67]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf120.geometry}
        material={nodes.leaf120.material}
        position={[-0.38, 4.11, -0.34]}
        rotation={[1.35, 0.02, 2.15]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf121.geometry}
        material={nodes.leaf121.material}
        position={[-0.65, 5.56, -2.53]}
        rotation={[-1.75, 0.27, 1.31]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf122.geometry}
        material={nodes.leaf122.material}
        position={[0.46, 4.28, -1.14]}
        rotation={[0.19, -0.38, 0.72]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf123.geometry}
        material={nodes.leaf123.material}
        position={[0.31, 4.16, -1.02]}
        rotation={[-2.44, -0.37, 0]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf124.geometry}
        material={nodes.leaf124.material}
        position={[-0.91, 4.71, -0.17]}
        rotation={[-0.64, -0.14, 0.14]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf125.geometry}
        material={nodes.leaf125.material}
        position={[-1.05, 5, -0.16]}
        rotation={[2.47, 0.62, 2.82]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf126.geometry}
        material={nodes.leaf126.material}
        position={[-0.24, 3.9, -0.38]}
        rotation={[-1.54, 0.19, 2.77]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf127.geometry}
        material={nodes.leaf127.material}
        position={[-0.52, 3.55, 0.36]}
        rotation={[-0.02, -0.04, -0.32]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf128.geometry}
        material={nodes.leaf128.material}
        position={[0.51, 4.35, -1.05]}
        rotation={[-2.11, -0.49, -1.68]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf129.geometry}
        material={nodes.leaf129.material}
        position={[0.72, 3.4, 0.72]}
        rotation={[2.9, -0.32, -2.17]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf130.geometry}
        material={nodes.leaf130.material}
        position={[-0.43, 4.93, -0.03]}
        rotation={[-1.71, -0.94, -1.57]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf131.geometry}
        material={nodes.leaf131.material}
        position={[0.78, 3.42, 0.69]}
        rotation={[-2.75, 0.17, -1.59]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf132.geometry}
        material={nodes.leaf132.material}
        position={[-0.43, 5.46, -2.36]}
        rotation={[-0.11, -1.42, 1.11]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf133.geometry}
        material={nodes.leaf133.material}
        position={[0.2, 5.01, -1.46]}
        rotation={[1.99, -0.69, 2.51]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf134.geometry}
        material={nodes.leaf134.material}
        position={[-0.33, 3.92, -0.4]}
        rotation={[-2.51, 0.34, 2.38]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf135.geometry}
        material={nodes.leaf135.material}
        position={[-1.02, 4.27, 0.85]}
        rotation={[0.48, 0.51, 0.93]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf136.geometry}
        material={nodes.leaf136.material}
        position={[-1.29, 4.46, 1.41]}
        rotation={[-1.9, 0.11, 2.01]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf137.geometry}
        material={nodes.leaf137.material}
        position={[-0.47, 4.69, 1.22]}
        rotation={[2.59, -0.66, 2.7]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf138.geometry}
        material={nodes.leaf138.material}
        position={[0.8, 4.6, -2.07]}
        rotation={[0.18, 0.24, 2.37]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf139.geometry}
        material={nodes.leaf139.material}
        position={[0.62, 4.63, -1.52]}
        rotation={[2.63, -0.65, 1.77]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf140.geometry}
        material={nodes.leaf140.material}
        position={[0.55, 4.51, -2.19]}
        rotation={[-0.32, 1.14, -1.92]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf141.geometry}
        material={nodes.leaf141.material}
        position={[-0.54, 3.89, 0.16]}
        rotation={[0.48, -0.27, -0.98]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf142.geometry}
        material={nodes.leaf142.material}
        position={[0.86, 3.58, 0.59]}
        rotation={[-1.7, 1.08, 2.77]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf143.geometry}
        material={nodes.leaf143.material}
        position={[1.4, 3.88, 0.33]}
        rotation={[3.05, -0.31, 2.25]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf144.geometry}
        material={nodes.leaf144.material}
        position={[1.82, 4.14, -0.12]}
        rotation={[1.17, -0.33, 2.85]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf145.geometry}
        material={nodes.leaf145.material}
        position={[-0.51, 4.1, 0.58]}
        rotation={[1.99, -1.22, 0.95]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf146.geometry}
        material={nodes.leaf146.material}
        position={[0.72, 3.51, 0.71]}
        rotation={[2.06, -0.3, 2.81]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf147.geometry}
        material={nodes.leaf147.material}
        position={[1.54, 3.99, 0.17]}
        rotation={[1.2, 0.21, -1.7]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf148.geometry}
        material={nodes.leaf148.material}
        position={[-0.89, 4.36, 0.85]}
        rotation={[-0.18, -0.58, -0.84]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf149.geometry}
        material={nodes.leaf149.material}
        position={[-1.11, 5.12, -0.26]}
        rotation={[0.73, 0.37, -1.31]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf150.geometry}
        material={nodes.leaf150.material}
        position={[0.72, 4.63, -1.49]}
        rotation={[2.3, 1.42, -1.15]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf151.geometry}
        material={nodes.leaf151.material}
        position={[-0.55, 4.74, 1.15]}
        rotation={[1.65, 0.8, -0.66]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf152.geometry}
        material={nodes.leaf152.material}
        position={[-0.61, 4.59, 1.17]}
        rotation={[-2.23, -0.01, -0.99]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf153.geometry}
        material={nodes.leaf153.material}
        position={[-0.45, 4.96, -0.04]}
        rotation={[2.21, -1.37, 3.11]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf154.geometry}
        material={nodes.leaf154.material}
        position={[-0.66, 4.97, 1.65]}
        rotation={[-2.08, 0.3, -2.91]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf155.geometry}
        material={nodes.leaf155.material}
        position={[1.05, 4.7, 0.26]}
        rotation={[-2.09, -0.3, -0.47]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf156.geometry}
        material={nodes.leaf156.material}
        position={[-0.44, 3.56, 0.06]}
        rotation={[-0.77, 0.22, 0.96]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf157.geometry}
        material={nodes.leaf157.material}
        position={[1.44, 3.95, 0.21]}
        rotation={[1.82, -0.04, 2.33]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf158.geometry}
        material={nodes.leaf158.material}
        position={[0.99, 4.41, 0.29]}
        rotation={[-1.16, -0.69, 0.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf159.geometry}
        material={nodes.leaf159.material}
        position={[0.55, 4.68, -2.49]}
        rotation={[2.86, -0.47, 3.01]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf160.geometry}
        material={nodes.leaf160.material}
        position={[-0.53, 4.09, 0.67]}
        rotation={[-0.84, 0.49, -2.08]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf161.geometry}
        material={nodes.leaf161.material}
        position={[-0.61, 4.59, 1.17]}
        rotation={[-1.25, -0.72, -2.68]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf162.geometry}
        material={nodes.leaf162.material}
        position={[-0.26, 3.85, -0.5]}
        rotation={[1, -1.3, 0.66]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf163.geometry}
        material={nodes.leaf163.material}
        position={[1.29, 4.14, 0.96]}
        rotation={[0.48, 0.68, 0.42]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf164.geometry}
        material={nodes.leaf164.material}
        position={[1.33, 4.14, 1]}
        rotation={[1.06, 0.03, 0.16]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf165.geometry}
        material={nodes.leaf165.material}
        position={[0.75, 3.57, 0.65]}
        rotation={[-0.55, 0.6, 0.06]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf166.geometry}
        material={nodes.leaf166.material}
        position={[-0.91, 4.29, 0.3]}
        rotation={[1.77, 0.57, -2.97]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf167.geometry}
        material={nodes.leaf167.material}
        position={[0.26, 4.98, -1.49]}
        rotation={[-2.77, -0.49, 2.56]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf168.geometry}
        material={nodes.leaf168.material}
        position={[0.64, 4.48, -1.54]}
        rotation={[3.07, 0.66, 0.71]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf169.geometry}
        material={nodes.leaf169.material}
        position={[-1.33, 4.52, 1.57]}
        rotation={[2.16, -1.02, -2.73]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf170.geometry}
        material={nodes.leaf170.material}
        position={[0.82, 4.51, -2.03]}
        rotation={[-1.96, -0.61, -2.12]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf171.geometry}
        material={nodes.leaf171.material}
        position={[0.84, 3.62, 0.65]}
        rotation={[0.89, 0.93, -0.42]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf172.geometry}
        material={nodes.leaf172.material}
        position={[-0.15, 5.25, -2.15]}
        rotation={[-1.48, 0.13, -0.93]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf173.geometry}
        material={nodes.leaf173.material}
        position={[-0.41, 5.35, -2.34]}
        rotation={[-1.15, -0.72, 1.17]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf174.geometry}
        material={nodes.leaf174.material}
        position={[-0.5, 3.7, 0.39]}
        rotation={[2.7, -0.03, 3.05]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf175.geometry}
        material={nodes.leaf175.material}
        position={[1.26, 4.33, -1.96]}
        rotation={[1.84, 0.38, 1.88]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf176.geometry}
        material={nodes.leaf176.material}
        position={[1, 4.13, 0.42]}
        rotation={[-0.4, -0.21, 1.03]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf177.geometry}
        material={nodes.leaf177.material}
        position={[-0.93, 4.92, -0.17]}
        rotation={[1.15, -0.43, 0.91]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf178.geometry}
        material={nodes.leaf178.material}
        position={[-0.01, 5.06, -1.73]}
        rotation={[2.81, 0.5, -1.57]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf179.geometry}
        material={nodes.leaf179.material}
        position={[0.91, 4.12, 0.43]}
        rotation={[-1.2, 0.26, 0.75]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf180.geometry}
        material={nodes.leaf180.material}
        position={[1.02, 4.59, 0.31]}
        rotation={[2.06, -0.88, 2.51]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf181.geometry}
        material={nodes.leaf181.material}
        position={[1.72, 4.08, -0.01]}
        rotation={[-2.99, -0.71, 2.28]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf182.geometry}
        material={nodes.leaf182.material}
        position={[-1.04, 4.22, -0.97]}
        rotation={[2.71, 0.54, -3.1]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf183.geometry}
        material={nodes.leaf183.material}
        position={[-1.22, 4.19, 1.84]}
        rotation={[0.46, 1.22, -1.12]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf184.geometry}
        material={nodes.leaf184.material}
        position={[-1.05, 5.01, -0.25]}
        rotation={[0.06, 0.84, -1.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf185.geometry}
        material={nodes.leaf185.material}
        position={[-1.1, 4.85, 0.19]}
        rotation={[0.54, 0.42, -1.08]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf186.geometry}
        material={nodes.leaf186.material}
        position={[0.61, 4.46, -1.48]}
        rotation={[-0.72, 0.14, -0.84]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf187.geometry}
        material={nodes.leaf187.material}
        position={[-0.31, 4.04, -0.4]}
        rotation={[0.22, -0.35, -0.95]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf188.geometry}
        material={nodes.leaf188.material}
        position={[0.59, 4.67, -1.37]}
        rotation={[0, -0.9, -0.59]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf189.geometry}
        material={nodes.leaf189.material}
        position={[-0.04, 4.84, 1.3]}
        rotation={[0.53, 0.09, -1.66]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf190.geometry}
        material={nodes.leaf190.material}
        position={[-0.14, 5.67, -1.37]}
        rotation={[-2.09, -0.31, 3.08]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf191.geometry}
        material={nodes.leaf191.material}
        position={[-0.01, 5.45, -1.46]}
        rotation={[0.95, -0.38, 0.3]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf192.geometry}
        material={nodes.leaf192.material}
        position={[-1.35, 4.52, 1.57]}
        rotation={[-1.77, 0.39, 1.08]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf193.geometry}
        material={nodes.leaf193.material}
        position={[-0.53, 3.55, 0.48]}
        rotation={[-0.38, -0.98, 1.37]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf194.geometry}
        material={nodes.leaf194.material}
        position={[-0.31, 5.28, -2.21]}
        rotation={[-2.54, 0.06, 2.57]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf195.geometry}
        material={nodes.leaf195.material}
        position={[-0.91, 4.69, 0.01]}
        rotation={[2.41, -0.38, 2.39]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf196.geometry}
        material={nodes.leaf196.material}
        position={[-1.09, 4.85, 0.16]}
        rotation={[1.05, 0.25, -1.67]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf197.geometry}
        material={nodes.leaf197.material}
        position={[-0.74, 4.13, -0.69]}
        rotation={[-2.07, 0.55, 2.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf198.geometry}
        material={nodes.leaf198.material}
        position={[-1.16, 4.25, 1.52]}
        rotation={[1.15, 1.08, -0.14]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf199.geometry}
        material={nodes.leaf199.material}
        position={[-0.6, 3.7, 0.2]}
        rotation={[-1.71, 0.43, 0.94]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf200.geometry}
        material={nodes.leaf200.material}
        position={[-0.85, 4.42, 0.31]}
        rotation={[1.89, -0.09, 3.03]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf201.geometry}
        material={nodes.leaf201.material}
        position={[-0.49, 4.17, 0.59]}
        rotation={[-1.02, -0.79, -1.9]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf202.geometry}
        material={nodes.leaf202.material}
        position={[0.88, 4.27, 0.32]}
        rotation={[-2.87, 0.12, 2.03]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf203.geometry}
        material={nodes.leaf203.material}
        position={[-0.33, 4.18, 0.69]}
        rotation={[1.94, -0.23, 2.77]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf204.geometry}
        material={nodes.leaf204.material}
        position={[-0.77, 4.21, -0.64]}
        rotation={[-2.25, 0.23, -2.85]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf205.geometry}
        material={nodes.leaf205.material}
        position={[-1.14, 4.33, 1.39]}
        rotation={[-2.46, 0.5, 1.15]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf206.geometry}
        material={nodes.leaf206.material}
        position={[0.92, 4.56, -1.82]}
        rotation={[2.48, -0.83, -2.9]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf207.geometry}
        material={nodes.leaf207.material}
        position={[0.69, 3.45, 0.74]}
        rotation={[-2.96, 0.15, -2.84]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf208.geometry}
        material={nodes.leaf208.material}
        position={[1.52, 4.55, 1.31]}
        rotation={[-2.75, 0.81, 1.84]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf209.geometry}
        material={nodes.leaf209.material}
        position={[-0.31, 5.28, -2.21]}
        rotation={[1.88, 0.08, -3.07]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf210.geometry}
        material={nodes.leaf210.material}
        position={[-1.37, 4.53, 1.6]}
        rotation={[-2.04, 0.03, 2.59]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf211.geometry}
        material={nodes.leaf211.material}
        position={[-0.64, 4.95, 1.61]}
        rotation={[0.2, 1.07, 1.63]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf212.geometry}
        material={nodes.leaf212.material}
        position={[-0.5, 4.82, 1.27]}
        rotation={[1.78, 0.58, -1.54]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf213.geometry}
        material={nodes.leaf213.material}
        position={[0.38, 4.45, -1.15]}
        rotation={[-0.83, 0.24, -0.57]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf214.geometry}
        material={nodes.leaf214.material}
        position={[-0.56, 3.59, 0.75]}
        rotation={[-1.27, 0.58, 1.37]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf215.geometry}
        material={nodes.leaf215.material}
        position={[-0.5, 3.57, 0.72]}
        rotation={[1.79, -0.73, 1.69]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf216.geometry}
        material={nodes.leaf216.material}
        position={[-1.12, 4.22, 1.59]}
        rotation={[-1.46, -0.05, 0.74]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf217.geometry}
        material={nodes.leaf217.material}
        position={[0.47, 4.22, -1.06]}
        rotation={[0.65, -0.76, 0.99]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf218.geometry}
        material={nodes.leaf218.material}
        position={[-0.44, 3.67, 0.01]}
        rotation={[-1.19, 0.47, 1.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf219.geometry}
        material={nodes.leaf219.material}
        position={[-0.73, 5.05, 1.78]}
        rotation={[2.87, 0.98, 2.71]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf220.geometry}
        material={nodes.leaf220.material}
        position={[0.09, 4.85, 1.28]}
        rotation={[0.17, -0.51, -2.98]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf221.geometry}
        material={nodes.leaf221.material}
        position={[0.1, 5.12, -1.57]}
        rotation={[-2.11, 0.82, 1.56]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf222.geometry}
        material={nodes.leaf222.material}
        position={[0.13, 4.85, 1.32]}
        rotation={[1.72, 0.12, -2.48]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf223.geometry}
        material={nodes.leaf223.material}
        position={[0.62, 4.63, -1.52]}
        rotation={[-0.11, 1, 1.46]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf224.geometry}
        material={nodes.leaf224.material}
        position={[0.77, 4.55, -1.79]}
        rotation={[1.47, 0.1, 0.11]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf225.geometry}
        material={nodes.leaf225.material}
        position={[-0.4, 5.38, -2.37]}
        rotation={[0.12, -1.27, 1.16]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf226.geometry}
        material={nodes.leaf226.material}
        position={[-1.13, 4.26, 1.38]}
        rotation={[-0.75, -0.32, -0.43]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf227.geometry}
        material={nodes.leaf227.material}
        position={[-0.52, 3.85, 0.37]}
        rotation={[2.51, 0.62, 3.02]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf228.geometry}
        material={nodes.leaf228.material}
        position={[1.4, 3.86, 0.26]}
        rotation={[-1.37, 0.41, -2.03]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf229.geometry}
        material={nodes.leaf229.material}
        position={[0.94, 4.58, -1.86]}
        rotation={[2.21, -1.08, 0.96]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf230.geometry}
        material={nodes.leaf230.material}
        position={[0.26, 4.98, -1.49]}
        rotation={[2.87, -0.54, -2.82]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf231.geometry}
        material={nodes.leaf231.material}
        position={[-0.19, 5.23, -2.05]}
        rotation={[-3.02, 0.47, -1.84]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf232.geometry}
        material={nodes.leaf232.material}
        position={[0.53, 4.68, -2.43]}
        rotation={[-1.59, -1.01, -0.39]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf233.geometry}
        material={nodes.leaf233.material}
        position={[-1.19, 4.47, 1.37]}
        rotation={[0.44, -0.9, 0.65]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf234.geometry}
        material={nodes.leaf234.material}
        position={[-0.63, 4.88, -0.03]}
        rotation={[1.62, 1.36, -2.45]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf235.geometry}
        material={nodes.leaf235.material}
        position={[0.07, 5.22, -1.55]}
        rotation={[-0.26, 0.49, 1.2]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf236.geometry}
        material={nodes.leaf236.material}
        position={[-0.94, 4.88, -0.13]}
        rotation={[2.58, -0.46, 1.76]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf237.geometry}
        material={nodes.leaf237.material}
        position={[1.01, 4.46, -1.92]}
        rotation={[1.98, -0.95, 2.91]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf238.geometry}
        material={nodes.leaf238.material}
        position={[1.56, 4.53, 1.3]}
        rotation={[0.51, -0.51, 0.05]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf239.geometry}
        material={nodes.leaf239.material}
        position={[0.2, 5.06, -1.51]}
        rotation={[-2.72, -0.46, -2.24]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf240.geometry}
        material={nodes.leaf240.material}
        position={[0.42, 4.58, -2.21]}
        rotation={[-2.15, 0.58, 1.26]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf241.geometry}
        material={nodes.leaf241.material}
        position={[0.68, 3.45, 0.58]}
        rotation={[1.64, 0.36, -2.14]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf242.geometry}
        material={nodes.leaf242.material}
        position={[-0.39, 4.04, -0.49]}
        rotation={[-2.82, -0.52, 2.87]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf243.geometry}
        material={nodes.leaf243.material}
        position={[-0.54, 3.89, 0.16]}
        rotation={[2.53, -0.17, 1.58]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf244.geometry}
        material={nodes.leaf244.material}
        position={[0.6, 4.51, -1.18]}
        rotation={[0.73, -0.52, 1.52]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf245.geometry}
        material={nodes.leaf245.material}
        position={[1.22, 3.96, 0.91]}
        rotation={[2.15, -1.24, 0.94]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf246.geometry}
        material={nodes.leaf246.material}
        position={[-0.76, 4.26, 0.62]}
        rotation={[-0.18, -1.25, 0.65]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf247.geometry}
        material={nodes.leaf247.material}
        position={[1.48, 3.97, 0.18]}
        rotation={[1.09, -0.58, 2.6]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf248.geometry}
        material={nodes.leaf248.material}
        position={[-0.33, 3.92, -0.4]}
        rotation={[-3.05, -0.26, 1.96]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf249.geometry}
        material={nodes.leaf249.material}
        position={[0.95, 3.93, 0.48]}
        rotation={[-0.54, -0.32, 0.63]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf250.geometry}
        material={nodes.leaf250.material}
        position={[-1.16, 4.3, 1.52]}
        rotation={[0.86, 0, 0.38]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf251.geometry}
        material={nodes.leaf251.material}
        position={[0.73, 4.55, -2.02]}
        rotation={[2.49, 0.77, -2.53]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf252.geometry}
        material={nodes.leaf252.material}
        position={[-1.08, 4.86, 0.17]}
        rotation={[1.38, 1.12, 0.19]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf253.geometry}
        material={nodes.leaf253.material}
        position={[-1.14, 4.25, 1.45]}
        rotation={[-2.4, 0.1, -0.07]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf254.geometry}
        material={nodes.leaf254.material}
        position={[0.46, 4.28, -1.14]}
        rotation={[-0.9, -0.36, 0.39]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf255.geometry}
        material={nodes.leaf255.material}
        position={[0.65, 3.51, 0.65]}
        rotation={[0.89, 0.08, 0.42]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf256.geometry}
        material={nodes.leaf256.material}
        position={[-0.25, 5.28, -2.17]}
        rotation={[-3.07, 0.37, 1.71]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf257.geometry}
        material={nodes.leaf257.material}
        position={[0.66, 4.66, -1.46]}
        rotation={[1.49, -0.44, 1.8]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf258.geometry}
        material={nodes.leaf258.material}
        position={[1.65, 4.01, 0.01]}
        rotation={[-1.02, -0.24, -1.93]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf259.geometry}
        material={nodes.leaf259.material}
        position={[0.95, 4.59, 0.26]}
        rotation={[-2.86, -0.15, 2.4]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf260.geometry}
        material={nodes.leaf260.material}
        position={[-0.37, 3.54, 0.23]}
        rotation={[-2.61, 0.48, 2.93]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf261.geometry}
        material={nodes.leaf261.material}
        position={[0.53, 4.53, -2.24]}
        rotation={[-0.88, 0.33, -0.95]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf262.geometry}
        material={nodes.leaf262.material}
        position={[-0.81, 4.77, -0.05]}
        rotation={[-1.7, -0.23, 2.49]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf263.geometry}
        material={nodes.leaf263.material}
        position={[1.12, 4.37, -1.95]}
        rotation={[-2.79, -0.61, 2.18]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf264.geometry}
        material={nodes.leaf264.material}
        position={[0.07, 5.28, -1.47]}
        rotation={[-2.89, 0.98, 2.72]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf265.geometry}
        material={nodes.leaf265.material}
        position={[-0.51, 3.74, 0.35]}
        rotation={[-2.42, 0.63, -2.67]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf266.geometry}
        material={nodes.leaf266.material}
        position={[0.69, 4.53, -1.37]}
        rotation={[2.88, -0.29, 1.52]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf267.geometry}
        material={nodes.leaf267.material}
        position={[1.68, 4.02, 0.04]}
        rotation={[1.52, -1.16, 2.43]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf268.geometry}
        material={nodes.leaf268.material}
        position={[0.4, 4.62, -1.33]}
        rotation={[1, 0.76, -0.89]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf269.geometry}
        material={nodes.leaf269.material}
        position={[0.05, 5.16, -1.5]}
        rotation={[-2.39, 0.69, -2.19]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf270.geometry}
        material={nodes.leaf270.material}
        position={[-0.6, 4.09, 0.57]}
        rotation={[-1.55, 0.18, 2.62]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf271.geometry}
        material={nodes.leaf271.material}
        position={[-0.91, 4.61, 0.05]}
        rotation={[1.86, 0.01, 2.34]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf272.geometry}
        material={nodes.leaf272.material}
        position={[-0.64, 5.03, 1.66]}
        rotation={[1.33, -0.45, -0.8]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf273.geometry}
        material={nodes.leaf273.material}
        position={[0.93, 4.1, 0.47]}
        rotation={[-0.01, 0.83, -0.45]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf274.geometry}
        material={nodes.leaf274.material}
        position={[0.09, 5.09, -1.59]}
        rotation={[1.15, 0.63, -3.11]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf275.geometry}
        material={nodes.leaf275.material}
        position={[-1.02, 4.93, -0.14]}
        rotation={[1.37, 0.7, -1.94]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf276.geometry}
        material={nodes.leaf276.material}
        position={[0.46, 4.66, -1.47]}
        rotation={[-0.26, -0.19, -0.85]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf277.geometry}
        material={nodes.leaf277.material}
        position={[-0.55, 3.65, 0.49]}
        rotation={[-1.59, 0.38, 2.61]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf278.geometry}
        material={nodes.leaf278.material}
        position={[-0.65, 4.18, -0.63]}
        rotation={[1.91, -0.74, 1.18]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf279.geometry}
        material={nodes.leaf279.material}
        position={[-1.04, 5.2, -0.24]}
        rotation={[2.98, -0.73, -2.82]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf280.geometry}
        material={nodes.leaf280.material}
        position={[-1.05, 4.95, -0.17]}
        rotation={[3.12, 0.75, -2.56]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf281.geometry}
        material={nodes.leaf281.material}
        position={[0.87, 4.6, -1.85]}
        rotation={[2.28, 0.6, -0.08]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf282.geometry}
        material={nodes.leaf282.material}
        position={[0.55, 4.34, -1.14]}
        rotation={[-2.97, -0.78, -1.78]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf283.geometry}
        material={nodes.leaf283.material}
        position={[-0.45, 4.17, 0.71]}
        rotation={[3.06, 0.05, -2.71]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf284.geometry}
        material={nodes.leaf284.material}
        position={[0.55, 4.72, -2.56]}
        rotation={[-1.99, 0.01, -0.88]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf285.geometry}
        material={nodes.leaf285.material}
        position={[-0.55, 3.56, 0.59]}
        rotation={[-1.59, 0.37, 0.83]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf286.geometry}
        material={nodes.leaf286.material}
        position={[1.02, 4.82, 0.24]}
        rotation={[-0.1, 0.3, 0.77]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf287.geometry}
        material={nodes.leaf287.material}
        position={[-0.27, 3.98, -0.38]}
        rotation={[3.11, 0.17, 2.63]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf288.geometry}
        material={nodes.leaf288.material}
        position={[-0.97, 4.2, -0.98]}
        rotation={[1.92, -0.3, 2.28]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf289.geometry}
        material={nodes.leaf289.material}
        position={[-1.03, 4.28, 1.32]}
        rotation={[-1.66, -0.34, -2.85]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf290.geometry}
        material={nodes.leaf290.material}
        position={[-0.56, 3.59, 0.63]}
        rotation={[1.17, 0.1, -0.33]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf291.geometry}
        material={nodes.leaf291.material}
        position={[-0.29, 3.99, -0.49]}
        rotation={[-0.07, -0.64, 0.51]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf292.geometry}
        material={nodes.leaf292.material}
        position={[-0.02, 5.09, -1.9]}
        rotation={[-0.27, 0.28, 1.01]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf293.geometry}
        material={nodes.leaf293.material}
        position={[-0.72, 4.59, 1.18]}
        rotation={[-2.76, 0.47, 1.95]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf294.geometry}
        material={nodes.leaf294.material}
        position={[0.45, 4.56, -1.23]}
        rotation={[1.4, -0.4, 2.66]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf295.geometry}
        material={nodes.leaf295.material}
        position={[0.95, 4.04, 0.53]}
        rotation={[3.04, -0.15, 2.19]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf296.geometry}
        material={nodes.leaf296.material}
        position={[-0.27, 5.32, -2.22]}
        rotation={[1.32, -0.49, 2.19]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf297.geometry}
        material={nodes.leaf297.material}
        position={[-0.94, 4.17, 0.66]}
        rotation={[0.88, 0.45, -0.63]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf298.geometry}
        material={nodes.leaf298.material}
        position={[-0.98, 5.04, -0.23]}
        rotation={[-1.27, -0.53, -0.98]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf299.geometry}
        material={nodes.leaf299.material}
        position={[-0.47, 3.58, 0.65]}
        rotation={[-1.01, -1.43, 0.46]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf300.geometry}
        material={nodes.leaf300.material}
        position={[0.82, 4.5, -1.83]}
        rotation={[-1.01, -1.15, -0.62]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf301.geometry}
        material={nodes.leaf301.material}
        position={[-0.5, 3.55, 0.3]}
        rotation={[0.08, -0.8, -2.49]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf302.geometry}
        material={nodes.leaf302.material}
        position={[-0.52, 3.93, 0.26]}
        rotation={[-0.32, -0.68, -0.81]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf303.geometry}
        material={nodes.leaf303.material}
        position={[0.52, 4.74, -1.41]}
        rotation={[-2.63, -0.18, 2.52]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf304.geometry}
        material={nodes.leaf304.material}
        position={[-0.64, 4.19, 0.66]}
        rotation={[3.12, 0.75, 2.86]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf305.geometry}
        material={nodes.leaf305.material}
        position={[0.99, 4.55, -1.96]}
        rotation={[1.14, 0.52, 1.66]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf306.geometry}
        material={nodes.leaf306.material}
        position={[-0.78, 4.77, -0.13]}
        rotation={[1.04, -0.42, -0.63]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf307.geometry}
        material={nodes.leaf307.material}
        position={[-0.79, 4.47, 1.05]}
        rotation={[-0.4, -0.43, -0.21]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf308.geometry}
        material={nodes.leaf308.material}
        position={[0.82, 4.51, -2.03]}
        rotation={[-1.13, 0.82, -2.9]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf309.geometry}
        material={nodes.leaf309.material}
        position={[1.09, 4.47, -1.93]}
        rotation={[2.77, -0.08, 1.86]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf310.geometry}
        material={nodes.leaf310.material}
        position={[0.07, 5.22, -1.55]}
        rotation={[0.54, -0.17, 1.42]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf311.geometry}
        material={nodes.leaf311.material}
        position={[0.57, 4.44, -1.15]}
        rotation={[0.06, -0.81, -0.95]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf312.geometry}
        material={nodes.leaf312.material}
        position={[0.9, 4.52, -1.78]}
        rotation={[-1.25, -0.67, -1.51]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf313.geometry}
        material={nodes.leaf313.material}
        position={[-0.43, 3.88, 0.25]}
        rotation={[-0.26, 0.35, 1.58]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf314.geometry}
        material={nodes.leaf314.material}
        position={[-0.06, 5.12, -1.83]}
        rotation={[0.92, 0.98, -0.31]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf315.geometry}
        material={nodes.leaf315.material}
        position={[0.6, 4.53, -2.2]}
        rotation={[-1.35, -0.09, -0.38]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf316.geometry}
        material={nodes.leaf316.material}
        position={[-0.47, 4.14, -0.31]}
        rotation={[-1.14, 0.37, 1.62]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf317.geometry}
        material={nodes.leaf317.material}
        position={[0.63, 4.8, -2.62]}
        rotation={[2.94, -0.39, 2.64]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf318.geometry}
        material={nodes.leaf318.material}
        position={[1.44, 3.94, 0.27]}
        rotation={[0.52, -0.1, 2.76]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf319.geometry}
        material={nodes.leaf319.material}
        position={[-0.85, 4.65, -0.02]}
        rotation={[-3.06, -0.71, 1.79]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf320.geometry}
        material={nodes.leaf320.material}
        position={[-1, 4.84, -0.19]}
        rotation={[-0.72, -0.6, 0.6]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf321.geometry}
        material={nodes.leaf321.material}
        position={[1.43, 4.35, 1.13]}
        rotation={[-3.03, -0.9, -3.05]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf322.geometry}
        material={nodes.leaf322.material}
        position={[0.14, 5.16, -1.51]}
        rotation={[1.43, 0.47, 1.11]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf323.geometry}
        material={nodes.leaf323.material}
        position={[-0.18, 5.17, -2.12]}
        rotation={[-2.31, -0.91, 0.28]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf324.geometry}
        material={nodes.leaf324.material}
        position={[0.04, 5.03, -1.69]}
        rotation={[-0.83, 0.15, 0.15]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf325.geometry}
        material={nodes.leaf325.material}
        position={[-0.4, 3.84, 0.26]}
        rotation={[1.77, 0.36, 2.57]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf326.geometry}
        material={nodes.leaf326.material}
        position={[-0.37, 3.54, 0.23]}
        rotation={[-1.41, -0.1, 2.51]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf327.geometry}
        material={nodes.leaf327.material}
        position={[0.52, 4.75, -2.52]}
        rotation={[0.96, 0.34, -0.21]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf328.geometry}
        material={nodes.leaf328.material}
        position={[-0.17, 5.18, -2.17]}
        rotation={[-2.07, -0.24, -0.22]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf329.geometry}
        material={nodes.leaf329.material}
        position={[-0.06, 4.78, 1.28]}
        rotation={[-2.87, -0.25, -1.97]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf330.geometry}
        material={nodes.leaf330.material}
        position={[-0.01, 5.43, -1.48]}
        rotation={[-0.64, -0.41, -0.55]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf331.geometry}
        material={nodes.leaf331.material}
        position={[-0.97, 4.8, -0.2]}
        rotation={[-0.89, 0.58, 1.45]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf332.geometry}
        material={nodes.leaf332.material}
        position={[-0.43, 3.99, -0.47]}
        rotation={[2.79, -0.08, 1.95]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf333.geometry}
        material={nodes.leaf333.material}
        position={[1.01, 4.74, 0.24]}
        rotation={[-0.58, -0.55, 0.79]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf334.geometry}
        material={nodes.leaf334.material}
        position={[1.29, 4.1, 1.03]}
        rotation={[-2.76, -1.22, -3.02]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf335.geometry}
        material={nodes.leaf335.material}
        position={[-1.21, 4.52, 1.34]}
        rotation={[0.22, 0.58, 0.39]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf336.geometry}
        material={nodes.leaf336.material}
        position={[-1.05, 4.24, -0.99]}
        rotation={[-2.37, 1.5, 3.05]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf337.geometry}
        material={nodes.leaf337.material}
        position={[0.14, 4.96, -1.49]}
        rotation={[-2.4, 0.69, 1.33]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf338.geometry}
        material={nodes.leaf338.material}
        position={[-0.93, 4.54, 0.05]}
        rotation={[-0.51, 0.1, 1.51]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf339.geometry}
        material={nodes.leaf339.material}
        position={[-0.85, 4.17, -0.81]}
        rotation={[-0.18, 0.4, -0.02]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf340.geometry}
        material={nodes.leaf340.material}
        position={[0.53, 4.43, -1.06]}
        rotation={[-1.65, -0.3, -1.59]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf341.geometry}
        material={nodes.leaf341.material}
        position={[-1.34, 4.53, 1.47]}
        rotation={[1.28, -0.07, -1.57]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf342.geometry}
        material={nodes.leaf342.material}
        position={[-0.94, 4.32, 0.73]}
        rotation={[0.49, -0.17, -0.04]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf343.geometry}
        material={nodes.leaf343.material}
        position={[0.5, 4.71, -1.3]}
        rotation={[1.12, 0.65, 1.97]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf344.geometry}
        material={nodes.leaf344.material}
        position={[-1.41, 4.56, 1.6]}
        rotation={[1.29, 0.62, -1.02]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf345.geometry}
        material={nodes.leaf345.material}
        position={[0.32, 4.72, -1.42]}
        rotation={[-1.43, 0, -0.42]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf346.geometry}
        material={nodes.leaf346.material}
        position={[0.63, 3.28, 0.64]}
        rotation={[-1.3, -0.5, 0.4]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf347.geometry}
        material={nodes.leaf347.material}
        position={[-0.52, 3.64, 0.27]}
        rotation={[-0.26, 0.54, 0.63]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf348.geometry}
        material={nodes.leaf348.material}
        position={[0.21, 4.87, -1.48]}
        rotation={[0.93, 1.02, 0.44]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf349.geometry}
        material={nodes.leaf349.material}
        position={[-0.96, 4.19, 0.76]}
        rotation={[-1.63, 0.13, 1.66]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf350.geometry}
        material={nodes.leaf350.material}
        position={[-0.47, 5.47, -2.36]}
        rotation={[1.3, -0.31, 1.88]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf351.geometry}
        material={nodes.leaf351.material}
        position={[-1.04, 4.34, 1.34]}
        rotation={[1.32, -0.78, 0.05]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf352.geometry}
        material={nodes.leaf352.material}
        position={[-0.53, 3.55, 0.48]}
        rotation={[-1.2, 0.12, -0.12]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf353.geometry}
        material={nodes.leaf353.material}
        position={[-0.52, 4.11, -0.56]}
        rotation={[0.79, 0.11, 1.82]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf354.geometry}
        material={nodes.leaf354.material}
        position={[0.75, 3.37, 0.67]}
        rotation={[-2.71, -0.26, 2.34]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf355.geometry}
        material={nodes.leaf355.material}
        position={[-0.5, 4.95, -0.04]}
        rotation={[1.68, 0.22, -2.67]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf356.geometry}
        material={nodes.leaf356.material}
        position={[1.87, 4.15, -0.16]}
        rotation={[-1.2, -0.94, -2.3]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf357.geometry}
        material={nodes.leaf357.material}
        position={[0.72, 4.63, -1.49]}
        rotation={[0.83, -0.42, -0.24]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf358.geometry}
        material={nodes.leaf358.material}
        position={[1.19, 3.98, 0.83]}
        rotation={[-3.05, 1.37, -2.22]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf359.geometry}
        material={nodes.leaf359.material}
        position={[0.09, 5.02, -1.67]}
        rotation={[-2.42, 0.11, 0.58]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf360.geometry}
        material={nodes.leaf360.material}
        position={[1, 4.08, 0.41]}
        rotation={[-0.19, -0.73, 0.68]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf361.geometry}
        material={nodes.leaf361.material}
        position={[-0.37, 3.56, 0.34]}
        rotation={[2.6, -0.44, 2.36]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf362.geometry}
        material={nodes.leaf362.material}
        position={[0.85, 3.52, 0.72]}
        rotation={[2.37, 0.08, -2.92]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf363.geometry}
        material={nodes.leaf363.material}
        position={[0.95, 3.93, 0.48]}
        rotation={[-0.41, 0.07, -1.06]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf364.geometry}
        material={nodes.leaf364.material}
        position={[-1.17, 5.31, -0.2]}
        rotation={[1.35, 0.91, -1.56]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf365.geometry}
        material={nodes.leaf365.material}
        position={[-0.95, 4.22, 0.84]}
        rotation={[-1.54, -0.1, -2.6]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf366.geometry}
        material={nodes.leaf366.material}
        position={[0.54, 3.35, 0.75]}
        rotation={[-2.47, -0.2, 2.24]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf367.geometry}
        material={nodes.leaf367.material}
        position={[0.81, 4.51, -2.07]}
        rotation={[-2.57, -0.58, -2.6]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf368.geometry}
        material={nodes.leaf368.material}
        position={[0.46, 4.74, -1.47]}
        rotation={[0.5, 0.5, 1.16]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf369.geometry}
        material={nodes.leaf369.material}
        position={[-0.8, 4.68, -0.12]}
        rotation={[-1.38, 0.46, 0.73]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf370.geometry}
        material={nodes.leaf370.material}
        position={[-0.61, 3.73, 0.18]}
        rotation={[1.81, 1.16, -2.78]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf371.geometry}
        material={nodes.leaf371.material}
        position={[0.07, 5.18, -1.55]}
        rotation={[0.23, -0.01, -1.5]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf372.geometry}
        material={nodes.leaf372.material}
        position={[0.11, 5.05, -1.72]}
        rotation={[0.07, -1.06, -0.7]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf373.geometry}
        material={nodes.leaf373.material}
        position={[-0.06, 5.18, -1.85]}
        rotation={[0.42, -1.02, 0.55]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf374.geometry}
        material={nodes.leaf374.material}
        position={[-0.47, 3.58, 0.65]}
        rotation={[-1.05, -0.16, -1.71]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf375.geometry}
        material={nodes.leaf375.material}
        position={[-1.14, 4.25, 1.71]}
        rotation={[0.13, -0.75, -1.06]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf376.geometry}
        material={nodes.leaf376.material}
        position={[-0.94, 4.73, -0.18]}
        rotation={[-0.33, 0.55, -0.43]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf377.geometry}
        material={nodes.leaf377.material}
        position={[-0.45, 4.03, -0.58]}
        rotation={[-0.16, 0.4, 1.59]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf378.geometry}
        material={nodes.leaf378.material}
        position={[-1.24, 4.44, 1.3]}
        rotation={[1.13, 0.07, -0.39]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf379.geometry}
        material={nodes.leaf379.material}
        position={[-1.22, 4.95, 0.42]}
        rotation={[2.89, -0.25, -2.45]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf380.geometry}
        material={nodes.leaf380.material}
        position={[0.71, 4.62, -1.57]}
        rotation={[-0.28, -0.81, 0.04]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf381.geometry}
        material={nodes.leaf381.material}
        position={[-0.84, 4.3, 0.78]}
        rotation={[2.01, -1.05, 2.97]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf382.geometry}
        material={nodes.leaf382.material}
        position={[0.43, 4.53, -1.24]}
        rotation={[0.03, 1.18, -0.13]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf383.geometry}
        material={nodes.leaf383.material}
        position={[-0.25, 5.3, -2.27]}
        rotation={[-0.48, 0.38, -0.73]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf384.geometry}
        material={nodes.leaf384.material}
        position={[-0.13, 5.24, -2.08]}
        rotation={[1.39, 0.38, -2.85]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf385.geometry}
        material={nodes.leaf385.material}
        position={[0.5, 4.71, -1.3]}
        rotation={[-1.01, -0.99, -1.6]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf386.geometry}
        material={nodes.leaf386.material}
        position={[-1.07, 4.87, 0.2]}
        rotation={[0.61, -1.43, -0.82]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf387.geometry}
        material={nodes.leaf387.material}
        position={[-0.82, 4.54, 1.04]}
        rotation={[2.45, -1.2, 1.92]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf388.geometry}
        material={nodes.leaf388.material}
        position={[1.47, 4.44, 1.2]}
        rotation={[0.73, 0.53, 0.74]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf389.geometry}
        material={nodes.leaf389.material}
        position={[-1.07, 4.37, 1.28]}
        rotation={[3.12, 0.68, 2.24]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf390.geometry}
        material={nodes.leaf390.material}
        position={[-1.13, 4.26, 1.66]}
        rotation={[0.85, -0.68, 1.25]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf391.geometry}
        material={nodes.leaf391.material}
        position={[0.87, 4.51, -2.03]}
        rotation={[-2.18, 0.55, 0.12]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf392.geometry}
        material={nodes.leaf392.material}
        position={[0.51, 4.67, -2.49]}
        rotation={[1.49, 1.33, -2.57]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf393.geometry}
        material={nodes.leaf393.material}
        position={[-0.74, 5.66, -2.54]}
        rotation={[0.86, 0.77, -1.9]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf394.geometry}
        material={nodes.leaf394.material}
        position={[-0.51, 4.1, 0.58]}
        rotation={[-0.17, -0.76, -1.18]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf395.geometry}
        material={nodes.leaf395.material}
        position={[0.42, 4.44, -1.24]}
        rotation={[0.41, -0.48, -0.53]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf396.geometry}
        material={nodes.leaf396.material}
        position={[-0.24, 3.9, -0.38]}
        rotation={[-0.09, 1.32, 0.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf397.geometry}
        material={nodes.leaf397.material}
        position={[-0.5, 4, -0.59]}
        rotation={[-1.67, 0.95, 0.59]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf398.geometry}
        material={nodes.leaf398.material}
        position={[-0.54, 3.63, 0.44]}
        rotation={[-1.03, 0.92, 1.75]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf399.geometry}
        material={nodes.leaf399.material}
        position={[-1.08, 4.83, 0.24]}
        rotation={[-2.65, 0.06, 2.03]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf400.geometry}
        material={nodes.leaf400.material}
        position={[-0.19, 5.28, -2.22]}
        rotation={[0.95, -0.64, 1.85]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf401.geometry}
        material={nodes.leaf401.material}
        position={[1.39, 4.25, 1.08]}
        rotation={[-2.2, -1.04, -3.01]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf402.geometry}
        material={nodes.leaf402.material}
        position={[0.63, 4.43, -1.27]}
        rotation={[2.56, -0.43, 2.23]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf403.geometry}
        material={nodes.leaf403.material}
        position={[-0.36, 5.33, -2.34]}
        rotation={[-0.76, 0.03, 1.38]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf404.geometry}
        material={nodes.leaf404.material}
        position={[1.39, 3.85, 0.29]}
        rotation={[2.64, -1.41, 2.15]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf405.geometry}
        material={nodes.leaf405.material}
        position={[0.75, 4.51, -1.48]}
        rotation={[2.38, -0.4, 3.12]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf406.geometry}
        material={nodes.leaf406.material}
        position={[-0.41, 3.7, 0.4]}
        rotation={[0.83, 0.7, -2.22]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf407.geometry}
        material={nodes.leaf407.material}
        position={[-0.1, 5.19, -2.07]}
        rotation={[-1.66, -0.54, -2.62]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf408.geometry}
        material={nodes.leaf408.material}
        position={[1.37, 4.32, 1.12]}
        rotation={[1.86, -0.41, 0.32]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf409.geometry}
        material={nodes.leaf409.material}
        position={[-0.45, 5.37, -2.32]}
        rotation={[2.06, -0.53, -3.1]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf410.geometry}
        material={nodes.leaf410.material}
        position={[-0.39, 4.13, 0.63]}
        rotation={[1.65, -1.32, 1.08]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf411.geometry}
        material={nodes.leaf411.material}
        position={[0.42, 4.59, -1.37]}
        rotation={[-0.21, 0.61, 0.74]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf412.geometry}
        material={nodes.leaf412.material}
        position={[-1.21, 5.6, -0.1]}
        rotation={[2.46, 0.69, 1.96]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf413.geometry}
        material={nodes.leaf413.material}
        position={[0.72, 4.48, -1.56]}
        rotation={[-3.12, -0.98, -1.48]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf414.geometry}
        material={nodes.leaf414.material}
        position={[-0.34, 5.33, -2.23]}
        rotation={[-0.06, 1.07, -0.67]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf415.geometry}
        material={nodes.leaf415.material}
        position={[0.46, 4.57, -2.38]}
        rotation={[-0.29, 0.42, -1.45]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf416.geometry}
        material={nodes.leaf416.material}
        position={[-0.58, 4.69, 1.23]}
        rotation={[1.37, 0.72, -1.59]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf417.geometry}
        material={nodes.leaf417.material}
        position={[0.09, 5.09, -1.49]}
        rotation={[-0.51, 0.89, -0.59]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf418.geometry}
        material={nodes.leaf418.material}
        position={[0.01, 5.13, -1.72]}
        rotation={[0.15, -0.31, 2.59]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf419.geometry}
        material={nodes.leaf419.material}
        position={[0.05, 5.11, -1.81]}
        rotation={[2.62, -0.81, 2.2]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf420.geometry}
        material={nodes.leaf420.material}
        position={[0.61, 4.46, -1.48]}
        rotation={[-0.34, -0.15, 1.07]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf421.geometry}
        material={nodes.leaf421.material}
        position={[-0.5, 4.93, 1.45]}
        rotation={[2.63, -0.37, 1.18]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf422.geometry}
        material={nodes.leaf422.material}
        position={[-0.31, 3.66, 0.26]}
        rotation={[1.91, -0.6, 2.52]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf423.geometry}
        material={nodes.leaf423.material}
        position={[-0.89, 4.29, 0.28]}
        rotation={[-1.51, -0.19, 1.71]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf424.geometry}
        material={nodes.leaf424.material}
        position={[-1.04, 5.19, -0.26]}
        rotation={[0.38, -0.1, 0.01]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf425.geometry}
        material={nodes.leaf425.material}
        position={[-0.45, 4.07, -0.53]}
        rotation={[1.97, 0.98, 1.14]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf426.geometry}
        material={nodes.leaf426.material}
        position={[-0.97, 4.73, -0.11]}
        rotation={[1.88, -0.19, -1.11]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf427.geometry}
        material={nodes.leaf427.material}
        position={[-0.4, 3.84, 0.26]}
        rotation={[-2.89, -1.02, -2.55]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf428.geometry}
        material={nodes.leaf428.material}
        position={[-0.88, 4.63, -0.1]}
        rotation={[0.49, 0.93, -0.58]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf429.geometry}
        material={nodes.leaf429.material}
        position={[-0.67, 4.64, 1.09]}
        rotation={[-1.26, -0.02, -1.05]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf430.geometry}
        material={nodes.leaf430.material}
        position={[-0.91, 4.56, 0.13]}
        rotation={[1.53, -0.97, -2.57]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf431.geometry}
        material={nodes.leaf431.material}
        position={[1.11, 4.46, -1.95]}
        rotation={[0.61, -0.76, 0.68]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf432.geometry}
        material={nodes.leaf432.material}
        position={[0.07, 5.08, -1.59]}
        rotation={[3, 1.36, -2.15]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf433.geometry}
        material={nodes.leaf433.material}
        position={[-0.96, 4.19, -0.85]}
        rotation={[-2.25, 0.87, 1.45]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf434.geometry}
        material={nodes.leaf434.material}
        position={[-1.04, 4.19, -1.03]}
        rotation={[2.56, 1.31, 2.47]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf435.geometry}
        material={nodes.leaf435.material}
        position={[0.75, 4.59, -1.75]}
        rotation={[0.11, 0.22, -1.2]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf436.geometry}
        material={nodes.leaf436.material}
        position={[0.77, 4.52, -2]}
        rotation={[-2.27, -0.21, 2.84]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf437.geometry}
        material={nodes.leaf437.material}
        position={[-0.14, 5.16, -1.96]}
        rotation={[0.83, 0.39, -0.17]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf438.geometry}
        material={nodes.leaf438.material}
        position={[0.48, 4.66, -2.48]}
        rotation={[-0.94, 0.4, 0.35]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf439.geometry}
        material={nodes.leaf439.material}
        position={[-0.52, 3.55, 0.36]}
        rotation={[-2.07, 1.43, -0.25]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf440.geometry}
        material={nodes.leaf440.material}
        position={[-0.98, 4.22, -0.88]}
        rotation={[-1.93, 0.26, 2.26]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf441.geometry}
        material={nodes.leaf441.material}
        position={[-0.22, 5.18, -2.14]}
        rotation={[-2.66, 0.62, 1.63]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf442.geometry}
        material={nodes.leaf442.material}
        position={[-1.14, 4.25, 1.45]}
        rotation={[-0.6, 0.01, 1.13]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf443.geometry}
        material={nodes.leaf443.material}
        position={[-1.31, 4.55, 1.48]}
        rotation={[1.69, -0.04, 0.21]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf444.geometry}
        material={nodes.leaf444.material}
        position={[-1.16, 5.24, -0.25]}
        rotation={[2.46, 0.72, -1.91]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf445.geometry}
        material={nodes.leaf445.material}
        position={[-0.49, 5.43, -2.42]}
        rotation={[-1.25, 0.31, 0.16]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf446.geometry}
        material={nodes.leaf446.material}
        position={[-0.56, 3.59, 0.63]}
        rotation={[-0.55, 0.66, 1.41]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf447.geometry}
        material={nodes.leaf447.material}
        position={[-0.64, 4.79, -0.07]}
        rotation={[1.46, -1.32, 0.51]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf448.geometry}
        material={nodes.leaf448.material}
        position={[-0.93, 4.54, 0]}
        rotation={[-0.96, -0.05, 0.49]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf449.geometry}
        material={nodes.leaf449.material}
        position={[-1.22, 4.2, 1.86]}
        rotation={[-0.21, 0.16, 0.4]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf450.geometry}
        material={nodes.leaf450.material}
        position={[-0.52, 4.89, 0]}
        rotation={[2.95, 0.48, 2.62]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf451.geometry}
        material={nodes.leaf451.material}
        position={[-0.61, 3.73, 0.18]}
        rotation={[-0.12, 0.52, 1.61]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf452.geometry}
        material={nodes.leaf452.material}
        position={[-0.39, 4.13, 0.63]}
        rotation={[0.57, 0.1, -0.41]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf453.geometry}
        material={nodes.leaf453.material}
        position={[1.01, 4.74, 0.24]}
        rotation={[-0.51, 0.48, -0.33]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf454.geometry}
        material={nodes.leaf454.material}
        position={[-1.13, 4.9, 0.34]}
        rotation={[-1.61, 0.06, -2.98]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf455.geometry}
        material={nodes.leaf455.material}
        position={[-0.5, 4.82, 1.38]}
        rotation={[-2.38, -0.03, 2.17]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf456.geometry}
        material={nodes.leaf456.material}
        position={[-1.06, 4.81, 0.21]}
        rotation={[-0.41, 0.47, 1.97]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf457.geometry}
        material={nodes.leaf457.material}
        position={[-0.99, 4.87, -0.22]}
        rotation={[-2.05, 0.32, 1.46]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf458.geometry}
        material={nodes.leaf458.material}
        position={[-0.8, 4.4, -0.38]}
        rotation={[2.93, -0.14, 3.01]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf459.geometry}
        material={nodes.leaf459.material}
        position={[0.32, 4.82, -1.53]}
        rotation={[-0.7, -0.46, -1.73]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf460.geometry}
        material={nodes.leaf460.material}
        position={[0.41, 4.81, -1.36]}
        rotation={[1.25, -0.67, 0.39]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf461.geometry}
        material={nodes.leaf461.material}
        position={[0.99, 4.51, -1.89]}
        rotation={[-1.26, -0.62, -1.09]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf462.geometry}
        material={nodes.leaf462.material}
        position={[0.06, 5.29, -1.52]}
        rotation={[0.61, -0.06, 1.76]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf463.geometry}
        material={nodes.leaf463.material}
        position={[-0.66, 4.09, -0.59]}
        rotation={[-2.91, -0.77, 2.14]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf464.geometry}
        material={nodes.leaf464.material}
        position={[0.98, 4.26, 0.34]}
        rotation={[-0.37, -0.66, -0.1]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf465.geometry}
        material={nodes.leaf465.material}
        position={[0.5, 4.46, -1.08]}
        rotation={[3, 1.21, -2.41]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf466.geometry}
        material={nodes.leaf466.material}
        position={[-1.05, 5.01, -0.25]}
        rotation={[-2.28, 0.37, 0.73]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf467.geometry}
        material={nodes.leaf467.material}
        position={[0.07, 5.18, -1.55]}
        rotation={[-0.47, -0.65, 0.8]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf468.geometry}
        material={nodes.leaf468.material}
        position={[-0.56, 4.75, 1.21]}
        rotation={[0.46, -0.1, -0.43]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf469.geometry}
        material={nodes.leaf469.material}
        position={[0.9, 4.59, -2.01]}
        rotation={[0.97, 0.96, 1.29]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf470.geometry}
        material={nodes.leaf470.material}
        position={[-0.54, 4.64, 1.2]}
        rotation={[-3.12, 0.42, -1.97]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf471.geometry}
        material={nodes.leaf471.material}
        position={[-0.91, 4.69, 0.01]}
        rotation={[-2.86, 0.3, -2.5]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf472.geometry}
        material={nodes.leaf472.material}
        position={[-1.07, 4.2, -1.02]}
        rotation={[-2.15, 0.93, 1.25]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf473.geometry}
        material={nodes.leaf473.material}
        position={[0.26, 4.87, -1.43]}
        rotation={[2.11, 0.25, -2.94]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf474.geometry}
        material={nodes.leaf474.material}
        position={[0.42, 4.51, -2.22]}
        rotation={[-0.87, -0.59, -2.81]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf475.geometry}
        material={nodes.leaf475.material}
        position={[-1.15, 4.23, 1.51]}
        rotation={[-0.49, 0.15, -0.95]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf476.geometry}
        material={nodes.leaf476.material}
        position={[0.95, 4.21, 0.43]}
        rotation={[-2.02, -0.67, -2.57]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf477.geometry}
        material={nodes.leaf477.material}
        position={[1.68, 4.02, 0.04]}
        rotation={[-2.59, -0.44, 2.7]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf478.geometry}
        material={nodes.leaf478.material}
        position={[-0.61, 3.73, 0.18]}
        rotation={[0.78, -0.04, 0.66]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf479.geometry}
        material={nodes.leaf479.material}
        position={[-0.24, 4.76, 1.26]}
        rotation={[-1.82, 0.26, 2.85]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf480.geometry}
        material={nodes.leaf480.material}
        position={[0.8, 4.51, -1.59]}
        rotation={[1.6, -0.41, 1.64]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf481.geometry}
        material={nodes.leaf481.material}
        position={[0.15, 4.99, -1.63]}
        rotation={[-1.61, 0, 1.17]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf482.geometry}
        material={nodes.leaf482.material}
        position={[-0.56, 5.53, -2.47]}
        rotation={[0.45, -0.29, 0.56]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf483.geometry}
        material={nodes.leaf483.material}
        position={[-0.85, 4.17, -0.81]}
        rotation={[0.51, 1.04, 0.31]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf484.geometry}
        material={nodes.leaf484.material}
        position={[-0.5, 4.94, 0.01]}
        rotation={[-2.71, -0.6, -1.55]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf485.geometry}
        material={nodes.leaf485.material}
        position={[-1.08, 4.27, 1.51]}
        rotation={[1.87, -1.07, 2.64]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf486.geometry}
        material={nodes.leaf486.material}
        position={[0.37, 4.89, -1.48]}
        rotation={[3.14, -0.26, 2.79]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf487.geometry}
        material={nodes.leaf487.material}
        position={[-0.47, 4.8, 1.18]}
        rotation={[1.33, 0.53, 0.26]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf488.geometry}
        material={nodes.leaf488.material}
        position={[-0.92, 4.43, 0.19]}
        rotation={[2.18, 0.57, -1.41]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf489.geometry}
        material={nodes.leaf489.material}
        position={[0.82, 4.5, -1.83]}
        rotation={[-2.08, -0.4, -0.93]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf490.geometry}
        material={nodes.leaf490.material}
        position={[1.26, 3.79, 0.37]}
        rotation={[2.16, 0.82, -1.83]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf491.geometry}
        material={nodes.leaf491.material}
        position={[-0.65, 4.84, -0.02]}
        rotation={[-2.1, 1.22, 0.98]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf492.geometry}
        material={nodes.leaf492.material}
        position={[1.29, 4.1, 0.94]}
        rotation={[0.41, 0.2, -1.28]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf493.geometry}
        material={nodes.leaf493.material}
        position={[-1.09, 4.81, 0.18]}
        rotation={[-0.92, -0.38, -2.32]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf494.geometry}
        material={nodes.leaf494.material}
        position={[0.77, 4.55, -1.79]}
        rotation={[0.08, 0.09, -1.48]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf495.geometry}
        material={nodes.leaf495.material}
        position={[-1.02, 4.27, 0.85]}
        rotation={[0.69, -0.25, -0.7]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf496.geometry}
        material={nodes.leaf496.material}
        position={[0.63, 4.63, -1.53]}
        rotation={[2.17, -1.06, 1.77]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf497.geometry}
        material={nodes.leaf497.material}
        position={[0.05, 5.11, -1.81]}
        rotation={[0.89, 0.35, 0.41]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf498.geometry}
        material={nodes.leaf498.material}
        position={[0.59, 4.58, -1.22]}
        rotation={[3.04, 0.63, 2.15]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf499.geometry}
        material={nodes.leaf499.material}
        position={[-0.34, 3.99, -0.36]}
        rotation={[1.01, -0.34, 1.63]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf500.geometry}
        material={nodes.leaf500.material}
        position={[-0.33, 5.05, 0.01]}
        rotation={[-2.63, 1.14, 2.01]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf501.geometry}
        material={nodes.leaf501.material}
        position={[-0.98, 4.74, -0.13]}
        rotation={[2.05, 1.01, -2.93]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf502.geometry}
        material={nodes.leaf502.material}
        position={[0.46, 4.44, -1.33]}
        rotation={[-1.39, 0.42, 2.29]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf503.geometry}
        material={nodes.leaf503.material}
        position={[-1.13, 4.24, 1.68]}
        rotation={[1.75, -1.07, 0.91]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf504.geometry}
        material={nodes.leaf504.material}
        position={[-1.04, 5.05, -0.16]}
        rotation={[3.02, -0.34, -2.45]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf505.geometry}
        material={nodes.leaf505.material}
        position={[-0.85, 4.19, -0.83]}
        rotation={[-2.88, -0.87, -2.42]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf506.geometry}
        material={nodes.leaf506.material}
        position={[-0.39, 4.84, 1.25]}
        rotation={[-0.09, 0.56, -0.45]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf507.geometry}
        material={nodes.leaf507.material}
        position={[0.5, 4.46, -1.08]}
        rotation={[1.58, 0.39, -2.8]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf508.geometry}
        material={nodes.leaf508.material}
        position={[-0.83, 4.41, 0.12]}
        rotation={[-0.42, 0.16, -1.09]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf509.geometry}
        material={nodes.leaf509.material}
        position={[0.95, 4.43, 0.34]}
        rotation={[-1.61, -1.04, -2.54]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf510.geometry}
        material={nodes.leaf510.material}
        position={[0.38, 4.8, -1.36]}
        rotation={[-2.17, -0.63, -2.86]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf511.geometry}
        material={nodes.leaf511.material}
        position={[-0.61, 3.73, 0.18]}
        rotation={[0.4, 0.5, -0.61]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf512.geometry}
        material={nodes.leaf512.material}
        position={[0.48, 4.62, -1.25]}
        rotation={[-2.76, 0.65, -2.69]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf513.geometry}
        material={nodes.leaf513.material}
        position={[-0.63, 4.11, 0.66]}
        rotation={[2.55, 0.63, -1.7]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf514.geometry}
        material={nodes.leaf514.material}
        position={[0.84, 4.52, -1.96]}
        rotation={[-1.78, 0.79, 0.87]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf515.geometry}
        material={nodes.leaf515.material}
        position={[0.38, 4.68, -1.44]}
        rotation={[-0.34, -0.28, 1.41]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf516.geometry}
        material={nodes.leaf516.material}
        position={[1, 4.11, 0.47]}
        rotation={[2.41, -1.23, 1.73]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf517.geometry}
        material={nodes.leaf517.material}
        position={[1.3, 4.07, 0.96]}
        rotation={[-2.37, -0.84, -2.28]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf518.geometry}
        material={nodes.leaf518.material}
        position={[0.57, 4.74, -2.59]}
        rotation={[0.96, 0.91, -0.09]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf519.geometry}
        material={nodes.leaf519.material}
        position={[-0.45, 3.55, 0.51]}
        rotation={[-1.92, -0.21, -0.17]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf520.geometry}
        material={nodes.leaf520.material}
        position={[-0.36, 3.75, -0.05]}
        rotation={[2.09, -0.45, 2.51]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf521.geometry}
        material={nodes.leaf521.material}
        position={[0.72, 3.51, 0.71]}
        rotation={[0.61, 1.01, -2.28]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf522.geometry}
        material={nodes.leaf522.material}
        position={[-0.93, 4.6, -0.05]}
        rotation={[-1.84, 0.22, 2.33]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf523.geometry}
        material={nodes.leaf523.material}
        position={[-0.21, 5.26, -2.11]}
        rotation={[1.92, -0.12, 1.95]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf524.geometry}
        material={nodes.leaf524.material}
        position={[-0.68, 4.1, -0.66]}
        rotation={[1.68, 1.2, -1.95]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf525.geometry}
        material={nodes.leaf525.material}
        position={[-1.21, 4.94, 0.39]}
        rotation={[-2.52, 1.06, -2.88]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf526.geometry}
        material={nodes.leaf526.material}
        position={[0.3, 4.79, -1.52]}
        rotation={[1.24, 1.04, -0.59]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf527.geometry}
        material={nodes.leaf527.material}
        position={[0.42, 4.44, -1.24]}
        rotation={[-1.03, 0.4, 0.06]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf528.geometry}
        material={nodes.leaf528.material}
        position={[0.94, 4.51, -1.86]}
        rotation={[2.24, -0.47, -3.07]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf529.geometry}
        material={nodes.leaf529.material}
        position={[-0.45, 4.11, -0.33]}
        rotation={[-2.11, 0.01, 2.99]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf530.geometry}
        material={nodes.leaf530.material}
        position={[-0.91, 4.79, -0.18]}
        rotation={[0.86, -0.2, 0.07]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf531.geometry}
        material={nodes.leaf531.material}
        position={[1.46, 4.42, 1.24]}
        rotation={[-1.56, 0.83, 0.67]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf532.geometry}
        material={nodes.leaf532.material}
        position={[0.98, 4.3, 0.35]}
        rotation={[1.19, -0.86, 2.12]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf533.geometry}
        material={nodes.leaf533.material}
        position={[-0.06, 5.12, -1.83]}
        rotation={[0.69, 0.27, -1.01]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf534.geometry}
        material={nodes.leaf534.material}
        position={[0.39, 4.64, -1.38]}
        rotation={[-2.24, 0.61, 2.62]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf535.geometry}
        material={nodes.leaf535.material}
        position={[0.95, 3.8, 0.57]}
        rotation={[1.67, 1.25, -1.05]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf536.geometry}
        material={nodes.leaf536.material}
        position={[-0.68, 4.54, 1.15]}
        rotation={[-2.57, 0.28, -1.82]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf537.geometry}
        material={nodes.leaf537.material}
        position={[0.45, 4.56, -1.23]}
        rotation={[3, -0.28, -1.62]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf538.geometry}
        material={nodes.leaf538.material}
        position={[-0.8, 4.28, 0.27]}
        rotation={[-0.82, -0.12, 0.48]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf539.geometry}
        material={nodes.leaf539.material}
        position={[-0.34, 3.79, 0.1]}
        rotation={[1.02, 0.12, 0.71]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf540.geometry}
        material={nodes.leaf540.material}
        position={[-0.43, 4.09, 0.64]}
        rotation={[-1.97, 0.43, -0.46]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf541.geometry}
        material={nodes.leaf541.material}
        position={[-1, 4.81, -0.13]}
        rotation={[2.26, 0.2, -2.97]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf542.geometry}
        material={nodes.leaf542.material}
        position={[-0.98, 4.26, 0.93]}
        rotation={[-1.11, -0.4, -2.56]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf543.geometry}
        material={nodes.leaf543.material}
        position={[-0.25, 4.17, 0.74]}
        rotation={[-3.01, -0.41, 2.43]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf544.geometry}
        material={nodes.leaf544.material}
        position={[-1.04, 5.19, -0.26]}
        rotation={[0.8, -0.1, 0.33]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf545.geometry}
        material={nodes.leaf545.material}
        position={[0.18, 5, -1.61]}
        rotation={[-2.31, -0.61, -1.22]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf546.geometry}
        material={nodes.leaf546.material}
        position={[-0.53, 4.73, 1.14]}
        rotation={[-1.46, -0.82, -0.56]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf547.geometry}
        material={nodes.leaf547.material}
        position={[0.98, 4.06, 0.4]}
        rotation={[-1.04, -0.71, 0.05]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf548.geometry}
        material={nodes.leaf548.material}
        position={[1.57, 3.97, 0.15]}
        rotation={[2.97, -0.78, -2.95]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf549.geometry}
        material={nodes.leaf549.material}
        position={[0.93, 4.48, 0.26]}
        rotation={[0.82, 1.52, 0.1]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf550.geometry}
        material={nodes.leaf550.material}
        position={[-0.58, 4.89, 1.49]}
        rotation={[-2.35, -0.04, 1.4]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf551.geometry}
        material={nodes.leaf551.material}
        position={[0.57, 4.44, -1.15]}
        rotation={[0.67, -1.17, 1.53]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf552.geometry}
        material={nodes.leaf552.material}
        position={[0.75, 4.51, -1.48]}
        rotation={[2.07, -1.08, 1.55]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf553.geometry}
        material={nodes.leaf553.material}
        position={[-0.22, 5.21, -2.24]}
        rotation={[2.37, 1.33, -2.48]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf554.geometry}
        material={nodes.leaf554.material}
        position={[-0.82, 4.74, -0.14]}
        rotation={[-0.4, 0.32, -0.39]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf555.geometry}
        material={nodes.leaf555.material}
        position={[-1.41, 4.59, 1.62]}
        rotation={[1.35, 0.53, 2.21]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf556.geometry}
        material={nodes.leaf556.material}
        position={[-0.8, 4.28, 0.27]}
        rotation={[-0.39, -0.02, -1.2]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf557.geometry}
        material={nodes.leaf557.material}
        position={[-0.86, 4.45, 0.08]}
        rotation={[-0.56, -0.69, -1.11]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf558.geometry}
        material={nodes.leaf558.material}
        position={[0.14, 4.8, 1.29]}
        rotation={[-2.47, -0.29, -2.91]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf559.geometry}
        material={nodes.leaf559.material}
        position={[0.69, 4.62, -1.64]}
        rotation={[2.13, 0.52, 1.68]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf560.geometry}
        material={nodes.leaf560.material}
        position={[-1.05, 4.3, 1.37]}
        rotation={[-2.19, 0.03, 3.13]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf561.geometry}
        material={nodes.leaf561.material}
        position={[1.01, 4.74, 0.28]}
        rotation={[-3.07, 0.94, 2.2]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf562.geometry}
        material={nodes.leaf562.material}
        position={[1.21, 4.06, 0.94]}
        rotation={[2.09, 0.68, -2.72]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf563.geometry}
        material={nodes.leaf563.material}
        position={[0.32, 4.88, -1.53]}
        rotation={[-0.27, -0.08, -1.03]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf564.geometry}
        material={nodes.leaf564.material}
        position={[-0.62, 4.2, 0.64]}
        rotation={[-0.1, 0.27, 2.65]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf565.geometry}
        material={nodes.leaf565.material}
        position={[-0.96, 4.79, 0.05]}
        rotation={[1.65, -0.51, 0.66]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf566.geometry}
        material={nodes.leaf566.material}
        position={[-1.2, 4.22, 1.87]}
        rotation={[2.19, -0.07, -2.62]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf567.geometry}
        material={nodes.leaf567.material}
        position={[-1.21, 4.2, 1.79]}
        rotation={[-0.7, 0.7, -0.55]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf568.geometry}
        material={nodes.leaf568.material}
        position={[0.34, 4.54, -2.28]}
        rotation={[-1.09, 0.66, 1.59]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf569.geometry}
        material={nodes.leaf569.material}
        position={[-1.13, 5.21, -0.22]}
        rotation={[1.11, 0.86, -0.29]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf570.geometry}
        material={nodes.leaf570.material}
        position={[-0.83, 4.34, -0.58]}
        rotation={[2.18, 0.29, -0.76]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf571.geometry}
        material={nodes.leaf571.material}
        position={[-0.56, 4.12, -0.55]}
        rotation={[2.72, -0.63, -2.67]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf572.geometry}
        material={nodes.leaf572.material}
        position={[-0.91, 4.34, 0.79]}
        rotation={[-0.24, 0.06, 0.03]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf573.geometry}
        material={nodes.leaf573.material}
        position={[0.71, 4.49, -1.64]}
        rotation={[-0.18, -0.76, 1.26]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf574.geometry}
        material={nodes.leaf574.material}
        position={[-0.6, 3.7, 0.2]}
        rotation={[-2.11, 0.52, 1.95]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf575.geometry}
        material={nodes.leaf575.material}
        position={[0.68, 4.51, -2.11]}
        rotation={[0.29, 1.38, 2.77]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf576.geometry}
        material={nodes.leaf576.material}
        position={[-0.45, 3.55, 0.51]}
        rotation={[-1.83, -0.22, 0.83]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf577.geometry}
        material={nodes.leaf577.material}
        position={[1.82, 4.13, -0.12]}
        rotation={[1.79, -0.91, 1.86]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf578.geometry}
        material={nodes.leaf578.material}
        position={[-0.97, 4.69, -0.09]}
        rotation={[1.19, 0.94, -1.01]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf579.geometry}
        material={nodes.leaf579.material}
        position={[0.55, 4.34, -1.14]}
        rotation={[-1.12, -0.42, -0.91]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf580.geometry}
        material={nodes.leaf580.material}
        position={[0.47, 3.39, 0.68]}
        rotation={[1.24, -0.03, -2.99]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf581.geometry}
        material={nodes.leaf581.material}
        position={[-0.64, 4.12, 0.51]}
        rotation={[0.34, -1.04, -0.54]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf582.geometry}
        material={nodes.leaf582.material}
        position={[-0.51, 4.79, 1.25]}
        rotation={[-3.13, 0.67, -2.88]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf583.geometry}
        material={nodes.leaf583.material}
        position={[-0.14, 4.1, 0.78]}
        rotation={[-1.63, 0.88, -1]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf584.geometry}
        material={nodes.leaf584.material}
        position={[-0.26, 5.07, 0.05]}
        rotation={[-1.68, 0.48, 2.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf585.geometry}
        material={nodes.leaf585.material}
        position={[-1.36, 4.57, 1.6]}
        rotation={[2.82, -0.33, 2.37]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf586.geometry}
        material={nodes.leaf586.material}
        position={[-0.53, 4.89, 1.37]}
        rotation={[1.4, 0.89, -2.23]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf587.geometry}
        material={nodes.leaf587.material}
        position={[0.25, 4.84, -1.5]}
        rotation={[-0.04, 0.7, -0.8]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf588.geometry}
        material={nodes.leaf588.material}
        position={[-0.84, 4.77, -0.07]}
        rotation={[0.49, -0.25, -1.46]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf589.geometry}
        material={nodes.leaf589.material}
        position={[0.46, 4.44, -1.33]}
        rotation={[0.25, 0.46, -0.75]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf590.geometry}
        material={nodes.leaf590.material}
        position={[0.65, 4.54, -1.6]}
        rotation={[-2.03, 1.06, 2.79]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf591.geometry}
        material={nodes.leaf591.material}
        position={[0.8, 4.51, -1.59]}
        rotation={[2.5, -0.44, 1.43]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf592.geometry}
        material={nodes.leaf592.material}
        position={[-1.07, 4.78, 0.14]}
        rotation={[-0.98, -0.1, 1.64]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf593.geometry}
        material={nodes.leaf593.material}
        position={[-0.52, 3.64, 0.27]}
        rotation={[0.33, 0.21, 0.49]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf594.geometry}
        material={nodes.leaf594.material}
        position={[-0.54, 5.54, -2.44]}
        rotation={[-3.07, 0.8, 2.17]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf595.geometry}
        material={nodes.leaf595.material}
        position={[0.4, 4.62, -1.33]}
        rotation={[2.16, 0.65, 3.11]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf596.geometry}
        material={nodes.leaf596.material}
        position={[-0.54, 3.63, 0.44]}
        rotation={[-1.38, 0.89, 2.14]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf597.geometry}
        material={nodes.leaf597.material}
        position={[1.36, 3.82, 0.38]}
        rotation={[2.56, -0.57, 1.73]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf598.geometry}
        material={nodes.leaf598.material}
        position={[-0.53, 4.09, 0.67]}
        rotation={[-1.63, -0.94, -0.66]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf599.geometry}
        material={nodes.leaf599.material}
        position={[0.76, 3.45, 0.73]}
        rotation={[2.99, -1.03, 2.64]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf600.geometry}
        material={nodes.leaf600.material}
        position={[1.03, 4.64, 0.3]}
        rotation={[-2.22, 0.77, 2.36]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf601.geometry}
        material={nodes.leaf601.material}
        position={[-0.28, 3.84, -0.39]}
        rotation={[3.02, 0.65, 2.51]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf602.geometry}
        material={nodes.leaf602.material}
        position={[-0.91, 4.18, -0.85]}
        rotation={[-0.55, 1.31, -0.76]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf603.geometry}
        material={nodes.leaf603.material}
        position={[-0.71, 4.18, -0.61]}
        rotation={[1.1, 0.79, -1.94]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf604.geometry}
        material={nodes.leaf604.material}
        position={[-0.32, 5.34, -2.22]}
        rotation={[1.03, 0.55, -2.5]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf605.geometry}
        material={nodes.leaf605.material}
        position={[-1.19, 4.23, 1.82]}
        rotation={[0.09, 0.06, -2.75]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf606.geometry}
        material={nodes.leaf606.material}
        position={[-0.26, 3.85, -0.5]}
        rotation={[1.89, -1.14, 0.85]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf607.geometry}
        material={nodes.leaf607.material}
        position={[-1.1, 4.31, 1.54]}
        rotation={[1.72, -0.29, 2.8]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf608.geometry}
        material={nodes.leaf608.material}
        position={[1.54, 3.96, 0.18]}
        rotation={[-2.14, -0.77, 3.04]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf609.geometry}
        material={nodes.leaf609.material}
        position={[0.69, 4.59, -1.66]}
        rotation={[0.38, 0.6, -0.12]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf610.geometry}
        material={nodes.leaf610.material}
        position={[-0.91, 4.29, 0.3]}
        rotation={[2.84, 1.25, -2.02]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf611.geometry}
        material={nodes.leaf611.material}
        position={[-0.52, 3.93, 0.26]}
        rotation={[2.69, 0.12, 0.76]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf612.geometry}
        material={nodes.leaf612.material}
        position={[-1.12, 4.48, 1.28]}
        rotation={[1.2, -1, 2.13]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf613.geometry}
        material={nodes.leaf613.material}
        position={[1.05, 4.42, -1.93]}
        rotation={[-2.61, -0.38, 1.99]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf614.geometry}
        material={nodes.leaf614.material}
        position={[0.83, 4.49, -1.76]}
        rotation={[-0.99, -0.81, -0.08]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf615.geometry}
        material={nodes.leaf615.material}
        position={[-0.48, 3.85, 0.11]}
        rotation={[2.02, -0.51, 1.41]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf616.geometry}
        material={nodes.leaf616.material}
        position={[-0.9, 4.24, -0.89]}
        rotation={[-0.05, -0.13, 0.88]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf617.geometry}
        material={nodes.leaf617.material}
        position={[1.43, 4.33, 1.18]}
        rotation={[-2.88, 0.18, 2.69]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf618.geometry}
        material={nodes.leaf618.material}
        position={[-0.5, 4.92, 1.46]}
        rotation={[-2.07, 0.5, -2.94]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf619.geometry}
        material={nodes.leaf619.material}
        position={[-0.64, 4.87, -0.02]}
        rotation={[2.9, -0.2, 1.49]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf620.geometry}
        material={nodes.leaf620.material}
        position={[0.77, 3.43, 0.62]}
        rotation={[-2.73, -1.09, -1.72]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf621.geometry}
        material={nodes.leaf621.material}
        position={[-0.38, 4.08, -0.4]}
        rotation={[1.43, 1.13, -0.09]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf622.geometry}
        material={nodes.leaf622.material}
        position={[1.09, 4.48, -1.97]}
        rotation={[2.62, 0.37, 1.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf623.geometry}
        material={nodes.leaf623.material}
        position={[-0.94, 4.21, -0.83]}
        rotation={[-0.96, 0.55, 1.54]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf624.geometry}
        material={nodes.leaf624.material}
        position={[0.07, 5.08, -1.59]}
        rotation={[2.87, -0.21, 2.07]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf625.geometry}
        material={nodes.leaf625.material}
        position={[0.99, 3.99, 0.43]}
        rotation={[1.46, 1, -1.47]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf626.geometry}
        material={nodes.leaf626.material}
        position={[0.4, 4.2, -1.04]}
        rotation={[-0.96, 0.3, -0.37]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf627.geometry}
        material={nodes.leaf627.material}
        position={[-0.4, 3.67, 0.42]}
        rotation={[-1.72, 0.05, -3.04]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf628.geometry}
        material={nodes.leaf628.material}
        position={[-1.04, 4.81, 0.07]}
        rotation={[1.17, 0.24, -0.26]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf629.geometry}
        material={nodes.leaf629.material}
        position={[0.77, 3.43, 0.62]}
        rotation={[-2.03, -0.89, -1.08]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf630.geometry}
        material={nodes.leaf630.material}
        position={[0.14, 5.09, -1.63]}
        rotation={[-0.44, -1.2, 0.53]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf631.geometry}
        material={nodes.leaf631.material}
        position={[1.35, 4.15, 1.02]}
        rotation={[0.29, -0.19, 1.02]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf632.geometry}
        material={nodes.leaf632.material}
        position={[-0.91, 4.18, -0.85]}
        rotation={[-2.29, 0.25, 1.12]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf633.geometry}
        material={nodes.leaf633.material}
        position={[0.44, 4.37, -0.97]}
        rotation={[0.91, -0.42, 2.23]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf634.geometry}
        material={nodes.leaf634.material}
        position={[0.6, 4.51, -1.18]}
        rotation={[1.98, -0.75, 1.07]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf635.geometry}
        material={nodes.leaf635.material}
        position={[-0.26, 4.13, 0.68]}
        rotation={[-0.64, -0.23, 0.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf636.geometry}
        material={nodes.leaf636.material}
        position={[0.98, 4.25, 0.4]}
        rotation={[1.63, -0.37, 2.15]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf637.geometry}
        material={nodes.leaf637.material}
        position={[1.35, 3.81, 0.37]}
        rotation={[-2.59, -0.52, -0.01]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf638.geometry}
        material={nodes.leaf638.material}
        position={[1.29, 3.87, 0.39]}
        rotation={[2.51, 0.14, -2.68]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf639.geometry}
        material={nodes.leaf639.material}
        position={[-0.93, 4.6, 0.04]}
        rotation={[-0.76, 1.39, -0.09]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf640.geometry}
        material={nodes.leaf640.material}
        position={[1.04, 4.52, -1.98]}
        rotation={[0.8, 0.04, 2.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf641.geometry}
        material={nodes.leaf641.material}
        position={[0.43, 4.5, -1.32]}
        rotation={[0.81, 0.67, -0.74]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf642.geometry}
        material={nodes.leaf642.material}
        position={[-0.24, 4.1, 0.71]}
        rotation={[-1.92, 0.11, -1.98]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf643.geometry}
        material={nodes.leaf643.material}
        position={[0.1, 5.03, -1.71]}
        rotation={[-1.78, 0.1, 0.75]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf644.geometry}
        material={nodes.leaf644.material}
        position={[-0.68, 4.19, 0.48]}
        rotation={[0.76, -0.56, 1.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf645.geometry}
        material={nodes.leaf645.material}
        position={[-1.03, 5.03, -0.26]}
        rotation={[0.77, -0.5, -0.34]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf646.geometry}
        material={nodes.leaf646.material}
        position={[-1.05, 5.01, -0.25]}
        rotation={[-0.7, 0.32, -0.02]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf647.geometry}
        material={nodes.leaf647.material}
        position={[0.77, 4.56, -1.53]}
        rotation={[1.93, -0.11, 2.89]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf648.geometry}
        material={nodes.leaf648.material}
        position={[-0.52, 4.19, 0.67]}
        rotation={[-0.16, 0.46, 2.57]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf649.geometry}
        material={nodes.leaf649.material}
        position={[0.88, 4.6, -2.01]}
        rotation={[1.46, 0, -0.09]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf650.geometry}
        material={nodes.leaf650.material}
        position={[0.86, 3.5, 0.62]}
        rotation={[-2.21, -0.51, -1.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf651.geometry}
        material={nodes.leaf651.material}
        position={[-0.79, 4.25, -0.6]}
        rotation={[-1.87, 0.5, 1.65]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf652.geometry}
        material={nodes.leaf652.material}
        position={[0.04, 5.25, -1.45]}
        rotation={[1.4, -0.44, 2.12]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf653.geometry}
        material={nodes.leaf653.material}
        position={[-0.45, 4.85, 1.39]}
        rotation={[-2.99, -0.67, 2.14]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf654.geometry}
        material={nodes.leaf654.material}
        position={[-1.02, 4.27, 0.85]}
        rotation={[0.11, 0.1, 0.7]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf655.geometry}
        material={nodes.leaf655.material}
        position={[0.53, 4.43, -1.06]}
        rotation={[-3.02, -0.42, 2.3]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf656.geometry}
        material={nodes.leaf656.material}
        position={[0.43, 4.5, -1.32]}
        rotation={[-0.25, 0.66, 1.15]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf657.geometry}
        material={nodes.leaf657.material}
        position={[-0.48, 3.85, 0.11]}
        rotation={[2.69, -0.22, 1.38]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf658.geometry}
        material={nodes.leaf658.material}
        position={[0, 5.25, -1.5]}
        rotation={[-0.44, 0.55, 1.62]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf659.geometry}
        material={nodes.leaf659.material}
        position={[0.94, 3.57, 0.63]}
        rotation={[1.01, -1.02, -0.04]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf660.geometry}
        material={nodes.leaf660.material}
        position={[-0.85, 4.62, 0.04]}
        rotation={[2.13, -0.9, 2.97]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf661.geometry}
        material={nodes.leaf661.material}
        position={[-1.07, 4.34, 1.41]}
        rotation={[1.53, 1.02, -1.94]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf662.geometry}
        material={nodes.leaf662.material}
        position={[-1.06, 4.81, 0.11]}
        rotation={[0.84, 1.35, 0.8]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf663.geometry}
        material={nodes.leaf663.material}
        position={[-0.72, 4.8, -0.11]}
        rotation={[1.12, -0.12, -0.8]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf664.geometry}
        material={nodes.leaf664.material}
        position={[0.95, 4.34, 0.25]}
        rotation={[-0.88, -0.67, -0.67]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf665.geometry}
        material={nodes.leaf665.material}
        position={[-0.56, 4.06, -0.54]}
        rotation={[2.51, -0.3, -1.92]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf666.geometry}
        material={nodes.leaf666.material}
        position={[0.66, 4.6, -2.15]}
        rotation={[2.49, -0.15, 2.76]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf667.geometry}
        material={nodes.leaf667.material}
        position={[-0.79, 4.31, -0.65]}
        rotation={[2.16, 0.88, 0.26]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf668.geometry}
        material={nodes.leaf668.material}
        position={[0.5, 4.53, -1.45]}
        rotation={[1.33, 0.37, -1.43]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf669.geometry}
        material={nodes.leaf669.material}
        position={[-0.51, 4.79, 1.25]}
        rotation={[-0.15, 0.28, -0.43]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf670.geometry}
        material={nodes.leaf670.material}
        position={[0.77, 4.52, -2]}
        rotation={[1.88, 0.8, -2.61]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf671.geometry}
        material={nodes.leaf671.material}
        position={[-0.38, 4.76, 1.19]}
        rotation={[-0.15, 0.05, -0.99]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf672.geometry}
        material={nodes.leaf672.material}
        position={[-0.03, 5.07, -1.82]}
        rotation={[-1.49, 0.45, 1.67]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf673.geometry}
        material={nodes.leaf673.material}
        position={[-0.69, 4.19, -0.62]}
        rotation={[2, 0.11, 1.51]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf674.geometry}
        material={nodes.leaf674.material}
        position={[0.25, 4.95, -1.55]}
        rotation={[-0.31, -1.21, 1.09]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf675.geometry}
        material={nodes.leaf675.material}
        position={[-0.7, 4.66, 1.17]}
        rotation={[0.16, -0.64, -0.66]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf676.geometry}
        material={nodes.leaf676.material}
        position={[-0.53, 3.55, 0.48]}
        rotation={[-0.17, 0.71, -0.21]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf677.geometry}
        material={nodes.leaf677.material}
        position={[0.99, 4.51, -1.89]}
        rotation={[-2.78, 0.41, -2.61]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf678.geometry}
        material={nodes.leaf678.material}
        position={[0.83, 4.58, -1.97]}
        rotation={[2.94, 0.65, -1.77]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf679.geometry}
        material={nodes.leaf679.material}
        position={[0.41, 4.81, -1.36]}
        rotation={[-0.7, -0.93, 0.43]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf680.geometry}
        material={nodes.leaf680.material}
        position={[-0.17, 5.25, -2.1]}
        rotation={[1.57, -0.14, 2.55]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf681.geometry}
        material={nodes.leaf681.material}
        position={[-1.19, 4.92, 0.36]}
        rotation={[0.62, 0.26, -1.06]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf682.geometry}
        material={nodes.leaf682.material}
        position={[1.35, 4.28, 1.11]}
        rotation={[-2.43, 0.11, -2.98]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf683.geometry}
        material={nodes.leaf683.material}
        position={[1.44, 3.95, 0.24]}
        rotation={[1.68, 0.11, -1.23]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf684.geometry}
        material={nodes.leaf684.material}
        position={[-0.8, 4.68, -0.12]}
        rotation={[-2.11, -0.6, -1.24]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf685.geometry}
        material={nodes.leaf685.material}
        position={[-1.07, 4.25, -1.03]}
        rotation={[2.21, 0.42, -1.12]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf686.geometry}
        material={nodes.leaf686.material}
        position={[-1.03, 4.78, 0.06]}
        rotation={[-0.95, 0.82, 0.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf687.geometry}
        material={nodes.leaf687.material}
        position={[-0.29, 4.09, 0.68]}
        rotation={[-0.05, 0.7, -2.31]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf688.geometry}
        material={nodes.leaf688.material}
        position={[-0.6, 4.91, 1.54]}
        rotation={[-0.91, -0.44, -2.72]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf689.geometry}
        material={nodes.leaf689.material}
        position={[-1.12, 4.87, 0.23]}
        rotation={[0.14, -0.16, -1.1]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf690.geometry}
        material={nodes.leaf690.material}
        position={[0.97, 4.38, 0.34]}
        rotation={[0.18, -1.39, -0.46]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf691.geometry}
        material={nodes.leaf691.material}
        position={[-0.9, 4.18, -0.77]}
        rotation={[-1.96, 0.28, -2.51]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf692.geometry}
        material={nodes.leaf692.material}
        position={[-0.06, 5.19, -1.9]}
        rotation={[1.58, 0.02, -2.49]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf693.geometry}
        material={nodes.leaf693.material}
        position={[-0.5, 4.77, 1.27]}
        rotation={[-0.8, 0.89, -0.06]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf694.geometry}
        material={nodes.leaf694.material}
        position={[0.11, 5.23, -1.49]}
        rotation={[0.05, 0, 1.66]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf695.geometry}
        material={nodes.leaf695.material}
        position={[1.57, 4.01, 0.11]}
        rotation={[2.74, 0.36, 2.65]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf696.geometry}
        material={nodes.leaf696.material}
        position={[1.01, 4.04, 0.51]}
        rotation={[0.81, -0.47, 1.66]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf697.geometry}
        material={nodes.leaf697.material}
        position={[-0.43, 4.88, 1.34]}
        rotation={[2.19, -0.05, 0.82]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf698.geometry}
        material={nodes.leaf698.material}
        position={[-0.34, 3.79, 0.1]}
        rotation={[0.29, -0.33, 1.23]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf699.geometry}
        material={nodes.leaf699.material}
        position={[-0.43, 4.09, 0.64]}
        rotation={[-0.07, -0.82, -0.57]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf700.geometry}
        material={nodes.leaf700.material}
        position={[-0.9, 4.18, -0.77]}
        rotation={[-1.87, 0.79, 1.02]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf701.geometry}
        material={nodes.leaf701.material}
        position={[-0.52, 3.93, 0.26]}
        rotation={[0.91, -0.25, 1.82]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf702.geometry}
        material={nodes.leaf702.material}
        position={[-0.47, 4.86, 1.28]}
        rotation={[0.85, -0.08, -0.5]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf703.geometry}
        material={nodes.leaf703.material}
        position={[0.5, 4.71, -1.3]}
        rotation={[-0.91, -0.78, -0.85]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf704.geometry}
        material={nodes.leaf704.material}
        position={[-1.13, 5.21, -0.22]}
        rotation={[-1.75, 0.54, 2.56]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf705.geometry}
        material={nodes.leaf705.material}
        position={[1.25, 4.08, 1]}
        rotation={[3.09, -0.04, 2.03]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf706.geometry}
        material={nodes.leaf706.material}
        position={[-1.02, 4.2, -0.94]}
        rotation={[2.28, -0.55, -2.69]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf707.geometry}
        material={nodes.leaf707.material}
        position={[-0.18, 5.18, -2.02]}
        rotation={[2.99, -0.67, 2.69]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf708.geometry}
        material={nodes.leaf708.material}
        position={[0.55, 4.34, -1.14]}
        rotation={[-3.01, 0.57, 2.67]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf709.geometry}
        material={nodes.leaf709.material}
        position={[-0.49, 4.79, 1.18]}
        rotation={[1.31, 1.17, -2.29]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf710.geometry}
        material={nodes.leaf710.material}
        position={[-0.65, 4.64, 1.21]}
        rotation={[1.49, 0.48, -2.47]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf711.geometry}
        material={nodes.leaf711.material}
        position={[-0.83, 4.31, -0.64]}
        rotation={[0.57, -0.11, -0.73]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf712.geometry}
        material={nodes.leaf712.material}
        position={[-0.78, 4.59, 1.17]}
        rotation={[-1.63, -0.31, -2.39]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf713.geometry}
        material={nodes.leaf713.material}
        position={[-1.19, 4.98, 0.4]}
        rotation={[0.8, -0.87, -0.76]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf714.geometry}
        material={nodes.leaf714.material}
        position={[0, 5.05, -1.75]}
        rotation={[-0.59, -0.36, -0.58]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf715.geometry}
        material={nodes.leaf715.material}
        position={[0.04, 4.84, 1.32]}
        rotation={[2.05, 1.22, -2.25]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf716.geometry}
        material={nodes.leaf716.material}
        position={[-0.82, 4.74, -0.14]}
        rotation={[0.53, 0.92, 0.86]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf717.geometry}
        material={nodes.leaf717.material}
        position={[-0.42, 3.55, 0.39]}
        rotation={[-2.5, -0.07, 0.14]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf718.geometry}
        material={nodes.leaf718.material}
        position={[-0.03, 5.19, -1.96]}
        rotation={[2.7, -0.98, -2.93]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf719.geometry}
        material={nodes.leaf719.material}
        position={[1.31, 4.1, 0.97]}
        rotation={[-0.65, -0.14, -0.74]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf720.geometry}
        material={nodes.leaf720.material}
        position={[-0.82, 4.17, -0.67]}
        rotation={[-1.43, 0.5, 2.28]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf721.geometry}
        material={nodes.leaf721.material}
        position={[-0.11, 5.23, -2.09]}
        rotation={[0.96, -0.48, 0.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf722.geometry}
        material={nodes.leaf722.material}
        position={[-0.88, 4.22, -0.72]}
        rotation={[-1.53, 0.49, 0.72]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf723.geometry}
        material={nodes.leaf723.material}
        position={[-0.51, 4.07, -0.51]}
        rotation={[1.97, -0.35, 3.06]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf724.geometry}
        material={nodes.leaf724.material}
        position={[0.09, 5.09, -1.59]}
        rotation={[1.22, -0.83, 0.77]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf725.geometry}
        material={nodes.leaf725.material}
        position={[0.77, 3.43, 0.62]}
        rotation={[-1.07, -0.18, -0.94]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf726.geometry}
        material={nodes.leaf726.material}
        position={[0.55, 4.34, -1.14]}
        rotation={[2.24, -0.14, -2.56]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf727.geometry}
        material={nodes.leaf727.material}
        position={[-0.01, 5.06, -1.73]}
        rotation={[-2.11, 0.03, -2.53]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf728.geometry}
        material={nodes.leaf728.material}
        position={[-0.45, 5.38, -2.37]}
        rotation={[-1.46, 0.34, 1.41]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf729.geometry}
        material={nodes.leaf729.material}
        position={[-0.94, 4.32, 0.73]}
        rotation={[2.07, -0.11, 1.46]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf730.geometry}
        material={nodes.leaf730.material}
        position={[-0.73, 4.81, -0.1]}
        rotation={[0.86, -0.24, -2.36]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf731.geometry}
        material={nodes.leaf731.material}
        position={[-0.98, 4.26, 0.93]}
        rotation={[-2.21, -0.13, 2.6]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf732.geometry}
        material={nodes.leaf732.material}
        position={[-0.69, 4.75, -0.09]}
        rotation={[1.27, -1.01, 1.23]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf733.geometry}
        material={nodes.leaf733.material}
        position={[-0.52, 3.59, 0.76]}
        rotation={[1.8, -0.29, -1.94]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf734.geometry}
        material={nodes.leaf734.material}
        position={[0.84, 4.54, -1.93]}
        rotation={[-0.53, 0.67, 0]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf735.geometry}
        material={nodes.leaf735.material}
        position={[1.33, 4.18, 1]}
        rotation={[1.2, -0.31, 2.11]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf736.geometry}
        material={nodes.leaf736.material}
        position={[-0.82, 4.54, 0.11]}
        rotation={[-1.61, -1.07, -2.73]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf737.geometry}
        material={nodes.leaf737.material}
        position={[-0.45, 4.92, -0.01]}
        rotation={[-2.66, -1.24, 3.12]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf738.geometry}
        material={nodes.leaf738.material}
        position={[1.3, 4.07, 0.98]}
        rotation={[2.73, -0.54, -2.92]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf739.geometry}
        material={nodes.leaf739.material}
        position={[0.84, 4.52, -1.96]}
        rotation={[1.72, 1.32, -2.06]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf740.geometry}
        material={nodes.leaf740.material}
        position={[-1.03, 4.78, 0.06]}
        rotation={[-0.91, 1.23, 2.18]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf741.geometry}
        material={nodes.leaf741.material}
        position={[-0.89, 4.29, 0.28]}
        rotation={[-2.06, -0.11, 0.69]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf742.geometry}
        material={nodes.leaf742.material}
        position={[-0.26, 3.83, -0.49]}
        rotation={[-0.55, 0.22, 0.78]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf743.geometry}
        material={nodes.leaf743.material}
        position={[0.92, 4.31, 0.27]}
        rotation={[1.1, -0.09, 0.84]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf744.geometry}
        material={nodes.leaf744.material}
        position={[-0.88, 4.2, 0.81]}
        rotation={[2.9, 0.76, -2.68]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf745.geometry}
        material={nodes.leaf745.material}
        position={[-0.6, 4.82, -0.02]}
        rotation={[-1.9, 0.04, -2.1]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf746.geometry}
        material={nodes.leaf746.material}
        position={[0.96, 4.5, 0.25]}
        rotation={[-1.49, 0.25, 0.67]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf747.geometry}
        material={nodes.leaf747.material}
        position={[-0.49, 3.6, 0.69]}
        rotation={[0.99, -1.02, 1.56]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf748.geometry}
        material={nodes.leaf748.material}
        position={[-0.79, 4.12, 0.68]}
        rotation={[0.59, -1.3, -0.6]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf749.geometry}
        material={nodes.leaf749.material}
        position={[-0.35, 4.04, -0.36]}
        rotation={[-1.34, -0.68, -0.86]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf750.geometry}
        material={nodes.leaf750.material}
        position={[-0.23, 4.15, 0.69]}
        rotation={[-0.05, 0.19, 0.94]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf751.geometry}
        material={nodes.leaf751.material}
        position={[-0.5, 4, -0.59]}
        rotation={[0.64, 0.58, 0.33]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf752.geometry}
        material={nodes.leaf752.material}
        position={[-0.65, 5.57, -2.48]}
        rotation={[-1.59, 0.49, 1]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf753.geometry}
        material={nodes.leaf753.material}
        position={[1.63, 4.04, 0.07]}
        rotation={[1.4, -0.49, 2.8]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf754.geometry}
        material={nodes.leaf754.material}
        position={[-0.19, 3.91, -0.47]}
        rotation={[2.94, -0.4, 2.07]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf755.geometry}
        material={nodes.leaf755.material}
        position={[0.57, 4.59, -1.51]}
        rotation={[1.14, -0.18, 1.38]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf756.geometry}
        material={nodes.leaf756.material}
        position={[0.45, 4.72, -1.32]}
        rotation={[-1.99, 0.34, 2.58]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf757.geometry}
        material={nodes.leaf757.material}
        position={[-1.04, 4.76, 0.1]}
        rotation={[-2.89, -0.22, 2.16]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf758.geometry}
        material={nodes.leaf758.material}
        position={[1, 4.13, 0.42]}
        rotation={[0.11, -0.58, 1.09]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf759.geometry}
        material={nodes.leaf759.material}
        position={[0.37, 4.25, -1.12]}
        rotation={[-2.37, 0.61, 0.96]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf760.geometry}
        material={nodes.leaf760.material}
        position={[0.86, 4.5, -1.96]}
        rotation={[-0.29, -0.42, 1.91]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf761.geometry}
        material={nodes.leaf761.material}
        position={[-0.39, 4.13, 0.63]}
        rotation={[0.34, -0.61, -0.59]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf762.geometry}
        material={nodes.leaf762.material}
        position={[-0.83, 4.32, -0.51]}
        rotation={[-0.17, 0.45, -0.51]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf763.geometry}
        material={nodes.leaf763.material}
        position={[0.88, 4.5, -1.78]}
        rotation={[-1.13, 0.27, 1.06]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf764.geometry}
        material={nodes.leaf764.material}
        position={[-1.06, 4.81, 0.11]}
        rotation={[1.14, 0.6, -0.04]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf765.geometry}
        material={nodes.leaf765.material}
        position={[-0.88, 4.77, -0.13]}
        rotation={[2.78, -0.19, -2.46]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf766.geometry}
        material={nodes.leaf766.material}
        position={[-0.19, 5.28, -2.22]}
        rotation={[-2.11, -0.61, -1.69]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf767.geometry}
        material={nodes.leaf767.material}
        position={[-0.8, 4.22, -0.62]}
        rotation={[-2.41, 0.12, 1.5]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf768.geometry}
        material={nodes.leaf768.material}
        position={[-0.21, 4.78, 1.3]}
        rotation={[-1.43, 0.97, 1.85]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf769.geometry}
        material={nodes.leaf769.material}
        position={[1.2, 4.38, -1.96]}
        rotation={[2.34, 0.04, 1.88]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf770.geometry}
        material={nodes.leaf770.material}
        position={[0.69, 4.53, -1.37]}
        rotation={[0.31, -0.56, 1.35]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf771.geometry}
        material={nodes.leaf771.material}
        position={[-0.64, 5.03, 1.69]}
        rotation={[2.85, -0.35, 2.18]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf772.geometry}
        material={nodes.leaf772.material}
        position={[-1.09, 4.2, -1.12]}
        rotation={[-0.37, -0.64, 1.57]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf773.geometry}
        material={nodes.leaf773.material}
        position={[0, 5.39, -1.43]}
        rotation={[0.74, -1.31, -0.12]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf774.geometry}
        material={nodes.leaf774.material}
        position={[-0.6, 4.69, 1.12]}
        rotation={[-1.32, -0.57, -1.25]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf775.geometry}
        material={nodes.leaf775.material}
        position={[-0.51, 4.2, 0.6]}
        rotation={[-3.11, 0.14, 1.29]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf776.geometry}
        material={nodes.leaf776.material}
        position={[-0.48, 4.96, -0.02]}
        rotation={[1.88, 0.03, -2.89]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf777.geometry}
        material={nodes.leaf777.material}
        position={[-0.78, 4.41, -0.36]}
        rotation={[-1.56, -0.46, 3.01]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf778.geometry}
        material={nodes.leaf778.material}
        position={[0.69, 4.62, -1.64]}
        rotation={[1.07, -0.25, 0.22]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf779.geometry}
        material={nodes.leaf779.material}
        position={[0.62, 4.43, -1.36]}
        rotation={[-1.14, 0.51, -0.08]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf780.geometry}
        material={nodes.leaf780.material}
        position={[-0.93, 4.92, -0.17]}
        rotation={[1.48, 0.06, 2.57]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf781.geometry}
        material={nodes.leaf781.material}
        position={[0.5, 4.71, -1.3]}
        rotation={[-2.75, -0.3, 2.58]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf782.geometry}
        material={nodes.leaf782.material}
        position={[-1, 4.84, -0.19]}
        rotation={[0.6, 0.28, 0.49]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf783.geometry}
        material={nodes.leaf783.material}
        position={[1.77, 4.12, -0.12]}
        rotation={[-1.3, 0.11, 0.64]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf784.geometry}
        material={nodes.leaf784.material}
        position={[-0.28, 5.34, -2.28]}
        rotation={[0.15, -0.32, 0.54]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf785.geometry}
        material={nodes.leaf785.material}
        position={[1.21, 3.93, 0.84]}
        rotation={[0.92, 0.01, 0.37]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf786.geometry}
        material={nodes.leaf786.material}
        position={[-0.93, 4.92, -0.17]}
        rotation={[-3.03, -0.52, -1.83]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf787.geometry}
        material={nodes.leaf787.material}
        position={[1.2, 4.38, -1.92]}
        rotation={[-1.89, 0.84, 1.52]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf788.geometry}
        material={nodes.leaf788.material}
        position={[-0.45, 4.13, -0.31]}
        rotation={[2.61, 0.5, 2.64]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf789.geometry}
        material={nodes.leaf789.material}
        position={[0.38, 4.8, -1.36]}
        rotation={[1.44, 0.52, -2.12]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf790.geometry}
        material={nodes.leaf790.material}
        position={[0.49, 4.42, -1.34]}
        rotation={[-1.3, -0.29, -1.53]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf791.geometry}
        material={nodes.leaf791.material}
        position={[-1.18, 4.93, 0.33]}
        rotation={[0.92, 0.48, -0.55]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf792.geometry}
        material={nodes.leaf792.material}
        position={[-0.95, 4.18, -0.87]}
        rotation={[-1.86, -0.1, -0.43]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf793.geometry}
        material={nodes.leaf793.material}
        position={[0.38, 4.87, -1.5]}
        rotation={[-1.05, -1.32, 0.38]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf794.geometry}
        material={nodes.leaf794.material}
        position={[0.48, 4.7, -2.48]}
        rotation={[2.92, 0.74, -2.58]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf795.geometry}
        material={nodes.leaf795.material}
        position={[0.52, 4.74, -1.41]}
        rotation={[2.02, 0.62, 1.33]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf796.geometry}
        material={nodes.leaf796.material}
        position={[-0.54, 4.18, 0.69]}
        rotation={[2.34, 0.14, -2.3]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf797.geometry}
        material={nodes.leaf797.material}
        position={[-0.61, 4.59, 1.17]}
        rotation={[-1.2, -0.35, -1.25]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf798.geometry}
        material={nodes.leaf798.material}
        position={[0.39, 4.64, -1.38]}
        rotation={[0.77, 1.16, -1.43]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf799.geometry}
        material={nodes.leaf799.material}
        position={[-1.12, 4.22, 1.64]}
        rotation={[-2.17, -0.31, -2.72]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf800.geometry}
        material={nodes.leaf800.material}
        position={[0.32, 4.8, -1.39]}
        rotation={[-2.97, 0.33, 2]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf801.geometry}
        material={nodes.leaf801.material}
        position={[0.85, 4.6, -1.96]}
        rotation={[0.76, 0.05, 1.15]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf802.geometry}
        material={nodes.leaf802.material}
        position={[0.9, 4.14, 0.39]}
        rotation={[-2.66, 0.3, 2.39]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf803.geometry}
        material={nodes.leaf803.material}
        position={[-0.02, 5.17, -1.84]}
        rotation={[2, 0.11, 2.71]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf804.geometry}
        material={nodes.leaf804.material}
        position={[-0.86, 4.2, -0.85]}
        rotation={[-0.92, -0.43, -2.08]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf805.geometry}
        material={nodes.leaf805.material}
        position={[-0.61, 3.73, 0.18]}
        rotation={[0.83, 0.08, -0.5]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf806.geometry}
        material={nodes.leaf806.material}
        position={[-0.53, 3.54, 0.71]}
        rotation={[-1.15, 0.11, -0.23]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf807.geometry}
        material={nodes.leaf807.material}
        position={[-0.75, 4.18, 0.39]}
        rotation={[0.97, -0.36, 1.98]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf808.geometry}
        material={nodes.leaf808.material}
        position={[-0.5, 4.8, 1.32]}
        rotation={[-1.56, -0.79, 2.85]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf809.geometry}
        material={nodes.leaf809.material}
        position={[-0.24, 3.95, -0.42]}
        rotation={[0.23, -0.51, -0.06]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf810.geometry}
        material={nodes.leaf810.material}
        position={[-0.44, 3.56, 0.06]}
        rotation={[-0.45, 1.28, -0.79]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf811.geometry}
        material={nodes.leaf811.material}
        position={[-0.63, 4.07, -0.66]}
        rotation={[-1.4, 0.11, 1.86]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf812.geometry}
        material={nodes.leaf812.material}
        position={[-0.53, 4.85, 1.44]}
        rotation={[-2.9, -0.27, 2.16]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf813.geometry}
        material={nodes.leaf813.material}
        position={[-0.92, 4.24, -0.8]}
        rotation={[1.74, -0.28, -2.94]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf814.geometry}
        material={nodes.leaf814.material}
        position={[0.9, 4.14, 0.39]}
        rotation={[0.69, 0.37, -0.49]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf815.geometry}
        material={nodes.leaf815.material}
        position={[-0.88, 4.63, -0.1]}
        rotation={[-1.05, -0.14, -0.54]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf816.geometry}
        material={nodes.leaf816.material}
        position={[0.5, 4.62, -2.42]}
        rotation={[1.46, -1.11, 2.85]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf817.geometry}
        material={nodes.leaf817.material}
        position={[0.85, 4.6, -1.68]}
        rotation={[-2.39, -1.33, -2.93]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf818.geometry}
        material={nodes.leaf818.material}
        position={[-0.82, 4.55, 0.04]}
        rotation={[0.13, -0.48, -0.06]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf819.geometry}
        material={nodes.leaf819.material}
        position={[-0.98, 4.89, -0.22]}
        rotation={[-0.93, 0.32, -0.88]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf820.geometry}
        material={nodes.leaf820.material}
        position={[-0.84, 4.24, -0.6]}
        rotation={[2.49, 0.56, -2.48]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf821.geometry}
        material={nodes.leaf821.material}
        position={[-0.97, 4.69, -0.09]}
        rotation={[-1.98, 1.09, 2.48]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf822.geometry}
        material={nodes.leaf822.material}
        position={[-1.09, 5.34, -0.21]}
        rotation={[-2.97, 0.34, -1.88]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf823.geometry}
        material={nodes.leaf823.material}
        position={[1.66, 4.05, 0.05]}
        rotation={[-1.3, -0.63, -0.36]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf824.geometry}
        material={nodes.leaf824.material}
        position={[-0.86, 4.77, -0.11]}
        rotation={[0.81, 0.64, 0.49]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf825.geometry}
        material={nodes.leaf825.material}
        position={[-0.52, 3.81, 0.1]}
        rotation={[1.27, 0.07, -0.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf826.geometry}
        material={nodes.leaf826.material}
        position={[-0.41, 4.72, 1.19]}
        rotation={[-1.25, -0.46, -0.57]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf827.geometry}
        material={nodes.leaf827.material}
        position={[1.84, 4.14, -0.19]}
        rotation={[0.1, 0.6, 0.64]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf828.geometry}
        material={nodes.leaf828.material}
        position={[1.65, 4, 0.07]}
        rotation={[2.71, -0.21, 1.61]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf829.geometry}
        material={nodes.leaf829.material}
        position={[-0.11, 5.52, -1.43]}
        rotation={[2.28, -0.14, -2.7]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf830.geometry}
        material={nodes.leaf830.material}
        position={[1.81, 4.1, -0.13]}
        rotation={[-2.12, -0.78, -2.2]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf831.geometry}
        material={nodes.leaf831.material}
        position={[1.24, 4.02, 0.88]}
        rotation={[2.03, -0.24, 1.8]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf832.geometry}
        material={nodes.leaf832.material}
        position={[1.32, 4.11, 0.99]}
        rotation={[0.49, -0.64, 1.99]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf833.geometry}
        material={nodes.leaf833.material}
        position={[-0.34, 3.89, -0.48]}
        rotation={[0.04, 0.71, -0.17]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf834.geometry}
        material={nodes.leaf834.material}
        position={[-0.27, 5.07, 0.01]}
        rotation={[-1.27, -0.16, -1.37]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf835.geometry}
        material={nodes.leaf835.material}
        position={[-0.59, 4.05, -0.55]}
        rotation={[2.19, 0.3, -1.78]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf836.geometry}
        material={nodes.leaf836.material}
        position={[0.51, 4.35, -1.05]}
        rotation={[-1.39, -0.85, -1.1]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf837.geometry}
        material={nodes.leaf837.material}
        position={[1.17, 4.4, -1.98]}
        rotation={[-0.23, 0.01, 1.07]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf838.geometry}
        material={nodes.leaf838.material}
        position={[0.53, 4.72, -1.44]}
        rotation={[0.89, -0.33, 0.2]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf839.geometry}
        material={nodes.leaf839.material}
        position={[-0.4, 4.09, 0.68]}
        rotation={[-1.45, 0.01, -0.67]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf840.geometry}
        material={nodes.leaf840.material}
        position={[-0.35, 3.98, -0.37]}
        rotation={[2.41, 0.53, 3.08]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf841.geometry}
        material={nodes.leaf841.material}
        position={[0.42, 4.52, -2.2]}
        rotation={[1.17, 0.84, -1.93]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf842.geometry}
        material={nodes.leaf842.material}
        position={[-0.06, 5.19, -1.9]}
        rotation={[0.13, 0.26, -2.96]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf843.geometry}
        material={nodes.leaf843.material}
        position={[-1.11, 4.23, 1.53]}
        rotation={[-2.72, -0.38, 0.79]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf844.geometry}
        material={nodes.leaf844.material}
        position={[0.81, 4.51, -2.07]}
        rotation={[-0.8, -0.4, -0.5]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf845.geometry}
        material={nodes.leaf845.material}
        position={[0.69, 4.53, -1.37]}
        rotation={[2.73, 0.23, 2.66]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf846.geometry}
        material={nodes.leaf846.material}
        position={[0.69, 3.45, 0.74]}
        rotation={[-1.91, 0.79, 3.09]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf847.geometry}
        material={nodes.leaf847.material}
        position={[0.85, 4.6, -1.68]}
        rotation={[1.46, -1, 0.38]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf848.geometry}
        material={nodes.leaf848.material}
        position={[0.57, 4.59, -1.51]}
        rotation={[-0.81, -0.53, -0.38]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf849.geometry}
        material={nodes.leaf849.material}
        position={[-0.77, 4.73, -0.04]}
        rotation={[-1.59, 0.53, 1.52]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf850.geometry}
        material={nodes.leaf850.material}
        position={[0.39, 4.35, -1.21]}
        rotation={[2.64, 1.08, 3.07]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf851.geometry}
        material={nodes.leaf851.material}
        position={[0.78, 4.49, -1.67]}
        rotation={[-0.88, 0.75, -1.79]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf852.geometry}
        material={nodes.leaf852.material}
        position={[0.61, 4.46, -1.48]}
        rotation={[0.03, -0.13, -0.88]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf853.geometry}
        material={nodes.leaf853.material}
        position={[0.89, 4.52, -2.03]}
        rotation={[-2.09, -0.85, -2.1]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf854.geometry}
        material={nodes.leaf854.material}
        position={[-0.81, 4.3, -0.53]}
        rotation={[-2.67, 0.9, -2.08]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf855.geometry}
        material={nodes.leaf855.material}
        position={[1.41, 3.92, 0.23]}
        rotation={[-1.03, 0.57, 0.45]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf856.geometry}
        material={nodes.leaf856.material}
        position={[-0.4, 3.84, 0.26]}
        rotation={[2.09, 0.02, 2.83]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf857.geometry}
        material={nodes.leaf857.material}
        position={[-0.03, 5.49, -1.45]}
        rotation={[-0.16, -0.51, -1.19]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf858.geometry}
        material={nodes.leaf858.material}
        position={[-0.39, 5.37, -2.27]}
        rotation={[0.86, 0.57, -1.5]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf859.geometry}
        material={nodes.leaf859.material}
        position={[0.91, 4.07, 0.43]}
        rotation={[-2.23, 0.13, 3.07]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf860.geometry}
        material={nodes.leaf860.material}
        position={[1.84, 4.13, -0.13]}
        rotation={[3.1, -0.7, 2.22]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf861.geometry}
        material={nodes.leaf861.material}
        position={[-0.42, 3.55, 0.39]}
        rotation={[-0.52, -1.09, 0.57]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf862.geometry}
        material={nodes.leaf862.material}
        position={[-0.82, 4.36, -0.43]}
        rotation={[-2.29, 0.1, 2.7]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf863.geometry}
        material={nodes.leaf863.material}
        position={[-0.37, 4.83, 1.32]}
        rotation={[2.57, 0.24, 2.62]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf864.geometry}
        material={nodes.leaf864.material}
        position={[-0.07, 5.55, -1.45]}
        rotation={[0.14, 0.32, 1.12]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf865.geometry}
        material={nodes.leaf865.material}
        position={[0.5, 4.71, -1.3]}
        rotation={[2.17, -0.1, 1.48]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf866.geometry}
        material={nodes.leaf866.material}
        position={[-0.03, 5.49, -1.45]}
        rotation={[1.69, -1.19, 2.76]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf867.geometry}
        material={nodes.leaf867.material}
        position={[0.69, 3.45, 0.74]}
        rotation={[-3.04, -0.14, -2.79]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf868.geometry}
        material={nodes.leaf868.material}
        position={[0.33, 4.26, -1.11]}
        rotation={[1.81, 0.61, -0.65]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf869.geometry}
        material={nodes.leaf869.material}
        position={[0.62, 4.43, -1.36]}
        rotation={[-1.49, -0.34, -0.02]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf870.geometry}
        material={nodes.leaf870.material}
        position={[-0.44, 3.56, 0.06]}
        rotation={[2.66, 0.56, 3.04]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf871.geometry}
        material={nodes.leaf871.material}
        position={[0.74, 4.58, -2.12]}
        rotation={[-0.03, 0.19, -0.67]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf872.geometry}
        material={nodes.leaf872.material}
        position={[0.59, 4.67, -1.37]}
        rotation={[-2.67, 0.1, -3.1]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf873.geometry}
        material={nodes.leaf873.material}
        position={[-0.67, 5.6, -2.55]}
        rotation={[1.05, 0.12, 0.14]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf874.geometry}
        material={nodes.leaf874.material}
        position={[0.99, 4.46, -1.93]}
        rotation={[-1.71, 0.12, 0.56]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf875.geometry}
        material={nodes.leaf875.material}
        position={[0.02, 5.15, -1.77]}
        rotation={[0.99, -0.65, 2.32]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf876.geometry}
        material={nodes.leaf876.material}
        position={[-0.52, 4.19, 0.67]}
        rotation={[1.48, -0.49, 1.03]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf877.geometry}
        material={nodes.leaf877.material}
        position={[-0.41, 4.72, 1.19]}
        rotation={[-2.62, 0.08, -2.1]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf878.geometry}
        material={nodes.leaf878.material}
        position={[0.19, 4.83, 1.33]}
        rotation={[-2.82, 0.88, 1.37]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf879.geometry}
        material={nodes.leaf879.material}
        position={[0.63, 4.43, -1.27]}
        rotation={[1.21, -1.12, 2.47]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf880.geometry}
        material={nodes.leaf880.material}
        position={[-0.55, 4.85, -0.07]}
        rotation={[0.37, -0.61, -0.11]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf881.geometry}
        material={nodes.leaf881.material}
        position={[0.66, 4.55, -2.06]}
        rotation={[-3.02, 0.57, -2.73]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf882.geometry}
        material={nodes.leaf882.material}
        position={[0.85, 4.6, -1.96]}
        rotation={[2.6, 0.36, -0.04]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf883.geometry}
        material={nodes.leaf883.material}
        position={[-0.1, 5.2, -1.92]}
        rotation={[1.27, -0.87, 2.98]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf884.geometry}
        material={nodes.leaf884.material}
        position={[0.4, 4.2, -1.04]}
        rotation={[-0.47, -0.74, -0.29]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf885.geometry}
        material={nodes.leaf885.material}
        position={[0.98, 4.25, 0.4]}
        rotation={[-2.73, 0.24, -2.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf886.geometry}
        material={nodes.leaf886.material}
        position={[0.93, 4.54, 0.26]}
        rotation={[1.89, 1.06, -1.7]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf887.geometry}
        material={nodes.leaf887.material}
        position={[0.48, 4.51, -1.15]}
        rotation={[2.98, 0.51, -2.2]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf888.geometry}
        material={nodes.leaf888.material}
        position={[0.5, 3.4, 0.65]}
        rotation={[-0.96, 0.74, 0.32]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf889.geometry}
        material={nodes.leaf889.material}
        position={[1.29, 3.87, 0.35]}
        rotation={[0.26, 1.28, 0.17]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf890.geometry}
        material={nodes.leaf890.material}
        position={[-1.14, 4.89, 0.26]}
        rotation={[0.95, 0.82, -0.28]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf891.geometry}
        material={nodes.leaf891.material}
        position={[-0.4, 3.94, -0.45]}
        rotation={[-1.14, 0.7, 0.04]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf892.geometry}
        material={nodes.leaf892.material}
        position={[-0.8, 4.7, -0.04]}
        rotation={[1.66, -0.95, 2.78]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf893.geometry}
        material={nodes.leaf893.material}
        position={[-1.19, 4.24, 1.66]}
        rotation={[0.66, -0.27, -0.2]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf894.geometry}
        material={nodes.leaf894.material}
        position={[0.72, 4.63, -1.49]}
        rotation={[0.44, 0.04, 0.43]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf895.geometry}
        material={nodes.leaf895.material}
        position={[-0.6, 3.7, 0.2]}
        rotation={[-0.51, 1.25, 1.12]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf896.geometry}
        material={nodes.leaf896.material}
        position={[-0.54, 3.63, 0.44]}
        rotation={[2.07, 0.92, -0.92]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf897.geometry}
        material={nodes.leaf897.material}
        position={[-0.93, 4.6, 0.04]}
        rotation={[-1.33, 0.66, 0.83]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf898.geometry}
        material={nodes.leaf898.material}
        position={[-0.06, 5.4, -1.46]}
        rotation={[-0.41, 0.69, 1.34]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf899.geometry}
        material={nodes.leaf899.material}
        position={[1.47, 4.46, 1.22]}
        rotation={[1.37, 0.28, -0.47]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf900.geometry}
        material={nodes.leaf900.material}
        position={[-0.93, 4.92, -0.17]}
        rotation={[-2.98, -0.49, -2.23]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf901.geometry}
        material={nodes.leaf901.material}
        position={[-0.61, 3.73, 0.18]}
        rotation={[-1.2, 0.06, 0.17]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf902.geometry}
        material={nodes.leaf902.material}
        position={[0.08, 5.26, -1.51]}
        rotation={[0.49, -0.86, 1.22]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf903.geometry}
        material={nodes.leaf903.material}
        position={[1.09, 4.46, -1.99]}
        rotation={[0.66, -0.65, 0.17]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf904.geometry}
        material={nodes.leaf904.material}
        position={[1, 3.93, 0.47]}
        rotation={[1.67, 1.24, -1.55]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf905.geometry}
        material={nodes.leaf905.material}
        position={[-0.1, 5.14, -1.89]}
        rotation={[-2.92, 0.77, -2.26]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf906.geometry}
        material={nodes.leaf906.material}
        position={[0.63, 4.43, -1.27]}
        rotation={[-1.46, -0.6, -0.24]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf907.geometry}
        material={nodes.leaf907.material}
        position={[-1.15, 4.23, 1.51]}
        rotation={[-0.57, 0, 0.6]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf908.geometry}
        material={nodes.leaf908.material}
        position={[0.77, 4.56, -2.1]}
        rotation={[-1.23, 0.72, 0.13]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf909.geometry}
        material={nodes.leaf909.material}
        position={[-1.15, 4.94, 0.37]}
        rotation={[0.7, -0.61, 1.7]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf910.geometry}
        material={nodes.leaf910.material}
        position={[-0.66, 5.05, 1.72]}
        rotation={[1.82, -0.44, 0.56]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf911.geometry}
        material={nodes.leaf911.material}
        position={[-0.62, 5.58, -2.51]}
        rotation={[-0.29, -0.35, 0.36]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf912.geometry}
        material={nodes.leaf912.material}
        position={[-0.45, 4.04, -0.48]}
        rotation={[2.27, 0.08, 2.33]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf913.geometry}
        material={nodes.leaf913.material}
        position={[0.03, 5.04, -1.67]}
        rotation={[1.75, 0.55, -1.83]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf914.geometry}
        material={nodes.leaf914.material}
        position={[-1.11, 4.84, 0.25]}
        rotation={[-1.28, -0.33, -2.05]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf915.geometry}
        material={nodes.leaf915.material}
        position={[-0.3, 3.84, -0.42]}
        rotation={[0.56, 0.96, -1.66]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf916.geometry}
        material={nodes.leaf916.material}
        position={[-0.73, 5.66, -2.54]}
        rotation={[0.22, -1.36, -0.39]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf917.geometry}
        material={nodes.leaf917.material}
        position={[-0.72, 4.21, -0.66]}
        rotation={[-2.43, -1.06, -2.92]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf918.geometry}
        material={nodes.leaf918.material}
        position={[1.74, 4.1, -0.04]}
        rotation={[1.39, -0.7, -1.19]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf919.geometry}
        material={nodes.leaf919.material}
        position={[0.38, 4.87, -1.5]}
        rotation={[2.84, -1.23, 3.13]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf920.geometry}
        material={nodes.leaf920.material}
        position={[-0.34, 3.75, 0.24]}
        rotation={[-3, 0.36, -2.81]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf921.geometry}
        material={nodes.leaf921.material}
        position={[-0.39, 5.37, -2.27]}
        rotation={[-2.69, 0.83, 1.67]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf922.geometry}
        material={nodes.leaf922.material}
        position={[-0.56, 4.04, -0.63]}
        rotation={[1.83, 1.11, -2.79]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf923.geometry}
        material={nodes.leaf923.material}
        position={[-0.99, 5.02, -0.17]}
        rotation={[-1.19, -1.11, -1.84]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf924.geometry}
        material={nodes.leaf924.material}
        position={[0.03, 5.34, -1.51]}
        rotation={[-2.35, -1.17, 3.03]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf925.geometry}
        material={nodes.leaf925.material}
        position={[0.81, 3.46, 0.7]}
        rotation={[1.69, -1.12, 1.07]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf926.geometry}
        material={nodes.leaf926.material}
        position={[0.45, 4.55, -2.18]}
        rotation={[2.78, 0.52, -2.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf927.geometry}
        material={nodes.leaf927.material}
        position={[0.25, 4.94, -1.44]}
        rotation={[-2, 1.18, 1.12]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf928.geometry}
        material={nodes.leaf928.material}
        position={[-0.55, 4.92, 0]}
        rotation={[2, 0.26, -3]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf929.geometry}
        material={nodes.leaf929.material}
        position={[0.62, 4.51, -2.15]}
        rotation={[-1.51, -0.09, -2.47]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf930.geometry}
        material={nodes.leaf930.material}
        position={[-0.54, 3.89, 0.16]}
        rotation={[1.32, -0.27, 0.37]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf931.geometry}
        material={nodes.leaf931.material}
        position={[-0.38, 4.11, -0.35]}
        rotation={[-0.69, -0.69, -0.01]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf932.geometry}
        material={nodes.leaf932.material}
        position={[-0.59, 4.97, 1.61]}
        rotation={[1.43, -1.03, 2.25]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf933.geometry}
        material={nodes.leaf933.material}
        position={[-0.5, 4.92, 1.46]}
        rotation={[-2.95, -0.35, 2.77]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf934.geometry}
        material={nodes.leaf934.material}
        position={[-0.5, 5.5, -2.43]}
        rotation={[1.65, -0.25, 1.76]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf935.geometry}
        material={nodes.leaf935.material}
        position={[0.43, 4.5, -1.32]}
        rotation={[1.15, 0.54, -1.88]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf936.geometry}
        material={nodes.leaf936.material}
        position={[0.55, 4.34, -1.14]}
        rotation={[-2.37, -0.6, -2.91]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf937.geometry}
        material={nodes.leaf937.material}
        position={[0.55, 4.7, -2.46]}
        rotation={[1.36, -0.75, 0.69]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf938.geometry}
        material={nodes.leaf938.material}
        position={[-0.37, 3.98, -0.4]}
        rotation={[2.81, 0.69, -2.34]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf939.geometry}
        material={nodes.leaf939.material}
        position={[0.69, 4.59, -1.66]}
        rotation={[-1.21, 0.26, -0.43]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf940.geometry}
        material={nodes.leaf940.material}
        position={[-0.46, 3.56, 0.6]}
        rotation={[3.12, -1.49, -1.79]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf941.geometry}
        material={nodes.leaf941.material}
        position={[-0.89, 4.76, -0.11]}
        rotation={[-2.56, -0.24, -2.78]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf942.geometry}
        material={nodes.leaf942.material}
        position={[-0.86, 4.76, -0.15]}
        rotation={[0.58, 0.75, 0.6]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf943.geometry}
        material={nodes.leaf943.material}
        position={[1.54, 4.53, 1.33]}
        rotation={[-2.57, 0.18, -1.06]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf944.geometry}
        material={nodes.leaf944.material}
        position={[0.77, 4.56, -1.53]}
        rotation={[2.59, -0.8, -2.82]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf945.geometry}
        material={nodes.leaf945.material}
        position={[-0.98, 4.22, 0.76]}
        rotation={[-2.65, 0.81, -2.92]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf946.geometry}
        material={nodes.leaf946.material}
        position={[-1.07, 4.84, 0.24]}
        rotation={[2.4, -0.35, 1.1]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf947.geometry}
        material={nodes.leaf947.material}
        position={[-1.07, 5.23, -0.22]}
        rotation={[-0.23, -0.97, 0.71]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf948.geometry}
        material={nodes.leaf948.material}
        position={[-0.13, 5.24, -2.08]}
        rotation={[1.35, -0.07, 1.85]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf949.geometry}
        material={nodes.leaf949.material}
        position={[0.02, 5.07, -1.84]}
        rotation={[-1.86, -0.04, 0.92]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf950.geometry}
        material={nodes.leaf950.material}
        position={[0.98, 3.9, 0.49]}
        rotation={[-0.13, 0.15, 0.55]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf951.geometry}
        material={nodes.leaf951.material}
        position={[-0.55, 3.73, 0.35]}
        rotation={[2.27, 1.36, -1.04]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf952.geometry}
        material={nodes.leaf952.material}
        position={[0.44, 4.63, -1.46]}
        rotation={[-1.39, 0.33, 0.71]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf953.geometry}
        material={nodes.leaf953.material}
        position={[-0.37, 3.54, 0.23]}
        rotation={[2.99, 0.26, 2.73]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf954.geometry}
        material={nodes.leaf954.material}
        position={[1.45, 4.44, 1.22]}
        rotation={[-1.22, 1.08, 2.32]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf955.geometry}
        material={nodes.leaf955.material}
        position={[-0.16, 5.15, -1.99]}
        rotation={[-2.96, 0.13, 2.09]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf956.geometry}
        material={nodes.leaf956.material}
        position={[-0.87, 4.51, 0.01]}
        rotation={[-0.5, -0.38, 0.73]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf957.geometry}
        material={nodes.leaf957.material}
        position={[-0.98, 4.22, 0.76]}
        rotation={[0.82, 0.4, -0.08]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf958.geometry}
        material={nodes.leaf958.material}
        position={[-1.02, 4.39, 1.24]}
        rotation={[2.45, -0.01, -2.03]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf959.geometry}
        material={nodes.leaf959.material}
        position={[-1.01, 4.22, -0.93]}
        rotation={[2.9, 0.66, -2.24]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf960.geometry}
        material={nodes.leaf960.material}
        position={[-0.88, 4.2, 0.81]}
        rotation={[-2.55, 0.53, -2.21]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf961.geometry}
        material={nodes.leaf961.material}
        position={[-0.11, 5.23, -2.09]}
        rotation={[-2.75, -0.86, -1.79]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf962.geometry}
        material={nodes.leaf962.material}
        position={[-0.34, 3.79, 0.1]}
        rotation={[-0.6, -0.87, -0.2]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf963.geometry}
        material={nodes.leaf963.material}
        position={[1, 4.11, 0.47]}
        rotation={[2.17, -0.18, -2.86]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf964.geometry}
        material={nodes.leaf964.material}
        position={[0.58, 4.79, -2.63]}
        rotation={[-0.24, -0.02, -1.21]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf965.geometry}
        material={nodes.leaf965.material}
        position={[0.69, 4.53, -1.37]}
        rotation={[-2.62, -1.05, 2.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf966.geometry}
        material={nodes.leaf966.material}
        position={[-0.91, 4.54, -0.02]}
        rotation={[-0.24, -0.76, 0.23]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf967.geometry}
        material={nodes.leaf967.material}
        position={[0.16, 5.08, -1.63]}
        rotation={[1.35, -0.7, 0.13]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf968.geometry}
        material={nodes.leaf968.material}
        position={[-0.4, 4.76, 1.3]}
        rotation={[-2.7, 0.61, -3.03]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf969.geometry}
        material={nodes.leaf969.material}
        position={[0.42, 4.59, -1.37]}
        rotation={[-1.6, 0.94, -0.45]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf970.geometry}
        material={nodes.leaf970.material}
        position={[-0.5, 3.55, 0.3]}
        rotation={[-1.27, -1.1, 2.18]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf971.geometry}
        material={nodes.leaf971.material}
        position={[0.59, 3.43, 0.71]}
        rotation={[0.08, 0.97, -0.51]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf972.geometry}
        material={nodes.leaf972.material}
        position={[-0.55, 4.85, -0.05]}
        rotation={[-0.66, 0.61, -1.3]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf973.geometry}
        material={nodes.leaf973.material}
        position={[1.04, 4.82, 0.28]}
        rotation={[-1.53, -0.1, -2.87]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf974.geometry}
        material={nodes.leaf974.material}
        position={[-0.34, 3.79, 0.1]}
        rotation={[1.1, -0.47, -0.13]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf975.geometry}
        material={nodes.leaf975.material}
        position={[0.32, 4.37, -1.05]}
        rotation={[-2.84, 0.78, -2.54]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf976.geometry}
        material={nodes.leaf976.material}
        position={[-0.71, 4.75, -0.04]}
        rotation={[-2.58, -0.06, -0.97]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf977.geometry}
        material={nodes.leaf977.material}
        position={[-0.78, 4.27, -0.71]}
        rotation={[0.05, -0.11, 0.47]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf978.geometry}
        material={nodes.leaf978.material}
        position={[0.55, 4.34, -1.14]}
        rotation={[1.1, -0.39, 1.22]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf979.geometry}
        material={nodes.leaf979.material}
        position={[0.61, 4.5, -1.54]}
        rotation={[-1.64, 0.71, 1.07]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf980.geometry}
        material={nodes.leaf980.material}
        position={[-0.48, 3.55, 0.44]}
        rotation={[-0.34, -0.54, 0.88]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf981.geometry}
        material={nodes.leaf981.material}
        position={[0.12, 5.17, -1.55]}
        rotation={[1.67, -0.67, 0.49]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf982.geometry}
        material={nodes.leaf982.material}
        position={[-0.52, 3.55, 0.36]}
        rotation={[-1.77, -Math.PI / 4, -0.63]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf983.geometry}
        material={nodes.leaf983.material}
        position={[0.71, 4.62, -1.57]}
        rotation={[0.3, -0.4, 0.34]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf984.geometry}
        material={nodes.leaf984.material}
        position={[0.75, 4.51, -1.48]}
        rotation={[0.37, -0.22, 0.66]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf985.geometry}
        material={nodes.leaf985.material}
        position={[0.46, 4.67, -2.47]}
        rotation={[2.04, 0.57, -0.27]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf986.geometry}
        material={nodes.leaf986.material}
        position={[0.18, 5, -1.61]}
        rotation={[2.75, -1.44, -2.22]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf987.geometry}
        material={nodes.leaf987.material}
        position={[-0.96, 4.84, -0.1]}
        rotation={[-0.25, 1.16, -0.22]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf988.geometry}
        material={nodes.leaf988.material}
        position={[0.49, 4.61, -2.43]}
        rotation={[-0.38, 0.4, 1.55]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf989.geometry}
        material={nodes.leaf989.material}
        position={[-0.67, 4.23, 0.58]}
        rotation={[2.75, -0.29, 1.56]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf990.geometry}
        material={nodes.leaf990.material}
        position={[-0.96, 4.99, -0.19]}
        rotation={[2.43, -0.29, 2.94]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf991.geometry}
        material={nodes.leaf991.material}
        position={[-0.71, 4.64, 1.19]}
        rotation={[1.47, 1.08, -2.59]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf992.geometry}
        material={nodes.leaf992.material}
        position={[0.71, 4.54, -1.7]}
        rotation={[-1.21, 0.44, 2.17]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf993.geometry}
        material={nodes.leaf993.material}
        position={[-0.47, 3.73, 0.34]}
        rotation={[2.92, -0.38, 2.34]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf994.geometry}
        material={nodes.leaf994.material}
        position={[-1.17, 4.22, 1.63]}
        rotation={[-0.37, -0.16, 0.7]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf995.geometry}
        material={nodes.leaf995.material}
        position={[-1.25, 4.53, 1.39]}
        rotation={[2.58, -0.06, 1.03]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf996.geometry}
        material={nodes.leaf996.material}
        position={[0.61, 4.46, -1.48]}
        rotation={[-0.36, -0.79, 1.04]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf997.geometry}
        material={nodes.leaf997.material}
        position={[0.53, 4.43, -1.06]}
        rotation={[0.57, -0.92, -0.18]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf998.geometry}
        material={nodes.leaf998.material}
        position={[0.5, 4.53, -1.45]}
        rotation={[-1.26, 0.15, -0.52]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf999.geometry}
        material={nodes.leaf999.material}
        position={[0.52, 4.6, -2.23]}
        rotation={[-0.12, -0.32, 1.51]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaf1000.geometry}
        material={nodes.leaf1000.material}
        position={[-1.01, 4.25, -0.95]}
        rotation={[1.57, -0.21, 0.81]}
        scale={0.09}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[3.22, 1.64, -0.34]}
        scale={0.64}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[-1.32, 1.64, 3.38]}
        scale={0.64}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={nodes.Plane003.material}
        position={[2.58, 1.04, 1.07]}
        rotation={[0, -1.06, 0]}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[0.39, 1.24, -1.54]}
        rotation={[0, -1.43, 0]}
        scale={0.22}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[-2.09, 1.22, -1.53]}
        scale={0.16}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[-3.76, 1.12, -1.02]}
        rotation={[Math.PI, -1.3, Math.PI]}
        scale={0.12}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={nodes.Plane002.material}
        position={[0.02, 1.18, 1.7]}
        rotation={[0, -0.89, 0]}
        scale={0.67}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[-1.46, 1.63, 0.95]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.38, -0.03, -0.38]}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[-0.86, 1.64, -2.84]}
        scale={0.64}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[-2.95, 1.23, -1.35]}
        rotation={[0, -0.89, 0]}
        scale={0.23}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[-2.03, 1.42, 0.39]}
        rotation={[-Math.PI, 1.23, -Math.PI]}
        scale={[-0.27, -0.02, -0.27]}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={nodes.Cylinder003.material}
        position={[-1.63, 1.58, -0.47]}
        rotation={[0, 0.35, 0]}
        scale={[-0.28, -0.02, -0.28]}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={nodes.Cylinder002.material}
        position={[-3.06, 1.56, 0.02]}
        rotation={[-Math.PI, 1.23, -Math.PI]}
        scale={[-0.38, -0.03, -0.38]}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={nodes.Cylinder004.material}
        position={[-2.52, 1.24, -0.57]}
        rotation={[0, 1.06, 0]}
        scale={[-0.16, -0.01, -0.16]}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={nodes.Cylinder007.material}
        position={[0.63, 1.78, 2.61]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.12, -0.01, -0.12]}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={nodes.Cylinder005.material}
        position={[-0.5, 1.38, 1]}
        rotation={[Math.PI, -0.19, Math.PI]}
        scale={[-0.16, -0.01, -0.16]}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={nodes.Cylinder006.material}
        position={[1.16, 1.35, 2.36]}
        rotation={[Math.PI / 2, 0, 1.13]}
        scale={0.29}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree.geometry}
        material={nodes.tree.material}
        position={[0, 1, 0]}
      >
        <meshBasicMaterial map={bodyNormal} map-flipY={false} />
      </mesh>
    </group>
  );
});

useGLTF.preload("/glow.glb");

Glow.displayName = "Glow";
export default Glow;
