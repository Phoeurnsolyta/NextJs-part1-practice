import { blogType } from "@/app/lib/ts/blogType";
import Image from "next/image";

export default function BlogComponent({
  profile,
  name,
  position,
  description,
}: blogType) {
  return (
    <div className="bg-white  border border-orange-100 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-5 my-5">
      <div className="relative">
        <Image
          src={profile}
          alt={name}
          width={500}
          height={500}
          className="w-full h-64 object-cover"
        />

        <div className="absolute top-3 right-3 bg-white/80  px-3 py-1 rounded-full text-sm font-semibold text-orange-600 shadow">
          Pet House
        </div>
      </div>

      <div className="">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
        </div>

        <div className="inline-block bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full font-medium">
          {position}
        </div>

        <p className="text-gray-600 leading-relaxed">{description}</p>

        <div className="flex items-center gap-1 pt-2">
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>
          <span className="text-yellow-500">★</span>

          <p className="text-sm text-gray-500 ml-2">Cozy and lovely home</p>
        </div>

        <button className="w-full mt-4 bg-purple-500 hover:bg-purple-700 text-white py-3 rounded-2xl font-semibold transition-all duration-300">
          Visit Home
        </button>
      </div>
    </div>
  );
}
