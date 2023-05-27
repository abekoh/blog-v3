import fs from "fs";
import path from "path";
import {glob} from "glob";

const dirPath = process.argv[2];

const files = await glob(path.join(dirPath, "**/*.md"));

files.forEach((file) => {
    fs.readFile(file, "utf8", (err, data) => {
        if (err) {
            console.error("Failed to read file:", err);
            return;
        }

        const result = data.replace(/Vim/g, "Emacs");

        fs.writeFile(file, result, "utf8", (err) => {
            if (err) {
                console.error("Failed to write file:", err);
            } else {
                console.log(`File updated: ${file}`);
            }
        });
    });
});
