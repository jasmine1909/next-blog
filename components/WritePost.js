import { BlogContext } from '@/context/BlogConext'
import React from 'react'
import { useContext, useState } from 'react'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from '@/firebase'

const styles = {
    wrapper: " w-[70rem] h-[30rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediuum overflow-scroll",

    smallField: "w-full flex justify-between gap-[1rem]",
    fieldTitle: "flex-1 text-end  ",
    inputContainer: "flex-[5] h-min border-2 border-[#787878]",
    inputField: "w-full border-0 outline-none bg-transparent",
    button: "bg-black text-white py-2 px-4 rounded-full"
}
const WritePost = () => {
    const { currentUser } = useContext(BlogContext)
    const [title, setTitle] = useState("")
    const [brief, setBrief] = useState("")
    const [category, setCategory] = useState("")
    const [postLength, setPostLength] = useState("")
    const [bannerImage, setBannerImage] = useState("")
    const [body, setBody] = useState("")

    const addPostToFireBase = async event => {
        event.preventDefault()
        await addDoc(collection(db, "articles"), {
            bannerImage: bannerImage,
            body: body,
            title: title,
            brief: brief,
            category: category,
            postedOn: serverTimestamp(),
            postLength: Number(postLength),
            author: currentUser.email
        })
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}> Create A New Post </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Title</span>
                <span className={styles.inputContainer}>
                    <input className={styles.inputField} type="text" value={title} onChange={() => setTitle(event.target.value)}></input>
                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Brief</span>
                <span className={styles.inputContainer}>
                    <input className={styles.inputField} type="text"
                        value={brief} onChange={(event) => setBrief(event.target.value)}

                    ></input>
                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}> Banner Image URL</span>
                <span className={styles.inputContainer}>
                    <input className={styles.inputField} type="text" value={bannerImage} onChange={(event) => setBannerImage(event.target.value)}></input>
                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Category </span>
                <span className={styles.inputContainer}>
                    <input className={styles.inputField} type="text" value={category} onChange={(event) => setCategory(event.target.value)}></input>
                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Estimate Read Length (in minutes)</span>
                <span className={styles.inputContainer}>
                    <input className={styles.inputField} type="text" value={postLength} onChange={(event) => setPostLength(event.target.value)}></input>
                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Article Text</span>
                <span className={styles.inputContainer}>
                    <textarea className={styles.inputField} type="text" row={16} value={body} onChange={(event) => setBody(event.target.value)} />
                </span>
            </div>

            <button className={styles.button} onClick={addPostToFireBase}> Submit </button>


        </div>
    )
}

export default WritePost