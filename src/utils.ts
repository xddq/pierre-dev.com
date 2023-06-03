import { unified } from "unified";
import { rehype } from "rehype";
import rehypeHighlight from "rehype-highlight";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import fs from "fs";
import path from "path";

import { BlogPostData, StaticContentDirectories } from "../types";
import matter from "gray-matter";

/**
 * Converts given markdown string to html.
 */
export async function markdownToHtml(markdown: string) {
  // const result = await remark().use(html).process(markdown);
  // return result.toString();

  const result = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown);

  return String(result);
}

/**
 * Takes html and attaches correct highlighting to the html code blocks.
 */
export async function htmlToHighlightedHtml(html: string) {
  const file = await rehype()
    .data("settings", { fragment: true })
    .use(rehypeHighlight)
    .process(html);

  return String(file);
}

/**
 * Returns the slugs of all blog posts (without .md)
 * e.g.
 * [first-post,second-post]
 *
 * for the blog posts
 * /blog/first-post.md
 * /blog/second-post.md
 */
export function getAllBlogPostSlugs() {
  const blogPostDirectory: StaticContentDirectories = "blogPosts";
  const files = fs.readdirSync(path.join(blogPostDirectory));

  const slugs = files.map((filename) => filename.replace(".md", ""));
  return slugs;
}

/**
 * Returns the frontmatter of a given blog post by slug.
 */
export function parseFrontmatterAndContentOfBlog(slug: string): BlogPostData {
  const blogPostDirectory: StaticContentDirectories = "blogPosts";
  const blogPostFileName = path.join(blogPostDirectory, slug + ".md");

  const markdownWithMeta = fs.readFileSync(blogPostFileName, "utf-8");

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const title = frontmatter.title as string;
  const excerpt = frontmatter.excerpt as string;
  const creationDate = frontmatter.creationDate as string;

  return { title, excerpt, creationDate, htmlContent: content, slug };
}
