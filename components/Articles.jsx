import React from 'react'
import Article from './Article'
export default function Articles({posts}) {
    function featuredPosts (){
        return posts.map((post) => {
           return <Article post={post} key={post.id}/>
       })
     }

    return (
        <div className='grid lg:grid-cols-3 justify-center gap-5 m-16 font-body'>
            {featuredPosts()} 
        </div> 
                      

    )
}


