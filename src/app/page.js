import React from "react";
import Home from "./home/homePage";
import { getPosts } from "../../services";

export default async function page() {
  const posts = await getPosts();

  return <Home posts={posts} />;
}
