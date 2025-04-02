import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../firebaseinit/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
  
    const [user,setUser]=useState(null);

    const signInWithEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signUpWithEmail=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const authInfo={user,signInWithEmail,signUpWithEmail}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;