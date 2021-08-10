import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function Article({ post }) {
  return (
    <Link href={`/posts/${post.id}`}>
        <div className='bg-white rounded overflow-hidden shadow border'>
          <Image
            className='object-cover transform hover:scale-125 duration-500'
            src={`http://localhost:1337${post.media[0].url}`}
            width={700}
            height={450}
            priority
          />
          <div className='p-6'>
            <h5 className='text-center font-bold text-lg hover:text-green-500'>{post.title}</h5>
            <p className='text-center font-thin font-body text-sm m-2'>{post.description}</p>
            <p className='text-center mb-4'>
              <small>Last updated {post.updated_at.slice(-13,-2)}</small>
            </p>
            <div className="flex justify-center">
            <button className='  hover:text-white hover:bg-red-800 rounded-full py-2 px-3 uppercase text-xs font-bold curser-pointer tracking-wider  bg-transparent border-2 '>Read More</button>
            </div>
          </div>
        </div>
    </Link>
  );
}
