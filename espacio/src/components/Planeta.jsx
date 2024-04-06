/* eslint-disable react/no-unknown-property */
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Esfera from "./Esfera";
import "../App.css";

export default function Planeta() {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        <Esfera />
      </Suspense>
      <Environment preset="sunset" />
      <ContactShadows
        opacity={0.5}
        scale={15}
        far={10}
        resolution={256}
        color={"#000000"}
        position={[0, -2.5, 0]}
      />
    </Canvas>
  );
}
