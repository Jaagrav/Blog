import * as matter from "gray-matter";

export default function handler(req, res) {
  const { article } = req.body;

  const file = matter.read(`./blogs/${article}.md`);

  res.status(200).json({ file, success: true });
}
