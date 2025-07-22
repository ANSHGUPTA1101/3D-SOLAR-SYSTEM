import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function OrbitRing({ distance }) {
  const ringRef = useRef();

  useFrame(() => {
    ringRef.current.rotation.x = Math.PI / 2;
  });

  return (
    <mesh ref={ringRef}>
      <ringGeometry args={[distance - 0.02, distance + 0.02, 64]} />
      <meshBasicMaterial color="#444" side={2} transparent opacity={0.3} />
    </mesh>
  );
}

export default OrbitRing;
