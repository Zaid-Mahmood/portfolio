import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBg() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    loadFull().then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 60 },
          color: { value: "#d64860" },
          size: { value: 2 },
          move: { enable: true, speed: 1 },
          links: { enable: true, color: "#ffffff" },
        },
      }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    />
  );
}
