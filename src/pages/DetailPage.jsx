import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import blogs from "../data/blog";

function DetailPage() {
  const { id } = useParams();

  const data = blogs.filter((blog) => {
    return blog.id === +id;
  });

  return (
    <>
      <Navbar />
      <div className="mt-5 container mx-auto px-10">
        <div className="card border rounded py-5 px-3">
          <h1 className="text-2xl text-slate-800 font-semibold mb-2">
            {data[0].title}
          </h1>
          <hr />
          <div className="text-sm text-slate-500 mt-2">
            <span>{data[0].author}</span> | <span>{data[0].date}</span>
          </div>
          <p className="mt-3 text-slate-700">{data[0].body}</p>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
