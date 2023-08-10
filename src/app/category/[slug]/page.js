import React from "react";

import { getCategoryPost } from "../../../../services";

import CategoryPage from "./cateogryPage";

export default async function page({ params }) {
  const data = await getCategoryPost(params.slug);

  return <CategoryPage posts={data} />;
}
