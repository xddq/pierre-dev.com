import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Layout from "../components/Layout";

export default function Projects() {
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
        <Typography>
          These are only projects not published in my github account. For what
          else I currently think is somewhat worth sharing, check my pinned
          projects <a href="https://github.com/xddq">here</a>.
        </Typography>
        <Typography
          variant="h4"
          sx={{ width: "100%", marginTop: 2, textAlign: "center" }}
        >
          <a href="https://www.teamly-apps.com/">WeShop (2022)</a>
        </Typography>
        <Typography sx={{ width: "100%", marginTop: 2 }}>
          Android and (ex, did not pay the fee again after one year) iOS
          shopping list app with syncinc of shared shopping lists via
          websockets. A short video showcasing the app can be found{" "}
          <a
            href="https://www.teamly-apps.com/weshop-ad-video-final-music-happy.mp4"
            target="_blank"
          >
            here
          </a>
          .
        </Typography>
        <Typography sx={{ width: "100%", marginTop: 2 }}>
          I created the backend and (somewhat sadly also had to) create the
          frontend all on my own. Writing the backend was most fun for me here.
          I mainly used Typescript, Redis and PostgreSQL. I wrote my own
          registration and login (and experienced how painful this can be :D).
          Diving into GraphQL as the API technology was great fun, I did my
          bachelor thesis on GraphQL in the same time and was happy to bring the
          knowledge to use. The frontend was written in React Native. I did not
          even use react before and it was therefore somewhat painful to learn.
          But at least I am now capable of also writing frontend code with react
          and/or react native.
        </Typography>
        <Typography sx={{ width: "100%", marginTop: 2 }}>
          <b>Learnings</b>: 1. Backend is where the fun is for me. 2. Writing
          GraphQL really code first (just with the "graphql" package) is a valid
          option and gives you great composeability. 3. Automatically generating
          typed queries based on the GraphQL queries as well as not having to
          create swagger/Openapi documentations for your API are definetly some
          nice benefits you get when using GraphQL. 3. For side projects one
          should really focus on having a low maintenance burden and creating a
          mobile app definetly is not. Fixing issues and getting them live on
          iOS as well as android is painful (compared to hosting the app on the
          web).
        </Typography>
      </Box>
    </Layout>
  );
}
