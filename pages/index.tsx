import * as React from "react";
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
              Hey! I'm Pierre, a backend engineer solving customer problems in
              the cloud at they consulting.
            </Typography>
            <Typography sx={{ marginTop: 2 }}>
              On the job, I mostly build serverless architectures using
              Typescript and terraform, deployed to AWS or Azure.
            </Typography>
          </Box>
          <Avatar sx={{ width: 130, height: 130 }}>
            <Image
              src={"/pierre-small.jpg"}
              alt={"image of pierre"}
              fill={true}
            />
          </Avatar>
        </Box>
        <Typography sx={{ marginTop: 2 }}>
          I value open source and have started maintaining a few small packages
          like{" "}
          <a href="https://github.com/xddq/schema2typebox">schema2typebox</a>,{" "}
          <a href="https://github.com/xddq/ts2typebox">ts2typebox</a> and{" "}
          <a href="https://github.com/xddq/nodejs-typescript-modern-starter">
            nodejs-typescript-modern-starter
          </a>
          .
        </Typography>
        <Typography sx={{ marginTop: 2 }}>
          I am passionate about functional programming and secretly dream of
          Haskell.
        </Typography>
      </Box>
    </Layout>
  );
}
