import type { ActivityComponentType } from "@stackflow/react";
import { useStepFlow } from "../stackflow";
import Layout from "../components/Layout";

export interface ArticleParams {
  postId: string;
  title: string;
}

const Post: ActivityComponentType<ArticleParams> = ({ params }) => {
  const { stepPush } = useStepFlow("Main");
  return (
    <Layout appBar={{}}>
      <div>{params.title}</div>
      <button onClick={() => stepPush({ title: "zkkz" })}>nextStep</button>
    </Layout>
  );
};

export default Post;
