import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar />
        {children}
      </Box>
    </Container>
  );
};

export default Layout;
