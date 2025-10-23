import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const signUpWithEmailAndPassFunc = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateProfileFunc = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  const signInWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signoutUserFunc = () => {
    setLoading(true);

    return signOut(auth);
  };
  const authInfo = {
    signUpWithEmailAndPassFunc,
    updateProfileFunc,
    signInWithEmailAndPasswordFunc,
    setUser,
    signoutUserFunc,
    loading,
    signInWithGoogle,
    user,
    setLoading,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {

      setUser(currUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
