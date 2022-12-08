import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { stackflow } from "@stackflow/react";

import Post from "./activities/Post";
import Main from "./activities/Main";

export const { Stack, activities, useStepFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    Main,
    Post,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
    historySyncPlugin({
      routes: {
        Main: "/",
        Post: "/post/:postId",
      },
      fallbackActivity: () => "Main",
    }),
  ],
});

export type TypeActivities = typeof activities;
