"use client";
import React, { Fragment, useState } from "react";
import { BlogCard } from "@/components";
import { blogData } from "@/constants";
import { LiaBlogSolid } from "react-icons/lia";
const BlogPage = () => {
  return (
    <div className="px-4 w-full h-full h-full md:min-h-screen">
      <div className="flex mt-4 md:mt-12 items-center md:justify-center gap-3">
        <LiaBlogSolid className="text-4xl text-[#034d94] font-bold" />
        <p className="font-semibold text-2xl text-[#034d94]">Our Blogs</p>
      </div>
      <div className="mt-4 pb-10 mx-auto max-w-6xl gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {blogData?.map((blog, key) => (
          <Fragment key={key}>
            <BlogCard
              title={blog?.title}
              blogImage={blog?.blogImg}
              date={blog?.date}
              content={blog?.content}
              key={blog?.id}
              contentItems={blog?.contentItems}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
{/* <Borwser>
  // <Route path="/about" element={<ABout />} />
</Borwser> */}