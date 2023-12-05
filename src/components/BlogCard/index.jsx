"use client";
// BlogCard.js
import React, { useState } from "react";
import { BlogModal } from "../BlogModal";

export const BlogCard = ({ title, blogImage, date, content, contentItems }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <BlogModal
        visible={visible}
        content={content}
        title={title}
        contentList={contentItems}
        handleClose={() => setVisible(false)}
      />
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md shadow-blue-200 grid place-content-between">
        <img
          className="w-full h-40 object-cover object-center"
          src={blogImage}
          alt="Blog"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold text-black mb-2">{title}</h2>
          <p className="text-black">
            {content.length > 80 ? <>{content.slice(0, 121)}...</> : content}
          </p>
        </div>
        <div className="flex justify-between items-center p-4">
          <p className="text-gray-600">{date}</p>
          <button
            onClick={() => setVisible(true)}
            className="text-[#034d94] border border-blue-400 hover:bg-[#034d94] hover:text-white transition px-4 py-2 rounded-md"
          >
            Read More
          </button>
        </div>
      </div>
    </>
  );
};
