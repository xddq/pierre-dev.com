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
          An offline-first shopping list app with real-time sync of shared
          shopping lists and push notifications such as "I just started shopping
          at X", without ads.
        </Typography>
        <Typography sx={{ width: "100%", marginTop: 2 }}>
          <b>Some used tech</b>: Websockets, GraphQL, Typescript, PostgreSQL,
          Redis, Docker, Automated Gitlab Pipelines, Git, Nodejs, React Native
          (iOS && Android apps),
        </Typography>
        <Typography sx={{ width: "100%", marginTop: 2 }}>
          <b>Motivation</b>: Learning. Somehow got notice of CRDTs and wanted to
          test them in practice. Also wanted to try out React Native and was in
          need of a shopping app for me and my partner which did not bombard us
          with ads, had fast and reliable syncing and notifications when one
          starts and stops shopping.
        </Typography>
        <Typography sx={{ width: "100%", marginTop: 2 }}>
          <b>Learnings</b>: 1. I learned a lot of react and react native (never
          used either before) and they are great (now my favourite, when I have
          to touch frontend) web ui tech! 2. Fixing bugs and deploying new
          versions for mobile apps is way harder than websites. For the future,
          rely on web apps whenver possible. 3. While fastlane is a great tool
          to automate away app deployments, there are still special cases for
          iOS and android and e.g. when adding notifications and automated e2e
          testing, stuff can get complicated. 4. While CRDTs are fun, they make
          code more complicated. 5. Doing bigger projects alone is not that much
          fun. Start something bigger with friends the next time! Preferably
          some who prefer doing frontend so I can focus in the backend part :p.
        </Typography>
      </Box>
    </Layout>
  );
}
