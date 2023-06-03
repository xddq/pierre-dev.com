import React from "react";
import { BlogPostPeakData } from "../types";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

// In gray-matter the "data" is the yaml gray matter of a given file.
type Props = { data: BlogPostPeakData };

const BLOG_DIRECTORY_PATH = "/blog";

const getFormattedDate = (date: Date): string => {
  const month = date.getMonth();
  const year = date.getFullYear();

  // Convert month index to a human-readable format (e.g., January, February, etc.)
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[month];
  const formattedDate = `${monthName} ${year}`;
  return formattedDate;
};

export const BlogPostPeak: React.FC<Props> = ({ data }) => {
  const { title, excerpt, creationDate } = data;
  const link = `${BLOG_DIRECTORY_PATH}/${data.slug}`;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginX: 100,
        paddingX: 2,
      }}
    >
      <Link style={{ width: "100%" }} href={link}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <Typography variant="h5" style={{ textAlign: "left" }}>
              {title}
            </Typography>
          </div>
          <div style={{ width: "50%" }}>
            <Typography variant="body1" style={{ textAlign: "right" }}>
              {getFormattedDate(new Date(creationDate))}
            </Typography>
          </div>
        </div>
        <Typography variant="body1">{excerpt}</Typography>
      </Link>
    </Box>
  );
};

export default BlogPostPeak;
