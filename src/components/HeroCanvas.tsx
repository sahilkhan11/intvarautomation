"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function WireframeObject() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame(() => {
    // Continuous rotation on the mesh
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
    }

    // Mouse parallax effect on the group (only on non-touch devices)
    if (groupRef.current) {
      const isTouch = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
      
      if (!isTouch) {
        const targetX = (pointer.y * Math.PI) / 4;
        const targetY = (pointer.x * Math.PI) / 4;
        
        // Smooth interpolation for parallax
        groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
        groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
      } else {
        // Subtle additional idle rotation for touch devices instead of parallax
        groupRef.current.rotation.x += 0.001;
        groupRef.current.rotation.y += 0.001;
      }
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.5, 1]} />
        <meshBasicMaterial 
          color="#f5f5f5" 
          wireframe={true} 
          transparent={true} 
          opacity={0.15} 
        />
      </mesh>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <WireframeObject />
    </Canvas>
  );
}
