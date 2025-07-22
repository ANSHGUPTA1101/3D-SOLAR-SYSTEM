import { create } from "zustand";

const DEFAULT_SPEEDS = {
  Mercury: 1,
  Venus: 0.8,
  Earth: 0.6,
  Mars: 0.5,
  Jupiter: 0.4,
  Saturn: 0.3,
  Uranus: 0.2,
  Neptune: 0.15,
};

export const useSpeedStore = create((set) => ({
  speeds: {
    ...DEFAULT_SPEEDS,
  },
  isPaused: false,
  theme: "dark",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "dark" ? "light" : "dark",
    })),
  togglePause: () =>
    set((state) => ({
      isPaused: !state.isPaused,
    })),
  setSpeed: (name, newSpeed) =>
    set((state) => ({
      speeds: {
        ...state.speeds,
        [name]: newSpeed,
      },
    })),
  resetSpeeds: () =>
    set(() => ({
      speeds: { ...DEFAULT_SPEEDS },
    })),
}));
