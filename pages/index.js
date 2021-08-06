import axios from 'axios'
import React from 'react'
import Articles from '../components/Articles'


export default function Home({posts}) {
  return(
      <>
        <h4 className='font-black text-purple-800 text-lg relative md:top-14 md:left-16 italic'>Featured Posts</h4>
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
