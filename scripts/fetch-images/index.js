import axios from "axios";
import fs from "fs";
import { glob } from "glob";
import path from "path";


const contentDirectory = process.argv[2];
const imageDirectory = "images/";

const IMAGE_URL_PATTERN = /https:\/\/images\.microcms-assets\.io\/[\w-/.]+/g;

// Check if images directory exists, if not create it
if (!fs.existsSync(imageDirectory)) {
  fs.mkdirSync(imageDirectory, { recursive: true });
}

const files = await glob(path.join(contentDirectory, "**/*.md"));

console.log(`Found ${files.length} files`);

// Loop over each .md file
files.forEach((file) => {
  const content = fs.readFileSync(file, "utf-8");
  const urls = Array.from(content.matchAll(IMAGE_URL_PATTERN), (m) => m[0]);

  // Download each image and save
  urls.forEach(async (url) => {
    const fileName = path.basename(url);
    const imagePath = path.join(imageDirectory, fileName);

    const response = await axios({
      url,
      method: "GET",
      responseType: "stream",
    });

    const writer = fs.createWriteStream(imagePath);
    response.data.pipe(writer);

    writer.on("finish", () => console.log(`Image saved: ${imagePath}`));
    writer.on("error", console.error);
  });
});
