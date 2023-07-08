import * as React from "react";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <Typography variant="h6">Home</Typography>
        </Link>
        <Link href="/projects">
          <Typography variant="h6">Projects</Typography>
        </Link>
        <a href="https://www.github.com/xddq" target="_blank">
          <GitHubIcon />
        </a>
      </Box>
    </Container>
  );
};

export default Navbar;
