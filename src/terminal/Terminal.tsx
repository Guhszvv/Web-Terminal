import { useState } from "react";
import { execute } from "./engine";

type Line = {
  type: "input" | "output";
  text: string;
};

export default function Terminal() {
  const initialLines: Line[] = [
    { type: "output", text: "Web Terminal v0.1" },
    { type: "output", text: "Type 'help' to list commands." },
    ];
  const [lines, setLines] = useState<Line[]>(initialLines);
  const [input, setInput] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const output = execute(input);

    setLines(prev => [
    ...prev,
    { type: "input" as const, text: `$ ${input}` },
    ...(output ? [{ type: "output" as const, text: output }] : [])
    ]);

    setInput("");
  }

  return (
    <div style={styles.container}>
      {lines.map((line, i) => (
        <div
          key={i}
          style={{
            color: line.type === "input" ? "#0f0" : "#ccc"
          }}
        >
          {line.text}
        </div>
      ))}

      <form onSubmit={onSubmit}>
        <span style={{ color: "#0f0" }}>$ </span>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          autoFocus
          style={styles.input}
        />
      </form>
    </div>
  );
}

const styles = {
    container: {
    background: "#000",
    color: "#fff",
    padding: "16px",
    fontFamily: "monospace",
    width: "100vw",
    height: "100vh",
    boxSizing: "border-box" as const,
    },
  input: {
    background: "transparent",
    border: "none",
    color: "#0f0",
    outline: "none",
    fontFamily: "monospace",
    width: "90%"
  }
};
