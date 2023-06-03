// These (fs, path) are node.js modules. Therefore they only work if used in
// getStaticProps since this is run on the server.
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Layout from "../../components/Layout";
import { GetStaticProps } from "next";
import { BlogPostPeakData } from "../../types";
import BlogPostPeak from "../../components/BlogPostPeak";

type Props = {
  blogPosts: BlogPostPeakData[];
};

type Params = {};

const Blog: React.FC<Props> = ({ blogPosts }) => {
  return (
    <Layout>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">Posts</Typography>
        {blogPosts.map((currItem, index) => {
          return <BlogPostPeak data={currItem} key={index}></BlogPostPeak>;
        })}
      </Box>
    </Layout>
  );
};

/**
 * Used to grab data at build time.
 * src: https://nextjs.org/docs/basic-features/data-fetching/get-static-props
 */
export const getStaticProps: GetStaticProps<Props, Params> = () => {
  // Gets static files from the dir
  const blogPostDirectory = "blogPosts";
  const files = fs.readdirSync(path.join(blogPostDirectory));

  // Gets slug and frontmatter for each post
  const blogPosts = files.map((filename) => {
    const readMarkdown = fs.readFileSync(
      path.join(blogPostDirectory, filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(readMarkdown);

    // TODO: maybe parse frontmatter with typebox here and return/expect correct
    // type

    return {
      frontmatter,
      slug: filename.replace(".md", ""),
    };
  });

  const result: BlogPostPeakData[] = blogPosts
    .sort((post1, post2) => {
      return (
        new Date(post2.frontmatter.creationDate).getTime() -
        new Date(post1.frontmatter.creationDate).getTime()
      );
    })
    .map((post) => {
      return {
        title: post.frontmatter.title as string,
        creationDate: post.frontmatter.creationDate as string,
        slug: post.slug,
        excerpt: post.frontmatter.excerpt as string,
      };
    });

  return {
    // The default exported component in this page will receive these props!
    props: {
      blogPosts: result,
    },
  };
};

export default Blog;
