import { Canvas } from "@react-three/fiber";
import "./App.css";
import Planet from "./Components/planet";
import OrbitRing from "./Components/OrbitRing";
import Stars from "./Components/Stars";
import { OrbitControls } from "@react-three/drei";
import SpeedControlPanel from "./Components/SpeedControlPanel";
import { useSpeedStore } from "./Components/speedStore";

function App() {
  const isPaused = useSpeedStore((state) => state.isPaused);
  const togglePause = useSpeedStore((state) => state.togglePause);
  const resetSpeeds = useSpeedStore((state) => state.resetSpeeds);
  const theme = useSpeedStore((state) => state.theme);
  const bgColor = theme === "dark" ? "black" : "white";
  const lightColor = theme === "dark" ? "white" : "black";
  return (
    <>
      <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
        <Canvas
          camera={{ position: [0, 0, 30], fov: 60 }}
          style={{ backgroundColor: bgColor }}
        >
          <Stars count={1000} />
          <ambientLight intensity={0.2} color={lightColor} />
          <pointLight position={[0, 0, 0]} intensity={1} color={lightColor} />
          <mesh>
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial emissive="yellow" emissiveIntensity={2} />
          </mesh>
          <OrbitRing distance={5} />
          <Planet
            name="Mercury"
            radius={0.3}
            distance={5}
            color="grey"
            speed={0.05}
          />
          <OrbitRing distance={7} />
          <Planet
            name="Venus"
            radius={0.5}
            distance={7}
            color="orange"
            speed={0.035}
          />
          <OrbitRing distance={9} />
          <Planet
            name="Earth"
            radius={0.7}
            distance={9}
            color="skyblue"
            speed={0.03}
          />
          <OrbitRing distance={11} />
          <Planet
            name="Mars"
            radius={0.9}
            distance={11}
            color="red"
            speed={0.025}
          />
          <OrbitRing distance={13} />
          <Planet
            name="Jupiter"
            radius={0.11}
            distance={13}
            color="#c2a476"
            speed={0.02}
          />
          <OrbitRing distance={15} />
          <Planet
            name="Saturn"
            radius={0.13}
            distance={15}
            color="#e8d9aa"
            speed={0.017}
          />
          <OrbitRing distance={17} />
          <Planet
            name="Uranus"
            radius={0.15}
            distance={17}
            color="#a0dede"
            speed={0.014}
          />
          <OrbitRing distance={19} />
          <Planet
            name="Neptune"
            radius={0.17}
            distance={19}
            color="dodgerblue"
            speed={0.011}
          />
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            maxDistance={100}
            minDistance={5}
          />
        </Canvas>
        <SpeedControlPanel />
        <div className="ui-controls">
          <button onClick={togglePause}>
            {isPaused ? "▶ Resume" : "⏸ Pause"}
          </button>
          <button onClick={resetSpeeds}>🔄 Reset Speeds</button>
          <button onClick={useSpeedStore.getState().toggleTheme}>
            Toggle Theme    {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
