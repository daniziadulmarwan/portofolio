import React from "react";

const Loading = () => {
  return (
    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-600 via-indigo-600 to-green-600 animate-spin">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-7 h-7"></div>
    </div>
  );
};

export default Loading;
