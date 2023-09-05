import React from "react";
import Home from "./homePage";
import { getPosts } from "../../services";
import { headers } from "next/dist/client/components/headers";

export default async function page() {
  const headersList = headers();
  const posts = await getPosts();

  return <Home posts={posts} />;
}
