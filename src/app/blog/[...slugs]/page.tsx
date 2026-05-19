"use client"
import {use} from "react";

// export default async function BlogSlugsCatchAllRoute(
//     {params

//     }:{
//         params: Promise<slugs: string[]}>
//     }) {
//     const {slugs} = await params;
//     return (
//         <h1>My blog catch-all: {slugs}</h1>
//     )
// }

export default function BlogSlugsCatchAllRoute({
    params
}: {
    params: Promise<{slugs: string[]}>
}) {
    const {slugs} = use(params); 
  return (
    <div>
        <h1>Catch-All Dynamic Routing NextJS</h1>
        <p>My Blog catch-all: {slugs}</p>
    </div>
  )
}