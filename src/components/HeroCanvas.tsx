"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

function PostProcessing() {
  const { gl, scene, camera, size } = useThree();
  const composer = useRef<EffectComposer | null>(null);

  useEffect(() => {
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(size.width, size.height), 0.6, 0.1, 0.9);
    
    composer.current = new EffectComposer(gl);
    composer.current.addPass(renderScene);
    composer.current.addPass(bloomPass);
    
    return () => {
      composer.current?.dispose();
    };
  }, [gl, scene, camera, size]);

  useFrame(() => {
    if (composer.current) {
      composer.current.render();
    }
  }, 1); // take over the render loop

  return null;
}

function MorphingObject() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((state, delta) => {
    // Continuous rotation on the mesh
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }

    // Mouse parallax effect on the group
    if (groupRef.current) {
      const isTouch = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
      
      if (!isTouch) {
        const targetX = (pointer.y * Math.PI) / 6;
        const targetY = (pointer.x * Math.PI) / 6;
        
        // Smooth interpolation for parallax
        groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
        groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
      }
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          {/* High-poly Icosahedron for beautiful wireframe */}
          <icosahedronGeometry args={[2.5, 6]} />
          <MeshDistortMaterial 
            color="#ffffff"
            wireframe={true} 
            transparent={true} 
            opacity={0.12} 
            distort={0.4}
            speed={2}
            toneMapped={false}
          />
        </mesh>
        
        {/* Abstract Inner Core */}
        <mesh>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshBasicMaterial 
            color="#ffffff" 
            wireframe={true} 
            transparent={true} 
            opacity={0.05} 
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ antialias: false }}>
      <color attach="background" args={["#040508"]} />
      <ambientLight intensity={0.5} />
      <MorphingObject />
      <PostProcessing />
    </Canvas>
  );
}
