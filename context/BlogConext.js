import { async } from "@firebase/util";
import { getDocs, collection, query, doc, setDoc } from "firebase/firestore";
import { createContext, useContext } from "react";
import { db } from "@/firebase";
import { useState, useEffect } from "react";
import { setUserProperties } from "firebase/analytics";
import { auth, provider } from '@/firebase'
import { signInWithPopup } from "firebase/auth";

// Creating the user context
const BlogContext = createContext();

// Making the function which will wrap the whole app using Context Provider
const BlogProvider = ({ children }) => {

    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [currentUser, setCurrentUser] = useState()
    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, "users"))
            setUsers(
                querySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        data: {
                            ...doc.data()
                        }
                    }
                })
            )
        }
        getUsers()

    }, [])


    useEffect(() => {
        const getPosts = async () => {
            const querySnapshot = await getDocs(collection(db, "articles"))
            setPosts(
                querySnapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        data: {
                            body: doc.data().body,
                            brief: doc.data().brief,
                            category: doc.data().category,
                            postLength: doc.data().postLength,
                            author: doc.data().author,
                            bannerImage: doc.data().bannerImage,
                            postOn: doc.data().postOn,
                            title: doc.data().title,

                        }
                    }
                })
            )
        }
        getPosts()
    }, [])

    const addUserToFireBase = async user => {
        await setDoc(doc(db, "users", user.email), {
            email: user.email,
            name: user.displayName,
            imageUrl: user.photoURL,
            followerCount: 0
        })

    }

    const handleUserAuth = async () => {
        const userData = await signInWithPopup(auth, provider)
        const user = userData.user
        setCurrentUser(user)
        addUserToFireBase(user)


    }
    return (
        <BlogContext.Provider value={{ posts, users, handleUserAuth, currentUser }}>
            {children}

        </BlogContext.Provider>
    )

}

export { BlogContext, BlogProvider }
// Make useUserContext Hook to easily use our context throughout the application
export function useUserContext() {
    return useContext(UserContext);
}