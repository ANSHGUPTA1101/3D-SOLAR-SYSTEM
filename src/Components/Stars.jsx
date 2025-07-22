import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";

function Stars({ count = 500 }) {
  const positions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push((Math.random() - 0.5) * 200);
      arr.push((Math.random() - 0.5) * 200);
      arr.push((Math.random() - 0.5) * 200);
    }
    return new Float32Array(arr);
  }, [count]);
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="white" size={0.3} sizeAttenuation />
    </points>
  );
}

export default Stars
