import React from 'react'
import axios from 'axios'
import MarkdownIt from 'markdown-it'

 function Blog({post}) {
     const md = new MarkdownIt()
     const htmlContent = md.render(post.content)
    return (
        <>
            <h3>{post.title}</h3>
            <div className="card">
                <div className="card-body">
                    <div dangerouslySetInnerHTML={{__html:htmlContent}}></div>
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