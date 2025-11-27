"use client";
import React, { useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { AuthContext } from "./AuthContext";



const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // const signInUser = (email, password) => {
  //   setLoading(true);
  //   return signInWithEmailAndPassword(auth, email, password);
  // };

  const signInUser =  (email, password) => {
  setLoading(true);
  try {
    return signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    setLoading(false);  
    throw error;
  }
};

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const updateProfileUser = (updatedInfo) => {
    return updateProfile(auth.currentUser, updatedInfo);
  };

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    registerUser,
    signInUser,
    googleLogin,
    logOutUser,
    loading,
    user,
    setUser,
    updateProfileUser,
    forgetPassword,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
