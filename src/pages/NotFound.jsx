import React from "react";

function NotFound() {
  return (
    <div
      className="flex flex-col w-full justify-center items-center"
      style={{ height: "100vh" }}
    >
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl">Page Not Found</p>
      <a href="/" className="text-base mt-10 underline">
        Back
      </a>
    </div>
  );
}

export default NotFound;
