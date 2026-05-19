"use client";
import Link from "next/link";
interface PostType {
  id: number;
  title: string;
  body: string;
}

export default function PostBlogComponent({ id, title, body }: PostType) {
  return (
    <>
      <Link href={`/blog/${id}`}>
        <div className="p-6 mt-8 shadow-sm cursor-pointer hover:ring-1 hover:ring-blue-500 border max-w-7xl mx-auto rounded-lg">
          <h1 className="text-2xl text-shadow-blue-700 font-bold">{title}</h1>
          <div className="p-6  shadow-sm cursor-pointer hover:ring-1 hover:ring-blue-500 border max-w-7xl mx-auto rounded-lg">
            <h1 className="text-2xl text-shadow-blue-700 line-clamp-2 font-bold">
              {title}
            </h1>
            <br />
            <p className="text-[20px] text-gray-600">{body}</p>
            <p className="text-[20px] text-gray-600 line-clamp-3">{body}</p>
          </div>
        </div>
      </Link>
      <h1 className="text-3xl font-semibold text-center mx-auto pt-10">
        Latest Blog
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        Stay ahead of the curve with fresh content on code, design, startups,
        and everything in between.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
        <div className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=1200&h=800&auto=format&fit=crop&q=60"
            alt=""
          />
          <h2 className="text-base text-slate-900 font-medium mt-3">{title}</h2>
          <p className="text-xs text-indigo-600 font-medium mt-1">{body}</p>
        </div>
      </div>
    </>
  );
}
