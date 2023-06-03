export type BlogPostData = {
  slug: string;
  title: string;
  excerpt: string;
  creationDate: string;
  htmlContent: string;
};

export type BlogPostPeakData = Omit<BlogPostData, "htmlContent">;

export type StaticContentDirectories = "blogPosts";
