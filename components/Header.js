import React from 'react'
import Image from 'next/image'
import Logo from "../images/logo.png"
import { BlogContext } from '@/context/BlogConext'
import { useContext } from 'react'
import Modal from "react-modal"
import { useRouter } from 'next/router'
import Link from "next/link"
import WritePost from './WritePost'
Modal.setAppElement("#__next")
const styles = {
    wrapper: "flex justify-center gap-10  p-5 bg-[#F4F1E8]",
    logoContainer: "flex items-center flex-start",
    content: "max-w-7xl flex-1 flex justify-between gap-10",
    logo: "cursor-pointer object-contain",
    bannerNav: "flex cursor-pointer items-center space-x-5",
    headerButton: "bg-black text-white py-2 px-4 rounded-full"

}

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        transform: "translate(-50%,-50%)",
        backgroundColor: "#fff",
        padding: 0,
        border: "none"
    },
    overlay: {
        backgroundColor: " rgba(10, 11, 13, 0.75)"
    }
}
const Header = () => {
    const { currentUser, handleUserAuth } = useContext(BlogContext)
    const router = useRouter()

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>

                    <Image className={styles.logo} src={Logo} height={40} width={100} />

                </div>

                {!currentUser ? (
                    <div className={styles.bannerNav}>
                        <h3>Our story</h3>
                        <h3>Membership</h3>
                        <button onClick={handleUserAuth}>Sign In </button>
                        <div className={styles.headerButton}>Get Started</div>

                    </div>
                ) : (
                    <div className={styles.bannerNav}>
                        <h3>Our story</h3>
                        <h3>Membership</h3>
                        <Link href="/?addNew=1">
                            <button >Write </button></Link>
                        <div className={styles.headerButton}>Get  Unlimited Access</div>

                    </div>

                )
                }

            </div>

            <Modal isOpen={Boolean(router.query.addNew)} onRequestClose={() => router.push("/")}
                style={customStyles}>
                <div><WritePost />
                </div>
            </Modal>

        </div >
    )
}

export default Header