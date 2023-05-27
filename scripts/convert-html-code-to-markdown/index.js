import fs from "fs";
import path from "path";
import * as glob from "glob";

const dirPath = process.argv[2];

glob.globSync(path.join(dirPath, "**/*.md"), (err, files) => {
  if (err) {
    console.error("Failed to find files:", err);
    process.exit(1);
  }

  files.forEach((file) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.error("Failed to read file:", err);
        return;
      }

      const result = data.replace(/foo/g, "bar");

      fs.writeFile(file, result, "utf8", (err) => {
        if (err) {
          console.error("Failed to write file:", err);
        } else {
          console.log(`File updated: ${file}`);
        }
      });
    });
  });
});
