import * as React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <a href="https://www.github.com/xddq" target="_blank">
          <GitHubIcon />
        </a>
      </Box>
    </Container>
  );
};

// TODO: later might  add these.
// <Link href="/">
//   <Typography variant="h6">Home</Typography>
// </Link>
// <Link href="/blog">
//   <Typography variant="h6">Blog</Typography>
// </Link>
// <Link href="/projects">
//   <Typography variant="h6">Projects</Typography>
// </Link>

export default Navbar;
