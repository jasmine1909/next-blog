import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import PostCard from '@/components/PostCard'

const inter = Inter({ subsets: ['latin'] })
import { BlogContext } from "../context/BlogConext"
import { useContext } from 'react'
import Post from './post/[slug]'

export default function Home() {
  const styles = {
    container: "max-w-7xl mx-auto my-8",
    postList: "grid gap-[5rem] p-8 mx-auto lg:grid-cols-2 md:gap-[8rem] lg:grid-cols-3 "
  }

  const { posts } = useContext(BlogContext)
  console.log(posts)

  return (
    <>
      <Header />
      <Banner />
      <div className={styles.container}>
        <div className={styles.postList}>
          {posts.map((post) =>
            <PostCard post={post} key={post.id} />)}

        </div>
      </div>


    </>
  )
}
