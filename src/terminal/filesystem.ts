export type FSNode =
  | {
      type: "dir";
      name: string;
      children: FSNode[];
    }
  | {
      type: "file";
      name: string;
      content: string;
    };

export const fs: FSNode = {
  type: "dir",
  name: "/",
  children: [
    {
      type: "dir",
      name: "docs",
      children: [
        {
          type: "file",
          name: "readme.txt",
          content: "This is a virtual filesystem.\nEverything lives in memory."
        }
      ]
    },
    {
      type: "dir",
      name: "logs",
      children: [
        {
          type: "file",
          name: "boot.log",
          content: "System boot OK.\nNo errors reported."
        }
      ]
    },
    {
      type: "file",
      name: "about.txt",
      content: "Fake terminal prototype running in React."
    }
  ]
};
