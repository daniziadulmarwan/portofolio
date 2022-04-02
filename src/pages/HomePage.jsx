import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import blogs from "../data/blog";
import BlogCard from "../elements/BlogCard";
import Loading from "../elements/Loading";

function HomePage() {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default HomePage;
