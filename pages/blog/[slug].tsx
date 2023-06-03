// These (fs, path) are node.js modules. only works if used in getStaticProps
// since this is run on the server.
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

import {
  markdownToHtml,
  htmlToHighlightedHtml,
  getAllBlogPostSlugs,
  parseFrontmatterAndContentOfBlog,
} from "../../src/utils";
import { BlogPostData, StaticContentDirectories } from "../../types";
import Layout from "../../components/Layout";
// import { Typography } from "@mui/material";

type Props = BlogPostData & {
  olderPost: BlogPostData | null;
  newerPost: BlogPostData | null;
};

export const BlogPost: React.FC<Props> = ({
  title,
  excerpt,
  htmlContent,
  // olderPost,
  // newerPost,
}) => {
  return (
    <Layout>
      <Head>
        <title key="title">{title}</title>
        <meta name="description" content={excerpt} key="description" />
      </Head>
      <div id="blog-post-wrapper">
        <div
          id="blog-post"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
      </div>
    </Layout>
  );
};

type Params = {
  slug: string;
};

/**
 * Used to create all paths for inside the current folder (blog).
 */
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const blogPostDirectory: StaticContentDirectories = "blogPosts";
  const files = fs.readdirSync(path.join(blogPostDirectory));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

/**
 * Used to get all props for a given page (based on slug)
 */
export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const slug = context.params?.slug;
  const blogPostDirectory: StaticContentDirectories = "blogPosts";
  const blogPostFileName = path.join(blogPostDirectory, slug + ".md");

  const markdownWithMeta = fs.readFileSync(blogPostFileName, "utf-8");

  const { data: frontmatter } = matter(markdownWithMeta);

  const htmlContent = await markdownToHtml(markdownWithMeta);
  const highlightedHtmlContent = await htmlToHighlightedHtml(htmlContent);

  const allBlogPostSlugs = getAllBlogPostSlugs();
  const blogPostsWithCreationDate = allBlogPostSlugs.map((slug) =>
    parseFrontmatterAndContentOfBlog(slug)
  );

  // sort posts
  blogPostsWithCreationDate.sort(
    (post1, post2) =>
      new Date(post2.creationDate).getTime() -
      new Date(post1.creationDate).getTime()
  );
  // find index of current post
  const currentPostIndex = blogPostsWithCreationDate.findIndex(
    (post) => post.slug === slug
  );
  let olderPost:
    | ReturnType<typeof parseFrontmatterAndContentOfBlog>
    | undefined;
  let newerPost:
    | ReturnType<typeof parseFrontmatterAndContentOfBlog>
    | undefined;

  // case: we have an older blog post.
  if (currentPostIndex !== blogPostsWithCreationDate.length - 1) {
    olderPost = blogPostsWithCreationDate[currentPostIndex + 1];
  }
  // case: we have a newer blog post.
  if (currentPostIndex !== 0) {
    newerPost = blogPostsWithCreationDate[currentPostIndex - 1];
  }

  return {
    props: {
      slug: slug ?? "",
      // TODO: could parse instead of assume here.
      title: frontmatter.title as string,
      excerpt: frontmatter.excerpt as string,
      creationDate: frontmatter.creationDate as string,
      htmlContent: highlightedHtmlContent as string,
      olderPost: olderPost ?? null,
      newerPost: newerPost ?? null,
    },
  };
};

export default BlogPost;

// {olderPost !== null || newerPost !== null ? (
//   <View
//     style={{
//       marginTop: 40,
//       justifyContent: "center",
//       alignItems: "center",
//       paddingHorizontal: "5%",
//     }}
//   >
//     <Typography>Want to read more?</Typography>
//     {newerPost !== null ? (
//       <BlogPostPeak
//         blogPost={{
//           slug: newerPost.slug,
//           excerpt: newerPost.excerpt,
//           title: newerPost.title,
//           creationDate: newerPost.creationDate,
//         }}
//       />
//     ) : null}
//     {olderPost !== null ? (
//       <BlogPostPeak
//         blogPost={{
//           slug: olderPost.slug,
//           excerpt: olderPost.excerpt,
//           title: olderPost.title,
//           creationDate: olderPost.creationDate,
//         }}
//       />
//     ) : null}
//   </View>
// ) : null}
