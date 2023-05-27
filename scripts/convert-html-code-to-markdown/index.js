import fs from "fs";
import path from "path";
import { glob } from "glob";
import he from "he";

const dirPath = process.argv[2];

const files = await glob(path.join(dirPath, "**/*.md"));

files.forEach((file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error("Failed to read file:", err);
      return;
    }

    const regex =
      /<pre><code class="language-(.*?)">([\s\S]*?)<\/code><\/pre>/g;

    const replaces = [];

    for (const match of data.matchAll(regex)) {
      const raw = match[0];
      const lang = match[1];
      const code = match[2];
      const formatted =
          "\n```" + lang + "\n" + he.decode(code) + "\n```\n";
        replaces.push([raw, formatted]);
    }

    const result = replaces.reduce((acc, [raw, formatted]) => acc.replace(raw, formatted), data);

    fs.writeFile(file, result, "utf8", (err) => {
      if (err) {
        console.error("Failed to write file:", err);
      } else {
        console.log(`File updated: ${file}`);
      }
    });
  });
});
