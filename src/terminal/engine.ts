import { type FSNode, fs } from "./filesystem";

const cwd: string[] = [];

function getDir(node: FSNode, path: string[]): FSNode {
  let current = node;

  for (const part of path) {
    if (current.type !== "dir") throw new Error("Invalid path");

    const next = current.children.find(
      c => c.type === "dir" && c.name === part
    );

    if (!next) throw new Error("Directory not found");
    current = next;
  }

  return current;
}

export function execute(command: string): string {
  const [cmd, ...args] = command.trim().split(" ");

  try {
    switch (cmd) {
      case "ls": {
        const dir = getDir(fs, cwd);
        if (dir.type !== "dir") return "";
        return dir.children.map(c => c.name).join("  ");
      }

      case "cd": {
        const target = args[0];
        if (!target) return "";

        if (target === "..") {
          cwd.pop();
          return "";
        }

        const dir = getDir(fs, cwd);
        if (dir.type !== "dir") return "";

        const next = dir.children.find(
          c => c.type === "dir" && c.name === target
        );

        if (!next) return "Directory not found";

        cwd.push(target);
        return "";
      }

      case "cat": {
        const name = args[0];
        const dir = getDir(fs, cwd);

        if (dir.type !== "dir") return "";

        const node = dir.children.find(c => c.name === name);

        if (!node) return "File not found";
        if (node.type !== "file") return "Not a file";

        return node.content;
      }

      case "pwd":
        return "/" + cwd.join("/");

      case "help":
        return "Commands: ls, cd, cat, pwd, help";

      default:
        return `Command not found: ${cmd}`;
    }
  } catch (err: any) {
    return err.message;
  }
}
