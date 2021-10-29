import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/Firebase.init";

initializeAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    
    const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
            
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        })
        return () => unsubscribe;
    }, []);
        
    
    return {
        signInUsingGoogle,
        user,
        setUser,
        logOut
    }

}
export default useFirebase;