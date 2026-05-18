"use client"
import BlogComponent from "@/components/BlogComponent";
import { blogType } from "./lib/ts/blogType";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const blogs: blogType[] = [
      {
        profile: "https://ichef.bbci.co.uk/ace/standard/3840/cpsprodpb/0acc/live/fc706510-60ca-11f0-b428-cb3de5783b16.jpg",
        name: "Ah Boy",
        position: "Steav Phum",
        description: "មិត្តភិក្កស្លាប់រស់​"
      },
      {
        profile: "https://images.ctfassets.net/sfnkq8lmu5d7/1NaIFGyBn0qwXYlNaCJSEl/ad59ce5eefa3c2322b696778185cc749/2021_0825_Kitten_Health.jpg",
        name: "meow meow",
        position: "princess",
        description: "Two flully and tiny puppies."
      },
      {
        profile: "https://headsupfortails.com/cdn/shop/articles/Hamster-Breed_f9108f7e-644c-4195-894d-06a0bb48f06b.jpg?v=1754993969",
        name: "Puppies",
        position: "Owner of the house",
        description: "Boss babies"
      },
      {
        profile: "https://i.pinimg.com/736x/4e/1d/70/4e1d70b9108355399cbfb269c3d7742f.jpg",
        name: "Puppies",
        position: "Owner of the house",
        description: "Boss babies"
      },
      {
        profile: "https://i.pinimg.com/736x/2f/3e/d1/2f3ed11527805f5ba9249657edc5c8a6.jpg",
        name: "Puppies",
        position: "Owner of the house",
        description: "Boss babies"
      },
      {
        profile: "https://i1-c.pinimg.com/736x/80/64/90/80649068fb1954798f7043c6505c1d85.jpg",
        name: "Puppies",
        position: "Owner of the house",
        description: "Boss babies"
      }
    ];
  return (
   <div className="p-10 ">
    <h1 className="w-full h-50 flex justify-center py-20 text-3xl font-serif text-blue-900 text-center bg-purple-300">Hero Section</h1>
    <h2 className="text-4xl flex justify-center text-center text-pink-800 py-10">Visit our Cafe to meet these babies.</h2>

     <div className="container mx-auto grid grid-cols-3 gap-4">
        {
            blogs?.map(({profile, name, position, description},_) => (
                <BlogComponent
                key={_}
                profile={profile}
                name={name}
                position={position}
                description={description}/>
            ))
        }
        </div>
        <div className="flex justify-center m-10">
            <h1 className="text-3xl text-purple-950 p-5">Cart: {count}</h1>
            <button className="border border-purple-900 px-10 rounded-xl"
            onClick={() => setCount(count+1)}>Add to cart</button>
        </div>
    
   </div>
  );

}
