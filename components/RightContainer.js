import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Logo from "../images/logo.png"
import Image
    from 'next/image'
import Img1 from "../images/img1.jpg"
import Img2 from "../images/img2.jpg"
import Img3 from "../images/img3.jpg"
import Person1 from "../images/person1.jpg"
import Person2 from "../images/person2.jpg"
import Person3 from "../images/person3.jpg"
const styles = {
    wrapper: "h-screen min-w-[25rem] max-w-[30rem] flex-[3] p-[2rem]",
    Button: "bg-black text-white my-[1rem] py-[.6rem] rounded-full flex items-center justify-center text-sm",
    searchBar: "flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full",
    searchInput: "border-none",
    authorContainer: "my-[2rem]",
    authorProfile: "h-[5rem] w-[5rem] rounded-full overflow-hidden",
    authorName: "font-medium my-[0.3rem]",
    authorFollow: "text-[#787878]",
    articleContainer: "",
    recommendBox: "flex items-center justify-between my-[3rem]",
    recommendLeft: "",
    recommendRight: "h-[4rem] w-[4rem]",
    recommendAuthor: "flex items-center space-x-[2rem]",
    recommendAuthorImage: "h-[2rem] w-[2rem] rounded-full overflow-hidden object-cover",
    recommendName: "text-sm ",
    recommendTitle: "font-semibold mt-[1rem]"

}
const RightContainer = ({ post, author }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.Button}> Get Unlimited Access</div>

            <div className={styles.searchBar}>
                <AiOutlineSearch />
                <input className={styles.searchInput} placeholder="Search" type="text" />

            </div>

            <div className={styles.authorContainer}>
                <div className={styles.authorProfile}><Image src={Logo} width={100} height={100} /></div>
                <div className={styles.authorName}>{author.data?.name} </div>
                <div className={styles.authorFollow}>{author.data?.followerCount} Followers</div>
            </div>


            <div className={styles.recommendContainer}>
                <div className={styles.title}>More from Blog </div>
                <div className={styles.articleContainer}>
                    {recommendPost.map((post) => (
                        <div className={styles.recommendBox}>
                            <div className={styles.recommendLeft}>
                                <div className={styles.recommendAuthor}>
                                    <Image src={post.author.image} className={styles.recommendAuthorImage} height={100} width={100} />
                                    <div className={styles.recommendName}>{post.author.name}</div>
                                </div>
                                <div className={styles.recommendTitle} > {post.title}</div>
                            </div>
                            <div className={styles.recommendRight}>
                                <Image src={post.image} />
                            </div>
                        </div>
                    ))}


                </div>

            </div>




        </div>
    )
}

export default RightContainer

const recommendPost = [
    {
        title: "7 Rules for healthy eating",
        image: Img1,
        author: {
            name: "John Joe ",
            image: Person1
        },

    },
    {
        title: "My favourite things to do on weekends",
        image: Img2,
        author: {
            name: "Kris Joe ",
            image: Person2
        },

    },
    {
        title: "How to choose your collagen",
        image: Img3,
        author: {
            name: "Henry Joe ",
            image: Person3
        },

    }

]
