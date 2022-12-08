import type { ActivityComponentType } from "@stackflow/react";
import { useFlow } from "../useFlow";
import styled from "styled-components";

import { Box, IconButton } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Layout from "../components/Layout";
import Logo from "../components/Logo";

import { useQuery } from "@apollo/client";
import { GET_POSTS, Post, DEFAULT_POST_SIZE } from "../queries/post";

const AppBarLeft = styled.div`
  display: flex;
  fontsize: 1.125rem;
  fontweight: 700;
  marginleft: 0.5rem;
`;

const AppBarRight = styled.div`
  display: grid;
  gridtemplatecolumns: 1.5rem 1.5rem 1.5rem;
  gap: 1rem;
  marginright: 0.5rem;
`;

const Main: ActivityComponentType = () => {
  const { push } = useFlow();

  const { data, loading, error } = useQuery<{ getPosts: Post[] }>(GET_POSTS, {
    variables: {
      postPaging: {
        size: DEFAULT_POST_SIZE,
      },
    },
    fetchPolicy: "no-cache",
  });
  console.log(data);

  const appBarLeft = () => (
    <Box sx={{ margin: "8px 0 0 10px" }}>
      <Logo width={112} height={32} />
    </Box>
  );

  const appBarRight = () => (
    <>
      <IconButton>
        <AddBoxOutlinedIcon sx={{ fontSize: 26, color: "black" }} />
      </IconButton>

      <IconButton>
        <NotificationsNoneOutlinedIcon sx={{ fontSize: 26, color: "black" }} />
      </IconButton>

      <IconButton>
        <SendOutlinedIcon sx={{ fontSize: 26, color: "black" }} />
      </IconButton>

      <IconButton>
        <PersonOutlineOutlinedIcon sx={{ fontSize: 26, color: "black" }} />
      </IconButton>
    </>
  );

  return (
    <Layout
      appBar={{
        appendLeft: appBarLeft,
        appendRight: appBarRight,
      }}
    >
      <button onClick={() => push("Post", { postId: "1", title: "abcd" })}>
        nextActivity
      </button>
    </Layout>
  );
};

export default Main;
