import React, { createContext } from 'react';
import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProviders = ({children}) => {
    const googleSignIn = ()=>{
        return signInWithPopup(auth , googleProvider)
    }
    const githubSignIn = ()=>{
        return signInWithPopup(auth , githubProvider)
    }
    const createUser = (email , password)=>{
        return createUserWithEmailAndPassword( auth , email , password)
    }
    const authInfo ={
        googleSignIn ,
        githubSignIn,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;