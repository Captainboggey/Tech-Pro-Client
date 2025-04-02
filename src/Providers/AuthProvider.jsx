import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebaseinit/firebase.config';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const gitProvider= new GithubAuthProvider();

const AuthProvider = ({children}) => {
  
    const [user,setUser]=useState(null);

    const signInWithEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signUpWithEmail=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        return signOut(auth)
    }
    const signInWithGoogle =()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const signInWithGit=()=>{
        return signInWithPopup(auth,gitProvider)
    }

    const authInfo={user,signInWithEmail,signUpWithEmail,logout,signInWithGoogle,signInWithGit}

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log('state changed')
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