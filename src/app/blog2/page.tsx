"use client"

import PostBlogComponent from "@/components/PostBlogComponent";
import { useEffect, useState } from "react"

export default function SecondBlogPage () {
    const [blog, setBlog] = useState([]);

    useEffect (() => {
        async function getAllBlog() {
            const res = await fetch (`https://dummyjson.com`+'/posts');
            const data = await res.json();
            console.log(`=> data: ${data}`);
            setBlog(data?.posts)
            return data;
        }
        getAllBlog();
    },[])
  
    return (
        <div>
            {
                blog?.map(({title, body, id}) => (
                    <PostBlogComponent id={id}  title={title} body={body}/>
                ))
            }
        </div>
    )
}