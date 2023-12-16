import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="body1">
              Hey! I'm Pierre, a software engineer working for <a
                href="https://they-consulting.de" target="_blank"> they consulting GmbH</a>, helping companies around
              the world build reliable and scalable solutions.
              I have been coding on a daily basis for the better part of the last 5 years. Starting with part time jobs besides my studies in 2018.</Typography>
          </Box>
          <Avatar sx={{ width: 130, height: 130 }}>
            <Image
              src={"/pierre-small.jpg"}
              alt={"image of pierre"}
              fill={true}
            />
          </Avatar>
        </Box>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          I eat plants and enjoy cooking. If you do as well, you might enjoy my latest side project, <a href="https://veg24.de" target="_blank">veg24.de</a>.
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          I value open source and have started maintaining a few small packages
          like{" "}
          <a href="https://github.com/xddq/schema2typebox" target="_blank">schema2typebox</a>,{" "}
          <a href="https://github.com/xddq/ts2typebox" target="_blank">ts2typebox</a> and{" "}
          <a href="https://github.com/xddq/nodejs-typescript-modern-starter" target="_blank">
            nodejs-typescript-modern-starter
          </a>
          .
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Contact me via email at <a href="mailto:hi@pierre-dev.com">hi@pierre-dev.com</a>
        </Typography>
      </Box>
    </Layout>
  );
}
