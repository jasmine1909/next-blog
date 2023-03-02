import React from 'react'
import Image from 'next/image'
import Logo from "../images/logo.png"
import Link from 'next/link'
import { AiOutlineHome, AiOutlineBell } from "react-icons/ai"
import { RiArticleLine } from "react-icons/ri"
import { RxPencil2 } from "react-icons/rx"
const styles = {
    wrapper: "w-[3.9rem] h-screen flex flex-col justify-between p-[1rem]",
    logoContainer: "cursor-pointer",
    iconsContainer: "flex-1 flex flex-col justify-center gap-[1.5rem] text-2xl text-[#787878]",

    profileImage: "object-cover",
    profileContainer: "w-[3rem] h-[3rem] rounded-full overflow-hidden place-items-center"

}
const ReaderNav = () => {
    return (
        <div className={styles.wrapper}>
            <Link href="/">
                <div className={styles.logoContainer}></div>
                <Image src={Logo} width={50} height={50} />
            </Link>

            <div className={styles.iconsContainer}>
                <AiOutlineHome />
                <AiOutlineBell />
                <RiArticleLine />

                <RxPencil2 />

            </div>
            <div className={styles.profileContainer}>
                <Image src={Logo} className={styles.profileImage} />

            </div>



        </div>
    )
}

export default ReaderNav