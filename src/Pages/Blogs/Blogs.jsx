import React from "react";
import { useLoaderData } from "react-router";
import { CiCalendarDate } from "react-icons/ci";
import "../../App.css";

const Blogs = () => {
  const blogData = useLoaderData();
  console.log(blogData);

  return (
    <div>
      <div className="flex pb-15 flex-col gap-7">
        {blogData.map((blog, index) => (
          <div className="p-10 rounded-2xl  bg-white" key={index}>
            <h1 className="font-bold mb-3 lg:text-xl">{blog.question}</h1>
            <hr className="border-dashed text-gray-300" />

            <div className="my-5">
              <small className="font-semibold text-[#176AE5]">Answer:</small>
              <h1 className="">{blog.answer}</h1>
            </div>
            <hr className="border-dashed text-gray-300" />

            <div className="flex mt-3 gap-2">
              <CiCalendarDate />
              <h1 className="text-xs font-medium text-gray-500">
                Added at {blog.addedDate}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
