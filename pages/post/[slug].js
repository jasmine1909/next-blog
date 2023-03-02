import Article from '@/components/Article'
import ReaderNav from '@/components/ReaderNav'
import RightContainer from '@/components/RightContainer'
import { BlogContext } from '@/context/BlogConext'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
const styles = {
    content: "flex"
}
const Post = () => {
    const { posts, users } = useContext(BlogContext)
    const [post, setPost] = useState([])
    const [author, setAuthor] = useState([])
    const router = useRouter()
    useEffect(() => {
        if (posts.length === 0 || users.length === 0) {
            return
        }
        setPost(posts.find((post) => post.id === router.query.slug))
        setAuthor(users.find(user => user.id === post.data?.author))
    }, [post])

    return (
        <div className={styles.content}><ReaderNav />
            <div ><Article post={post} author={author} /></div>
            <RightContainer post={post} author={author} /></div>
    )
}

export default Post