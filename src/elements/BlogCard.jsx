import React from "react";

const BlogCard = (props) => {
  const url = `/detail/${props.data.id}`;
  return (
    <div className="card border rounded py-5 px-3">
      <h1 className="text-2xl text-slate-800 font-semibold">
        {props.data.title}
      </h1>
      <hr />
      <div className="text-sm text-slate-500 mt-2">
        <span>{props.data.author}</span> | <span>{props.data.date}</span>
      </div>
      <p className="mt-3 text-slate-700">{props.data.body}</p>
      <a
        href={url}
        className="bg-teal-500 text-white px-6 py-2 mt-4 inline-block rounded-full"
      >
        See More
      </a>
    </div>
  );
};

export default BlogCard;
