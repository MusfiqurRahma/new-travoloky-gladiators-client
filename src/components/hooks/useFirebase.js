import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/Firebase.init";

initializeAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
            
            })
            .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, []);  
    return {
        signInUsingGoogle,
        user,
        setUser,
        logOut,
        isLoading,
        setIsLoading
    }
}
export default useFirebase;