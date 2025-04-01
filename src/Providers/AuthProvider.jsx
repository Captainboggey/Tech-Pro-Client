import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../firebaseinit/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
  
    const [user,setUser]=useState(null);

    const signInWithEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo={user,signInWithEmail}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;