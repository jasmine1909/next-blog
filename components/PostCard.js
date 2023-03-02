import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from "../images/logo.png"
import Link from 'next/link'
import { db } from '@/firebase'
import { doc, getDoc, getDocs } from "firebase/firestore"

const styles = {
    wrapper: "flex max-w-[46rem] h-20rem] items-center gap-[1rem] cursor-pointer ",

    authorContainer: "flex items-center gap-[1rem]",
    authorImageContainer: "grid place-items-center rounded-full overflow-hidden h-[2rem] w-[2rem]",
    postDetails: "",
    authorImage: "objectc-cover",
    authorName: "font-medium",
    title: "font-semibold text-xl",
    briefing: "text-[#787878]",
    detailsContainer: "flex items-center justify-between text-[#787878]",
    category: "bg-[#f2f3f2]  p-1 rounded-full",
    articleDetail: "my-2 text-[.8rem]",
    postDetails: "flex-[2.5] flex flex-col"

}
const PostCard = ({ post }) => {
    const [authorData, setAuthorData] = useState([])
    useEffect(() => {
        const getAuthorData = async () => {
            console.log((await getDoc(doc(db, "users", post.data.author))).data())
            setAuthorData(
                (await getDoc(doc(db, "users", post.data.author))).data()
            )
        }
        getAuthorData()
    }, [post])

    return (
        <Link href={`/post/${post.id}`} >
            <div className={styles.wrapper}>

                <div className={styles.postDetails}>
                    <div className={styles.authorContainer}>
                        <div className={styles.authorImageContainer}>
                            <Image src={`https://res.cloudinary.com/demo/image/fetch/${authorData.imageUrl}`} className={styles.authorImage} width={40} height={40} />
                        </div>
                        <div className={styles.authorName}> {authorData.name}
                        </div>

                    </div>
                    <h1 className={styles.title}>{post.data.title} </h1>
                    <div className={styles.briefing}>{post.data.brief} </div>
                    <span className={styles.articleDetail}> {new Date(post.data.postOn).toLocaleString("en-US", {
                        day: "numeric",
                        month: "short"
                    })} •  {post.data.postLength} min read • <span className={styles.category}>{post.data.category}</span> </span>

                </div>

                <div className={styles.thumnail}>
                    <Image src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`} width={100} height={100} />
                </div>


            </div>
        </Link >


    )
}

export default PostCard