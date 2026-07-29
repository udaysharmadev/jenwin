"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Sphere, Torus, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingRubyOrb() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
      meshRef.current.rotation.y = t * 0.15;
      meshRef.current.rotation.z = Math.cos(t * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} position={[0, 0, 0]} castShadow>
        <icosahedronGeometry args={[1.2, 3]} />
        <MeshDistortMaterial
          color="#8B0000"
          emissive="#DC143C"
          emissiveIntensity={0.5}
          distort={0.4}
          speed={2}
          roughness={0.02}
          metalness={0.95}
          envMapIntensity={2}
        />
      </mesh>
      
      {/* Outer subtle glow shell */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial 
          color="#FF0040" 
          transparent 
          opacity={0.08}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.BackSide}
        />
      </mesh>
    </Float>
  );
}

function FloatingMoon() {
  const groupRef = useRef<THREE.Group>(null!);
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * -0.3;
      groupRef.current.rotation.z = Math.sin(t * 0.1) * 0.2;
    }
    if (meshRef.current) {
      meshRef.current.rotation.x = t;
      meshRef.current.rotation.y = t * 1.5;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} position={[2.5, 0.5, 0]}>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial
          color="#111111"
          emissive="#DC143C"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </mesh>
    </group>
  );
}

function OrbitingRing({ radius, speed, tilt, color, thickness = 0.015 }: { radius: number; speed: number; tilt: number; color: string; thickness?: number }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * speed;
      ref.current.rotation.x = tilt;
      ref.current.rotation.z = Math.sin(t * 0.5) * 0.05;
    }
  });

  return (
    <Torus ref={ref} args={[radius, thickness, 16, 100]} position={[0, 0, 0]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </Torus>
  );
}

function Particles() {
  const count = 120;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.0 + Math.random() * 3;
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
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial 
        size={0.03} 
        color="#FF0040" 
        sizeAttenuation 
        transparent 
        opacity={0.8}
        blending={THREE.AdditiveBlending} 
        depthWrite={false}
      />
    </points>
  );
}

function SmallGlassSphere() {
  const ref = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.x = Math.sin(t * 0.7) * 2.2;
      ref.current.position.y = Math.cos(t * 0.5) * 1.5;
      ref.current.position.z = Math.sin(t * 0.4) * 1.2;
    }
  });

  return (
    <Sphere ref={ref} args={[0.25, 32, 32]}>
      <MeshTransmissionMaterial
        backside
        samples={4}
        resolution={128}
        transmission={1}
        roughness={0}
        ior={1.5}
        thickness={0.5}
        color="#ffffff"
        chromaticAberration={0.1}
      />
    </Sphere>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [-1, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent", width: "100%", height: "100%", pointerEvents: "none" }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[5, 5, 5]} intensity={2.5} color="#DC143C" />
        <pointLight position={[-5, -3, -5]} intensity={1.5} color="#FF0040" />
        <pointLight position={[0, 8, 0]} intensity={1} color="#8B0000" />
        <pointLight position={[0, 0, 0]} intensity={1} color="#DC143C" />

        <FloatingRubyOrb />
        <FloatingMoon />
        
        {/* Orbiting rings - increased count and blood red variants */}
        <OrbitingRing radius={1.9} speed={0.4} tilt={0.5} color="#DC143C" thickness={0.02} />
        <OrbitingRing radius={2.4} speed={-0.25} tilt={1.1} color="#8B0000" />
        <OrbitingRing radius={2.8} speed={0.18} tilt={0.3} color="#FF0040" thickness={0.01} />
        <OrbitingRing radius={3.2} speed={-0.1} tilt={1.5} color="#5e0000" />
        
        <Particles />
        <SmallGlassSphere />
      </Canvas>
    </div>
  );
}
