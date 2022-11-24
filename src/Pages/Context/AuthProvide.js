import React, { createContext, useEffect, useState} from 'react';
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userSignOut = () =>{
        return signOut(auth);
    }


    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, [])

    const authInfo = {
        signIn,
        user,
        userSignOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;