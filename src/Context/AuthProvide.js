import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState()
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const updateUserInfo = (userInfo) => {
        console.log(userInfo)
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo);
    }

    const [userRole, setUserRole] = useState([])

    // loaded all users
    useEffect(() => {
        fetch(`http://localhost:5000/users-role?userStatus=seller`)
            .then(res => res.json())
            .then(data => setUserRole({ data, user }))
        setLoading(false)

    }, [user])

    const googleLongIn = provider => {
        
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        setLoading(false)
        });

        return () => unsubscribe();
    }, [])

    const authInfo = {
        signIn,
        user,
        userSignOut,
        createUser,
        updateUserInfo,
        googleLongIn,
        userRole,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;