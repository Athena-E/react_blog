import React from "react";

import { getPosts, getPostDetails } from "../../../../services";

import PostPage from "./postPage";

export default async function page({ params }) {
  const data = await getPostDetails(params.slug);

  return <PostPage post={data} />;
}
