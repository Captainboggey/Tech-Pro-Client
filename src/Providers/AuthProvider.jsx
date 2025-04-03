import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebaseinit/firebase.config';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const gitProvider= new GithubAuthProvider();

const AuthProvider = ({children}) => {
  
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const signInWithEmail=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signUpWithEmail=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const signInWithGit=()=>{
        setLoading(true)
        return signInWithPopup(auth,gitProvider)
    }

    const authInfo={user,signInWithEmail,signUpWithEmail,logout,signInWithGoogle,signInWithGit,loading}

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
           setLoading(false)
        })
        return()=>{
            unSubscribe()
        }
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;