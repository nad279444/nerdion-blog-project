import React from 'react'
import axios from 'axios'
import MarkdownIt from 'markdown-it'
import Image from 'next/image'

 function Blog({post}) {
     const md = new MarkdownIt()
     const htmlContent = md.render(post.content)
    return (
        <>
             <h3 className="flex justify-center md:mt-24 my-12 md:text-6xl text-3xl md:relative top-46 font-bold">{post.title}</h3>
            <div className="md:m-60 md:mt-20 ">
                <div>
                    <Image src={`http://localhost:1337${post.media[0].url}`} width={800} height={500} priority/>
                    <div className="rounded overflow-hidden font-sans font-light md:text-lg pt-6 p-4" dangerouslySetInnerHTML={{__html:htmlContent}}></div>
                </div>
            </div>
        </>
    )
}
 export default Blog

 export async function getStaticProps({params}){
    const post = await axios.get(`http://localhost:1337/posts/${params.id}`)

    return {
        props:{
            post: post.data
        }
    }
 }

 export async function getStaticPaths(){
    const postResponse = await axios.get("http://localhost:1337/posts")

    const paths = postResponse.data.map((post) => {
        return {params: {id: post.id.toString()}}
    })
    return {
        paths,
        fallback:false
    }
 }