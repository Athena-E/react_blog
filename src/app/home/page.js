import React from "react";
import Home from "./homePage";
import { getPosts } from "../../../services";

export default async function page({ params }) {
  const posts = await getPosts();

  return <Home posts={posts} />;
}
