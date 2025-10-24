import React, { useEffect, useState } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import { auth } from '../firebase/firebase.config';
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({ children }) => {
  const [loading,setloading] = useState(true);
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const RegWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
      setUser(CurrentUser);
      setloading(false);
    });
    return () => {
      unsubscribe()
    }
  }, [])

  const Logout = () => signOut(auth)

  const Login = (email, password) => signInWithEmailAndPassword(auth, email, password)

  const SignByGoogle = ()=>signInWithPopup(auth, provider);
  
  const resetPassword = (email)=>{
    return sendPasswordResetEmail(auth, email);
  
  };


  const userInfo = {
    user,
    setUser,
    RegWithEmail,
    Logout,
    Login,
    SignByGoogle,
    loading,
    setloading,
    resetPassword
  };

  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;
