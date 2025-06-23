import React from "react";
import NewsList from "../components/NewsList";

function News() {
  return (
    <section>
      <h2 className="text-center my-4">Новини</h2>
      <NewsList />
    </section>
  );
}

export default News;