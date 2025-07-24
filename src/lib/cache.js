import fs from "fs";
import path from "path";

const CACHE_DIR = path.resolve(process.cwd(), "local-cache");

export function getLocalBlogsCache() {
  try {
    const filePath = path.join(CACHE_DIR, "blogs.json");
    if (!fs.existsSync(filePath)) return null;

    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Failed to read cache:", err);
    return null;
  }
}

export function setLocalBlogsCache(data) {
  try {
    if (!fs.existsSync(CACHE_DIR)) {
      fs.mkdirSync(CACHE_DIR);
    }
    const filePath = path.join(CACHE_DIR, "blogs.json");
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to write cache:", err);
  }
}
