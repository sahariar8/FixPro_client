import React, { createContext, useEffect, useState } from 'react';

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';




const auth = getAuth(app);
export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
const gitprovider = new GithubAuthProvider();

const ContextProvider = ({children}) => {


    const [user,setUser] = useState('');
    const [loading,setloading] = useState(true);

    //createUser
    const createUser = (email,password) =>{
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Sign In
    const userSignIn = (email,password) =>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

     //google Login

   const googleSign = () =>{
    setloading(true);
    return signInWithPopup(auth, provider)
  }
     //github Login

   const githubSign = () =>{
    setloading(true);
    return signInWithPopup(auth, gitprovider)
  }


    //sign Out

    const userSignOut = () =>{
        setloading(true);
        return signOut(auth);
    }

    //observer

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
            
                console.log('user in the auth state change',currentUser);
                setUser(currentUser);
                setloading(false);
            
        });
        return () =>{
            unsubscribe();
        }
    },[])


    const authInfo ={user,createUser,userSignIn,googleSign,githubSign,userSignOut,loading};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;