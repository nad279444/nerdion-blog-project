import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function Article({ post }) {
  return (
    <Link href={`/posts/${post.id}`}>
        <div className='bg-white rounded overflow-hidden shadow border'>
          <Image
            className='object-cover'
            src={`http://localhost:1337${post.media[0].url}`}
            width={700}
            height={300}
            priority
          />
          <div className='p-6'>
            <h5 className='text-center font-bold text-lg'>{post.title}</h5>
            <p className='text-center font-thin text-sm m-2'>{post.description}</p>
            <p className='text-center mb-4'>
              <small>Last updated {post.updated_at}</small>
            </p>
            <div className="flex justify-center">
            <a className='  hover:text-white hover:bg-red-800 rounded-full py-2 px-3 uppercase text-xs font-bold curser-pointer tracking-wider border bg-purple-300'>Read More</a>
            </div>
          </div>
        </div>
    </Link>
  );
}
