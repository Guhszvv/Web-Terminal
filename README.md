<h1 align="center">Web Terminal </h1>

An **interactive fake terminal running in the browser**, built with **React + TypeScript**, that simulates basic Unix shell commands (`ls`, `cd`, `cat`, `pwd`, etc.) using a **virtual in-memory filesystem**.

This project is **frontend-only**, does not access the real system.


<img source="src/assets/screenshot.png" align="center">


## ✨ Features

- Interactive terminal UI in the browser
- Virtual filesystem (directories and files in memory)
- Implemented commands:
  - `ls` — list files and directories
  - `cd <dir>` — navigate between directories
  - `cd ..` — go up one level
  - `pwd` — show current directory
  - `cat <file>` — display file contents
  - `help` — list available commands
- Command history rendered on screen
- Terminal-like interface (monospace font, dark background)
- No backend required


## 🧠 How it works

- The filesystem is defined as a TypeScript object
- The terminal keeps internal state for:
  - current working directory (`cwd`)
  - rendered output lines
- Each command operates **only on the virtual filesystem**
- No access to the real operating system is performed


## 🗂️ Project structure

```txt
src/
 ├─ terminal/
 │   ├─ filesystem.ts   # Virtual filesystem structure
 │   ├─ engine.ts       # Command parser and execution logic
 │   └─ Terminal.tsx    # Terminal UI component
 ├─ App.tsx
 └─ main.tsx
```

## 🚀 Running the project locally

1. Clone the repository: `git clone https://github.com/Guhszvv/Web-Terminal.git`
2. Install dependencies: `npm install`
3. Start Dev server: `npm run dev`
