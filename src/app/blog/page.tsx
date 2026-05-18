import BlogComponent from "@/components/BlogComponent";
import { blogType } from "../lib/ts/blogType";

export default function BlogPage() {
  const blogs: blogType[] = [
    {
      profile: "https://www.cats.org.uk/media/13139/220325case013.jpg",
      name: "meow meow",
      position: "princess",
      description: "Two flully and tiny puppies."
    },
    {
      profile: "https://www.cats.org.uk/media/13139/220325case013.jpg",
      name: "meow meow",
      position: "princess",
      description: ""
    },
    {
      profile: "https://www.cats.org.uk/media/13139/220325case013.jpg",
      name: "meow meow",
      position: "princess",
      description: ""
    },
  ];
  return (
  <div className="container mx-auto grid grid-cols-2 gap-4">
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
    </div>);
}
