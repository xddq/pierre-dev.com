import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ marginTop: 2 }}>
          Dev setup
        </Typography>
        <Typography sx={{ marginTop: 2 }}>
          editor/ide:
          <a href="https://www.vim.org/" target="_blank">
            vim
          </a>
        </Typography>
        <Typography sx={{ marginTop: 2 }}>
          window manager:
          <a href="https://i3wm.org/" target="_blank">
            i3
          </a>
        </Typography>
        <Typography sx={{ marginTop: 2 }}>
          password manager:
          <a href="https://www.passwordstore.org/" target="_blank">
            pass
          </a>{" "}
          and{" "}
          <a href="https://1password.com/" target="_blank">
            1password
          </a>
        </Typography>
        <Typography sx={{ marginTop: 2 }}>
          keyboard:{" "}
          <a href="https://www.zsa.io/moonlander/" target="_blank">
            moonlander
          </a>
        </Typography>
      </Box>
    </Layout>
  );
}
