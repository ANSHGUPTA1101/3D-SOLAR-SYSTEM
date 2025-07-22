import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpeedStore } from "./speedStore";
import { Html } from "@react-three/drei";
import useIsMobile from "../hooks/useIsMobile";

function Planet({ name, radius, distance, color }) {
  const planetRef = useRef();
  const angleRef = useRef(0);
  const speeds = useSpeedStore((state) => state.speeds);
  const isPaused = useSpeedStore((state) => state.isPaused);
    const isMobile = useIsMobile();
   const baseDistance = isMobile ? 0.7 : 1.2;
  const adjustedDistance = baseDistance * distance;
  

  useFrame((_, delta) => {
    if (isPaused) return;
    const speed = speeds[name] || 0.01;
    angleRef.current += delta * speed;

     const x = adjustedDistance * Math.cos(angleRef.current);
    const z = adjustedDistance * Math.sin(angleRef.current);
    planetRef.current.position.set(x, 0, z);
  });

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={color} />
      <Html distanceFactor={isMobile ? 8 : 12}>
        <div
          style={{
            background: "rgba(0, 0, 0, 0.6)",
            color: "white",
            padding: "2px 6px",
            borderRadius: "4px",
            fontSize: "12px",
            pointerEvents: "none",
          }}
        >
          {name}
        </div>
      </Html>
    </mesh>
  );
}

export default Planet;
