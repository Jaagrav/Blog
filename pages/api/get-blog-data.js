import * as matter from "gray-matter";

const fs = require("fs");
export default function handler(req, res) {
  const files = [];
  fs.readdirSync("./blogs").forEach((file) => {
    const { data } = matter.read(`./blogs/${file}`);
    files.push({
      file: file.split(".")[0],
      fileData: {
        title: data.title,
        publishedOn: data.publishedOn,
        excerpt: data.excerpt,
        readingTime: data.readingTime,
      },
    });
  });

  res.status(200).json({ files, success: true });
}
