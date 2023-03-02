import React from 'react'
import Logo from "../images/logo.png"
import Image from 'next/image'
const styles = {
    wrapper: "flex items-center justify-center flex-[3] border-l border-r",
    content: " h-screen  p-[2rem]",
    postHeaderContainer: " flex justtify-between items-center mt-[2.2rem] mb-[1.2rem]",
    authorContainer: "flex gap-[1rem]",
    authorImage: "h-[3rem] w-[3rem] grid center rounded-full overflow-hidden",
    column: "flex-1 flex flex-col justify-center",
    postDetails: "flex gap-[.2rem[ text-[#787878]",


    image: "",
    articleMainContainer: "flex flex-col gap-[1rem]",
    title: "font-semibold text-2xl",
    subtitle: "font-medium text-[1rem] text-[#292929]",
    articleText: "font-medium text-[1rem] text-[#292929]"
}
const Article = ({ post, author }) => {
    console.log(post, author)
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div class={styles.postHeaderContainer}>
                    <div class={styles.authorContainer}>
                        <div className={styles.authorImage}>
                            <Image src={`https://res.cloudinary.com/demo/image/fetch/${author?.data?.imageUrl}`} className={styles.image} height={100} width={100} />
                        </div>


                        <div className={styles.column}>
                            <div >{author?.data?.name}</div>
                            <div className={styles.postDetails}>

                                <span > {new Date(post.data?.postOn).toLocaleString("en-US", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric"
                                })} •  {post.data?.postLength} min read • <span >{post.data?.category}</span> </span>

                            </div>


                        </div>


                    </div>
                </div>
                <div class={styles.articleMainContainer}>
                    <div className={styles.bannerContainer}>
                        <Image src={`https://res.cloudinary.com/demo/image/fetch/${post.data?.bannerImage}`} height={100} width={100} className={styles.image} />
                    </div>
                    <h1 className={styles.title}> {post.data?.title}</h1>
                    <h4 className={styles.subtitle}>

                        <div> {post.data?.brief}</div>
                    </h4>
                    <div className={styles.articleText}>
                        {post.data?.body}</div>

                </div>




            </div>

        </div>
    )
}


export default Article 