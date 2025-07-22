import React from "react";
import { useSpeedStore } from "./speedStore";
import useIsMobile from "./../hooks/useIsMobile";

const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

function SpeedControlPanel() {
  const speeds = useSpeedStore((state) => state.speeds);
  const setSpeed = useSpeedStore((state) => state.setSpeed);
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        position: "absolute",
        top: 10,
        left: 10,
        background: "rgba(0, 0, 0, 0.8)",
        padding: "12px",
        color: "white",
        borderRadius: "10px",
        width: isMobile ? "80vw" : "300px",
        fontSize: isMobile ? "12px" : "14px",
        zIndex: 10,
      }}
    >
      <h4>Planet Speed Control</h4>
      {planets.map((planet) => (
        <div key={planet} style={{ marginBottom: "8px" }}>
          <label>{planet}: </label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.01"
            value={speeds[planet]}
            onChange={(e) => setSpeed(planet, parseFloat(e.target.value))}
            style={{
              flex: "1",
              minWidth: isMobile ? "100px" : "150px",
            }}
          />
          <span style={{ marginLeft: "8px", textAlign: "right" }}>
            {speeds[planet].toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default SpeedControlPanel;
