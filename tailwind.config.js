import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#2563eb", // blue-600
          secondary: "#6366f1", // indigo-500
          accent: "#22c55e", // green-500
          neutral: "#1f2937", // gray-800
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
          "base-content": "#111827",
          info: "#0ea5e9",
          success: "#16a34a",
          warning: "#f59e0b",
          error: "#dc2626",
        },
      },
      {
        dark: {
          primary: "#60a5fa", // blue-400
          secondary: "#818cf8", // indigo-400
          accent: "#4ade80", // green-400
          neutral: "#0f172a", // slate-900
          "base-100": "#020617",
          "base-200": "#020617",
          "base-300": "#020617",
          "base-content": "#e5e7eb",
          info: "#38bdf8",
          success: "#22c55e",
          warning: "#fbbf24",
          error: "#f87171",
        },
      },
    ],
  },
};
