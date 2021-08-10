import axios from 'axios'
import React from 'react'
import Articles from '../components/Articles'


export default function Home({posts}) {
  return(
      <>
        <h4 className='absolute top-14 left-16 font-black  md:text-3xl text-xl relative md:top-14 md:left-16 '>Featured Posts</h4>
        <Articles posts={posts}/>
      </>
  )
} 



export async function getStaticProps() {
  const postResponse = await axios.get('http://localhost:1337/posts')
  return {
    props:{
      posts:postResponse.data
    }
  }
  
}
