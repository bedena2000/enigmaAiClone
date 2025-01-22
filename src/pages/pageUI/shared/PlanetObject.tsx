import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

const PlanetObject = () => {
  return (
    <Canvas
      style={{
        height: "709.61px",
        width: "640px",
      }}
    >
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} />

      {/* Planet objetc */}
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          attach="material"
          color="blue"
          roughness={0.7}
          metalness={0.3}
        />
      </Sphere>

      {/* Orbit controls */}
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default PlanetObject;
