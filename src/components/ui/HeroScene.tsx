"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Sphere, Torus, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingRubyOrb() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    meshRef.current.rotation.y = t * 0.15;
    meshRef.current.rotation.z = Math.cos(t * 0.2) * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} position={[0, 0, 0]} castShadow>
        <icosahedronGeometry args={[1.2, 3]} />
        <MeshDistortMaterial
          color="#D81B60"
          distort={0.35}
          speed={1.5}
          roughness={0.05}
          metalness={0.9}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
}

function OrbitingRing({ radius, speed, tilt, color }: { radius: number; speed: number; tilt: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * speed;
    ref.current.rotation.x = tilt;
    ref.current.rotation.z = Math.sin(t * 0.5) * 0.05;
  });

  return (
    <Torus ref={ref} args={[radius, 0.018, 16, 100]} position={[0, 0, 0]}>
      <meshStandardMaterial
        color={color}
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.7}
      />
    </Torus>
  );
}

function Particles() {
  const count = 60;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.5 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null!);
  useFrame((state) => {
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#D81B60" sizeAttenuation transparent opacity={0.6} />
    </points>
  );
}

function SmallGlassSphere() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.position.x = Math.sin(t * 0.7) * 1.8;
    ref.current.position.y = Math.cos(t * 0.5) * 1.2;
    ref.current.position.z = Math.sin(t * 0.4) * 0.8;
  });

  return (
    <Sphere ref={ref} args={[0.18, 32, 32]}>
      <MeshTransmissionMaterial
        backside
        samples={6}
        resolution={256}
        transmission={1}
        roughness={0}
        ior={1.5}
        thickness={0.5}
        color="#ffffff"
        chromaticAberration={0.05}
      />
    </Sphere>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#D81B60" />
        <pointLight position={[-5, -3, -5]} intensity={0.8} color="#ffffff" />
        <pointLight position={[0, 8, 0]} intensity={0.5} color="#ff6b9d" />

        <FloatingRubyOrb />
        <OrbitingRing radius={1.9} speed={0.4} tilt={0.5} color="#D81B60" />
        <OrbitingRing radius={2.4} speed={-0.25} tilt={1.1} color="#b01550" />
        <OrbitingRing radius={2.9} speed={0.18} tilt={0.3} color="#ff6b9d" />
        <Particles />
        <SmallGlassSphere />
      </Canvas>
    </div>
  );
}
