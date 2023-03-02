import React from 'react'
import Image from 'next/image'
import BannerImage from "../images/banner.jpg"
import { Stint_Ultra_Condensed } from 'next/font/google'
const styles = {
    Button: "bg-black text-white py-2 px-4 rounded-full",
    content: "max-w-7xl   flex items-center justify-between",
    wrapper: "h-[60vh] flex items-center justify-center bg-[rgb(244,241,232)] borer-black border-y"
}
const Banner = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className='space-y-5 px-10 flex-[3]'>
                    <h1 className='max-w-xl'>ELEGANTLY CURATED CONTENT AND HONEST STORY TELLING</h1>
                    <h3 className=''> Discover stories, thinking, and expertise from writers on any topic. </h3>
                    <button className={styles.Button} >
                        Start Reading </button>
                </div>
                <Image className='hidden h-[30vh]  md:inline-flex object-contain flex-1' src={BannerImage} />
            </div>
        </div>)
}

export default Banner