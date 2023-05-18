import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProviders = ({children}) => {

  const [user, setUser] = useState('');
  const [loading, setLoading] = useState('');

  const googleProvider =new GoogleAuthProvider();
  
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup (auth, googleProvider)
  }

   const signUpWithEmail = (email, password) => {
     setLoading(true);
     return createUserWithEmailAndPassword(auth, email, password);
   };

   const loginEmailAndPassword = (email, password) => {
     setLoading(true);
     return signInWithEmailAndPassword(auth, email, password);
   };
   const resetPassword = (email) => {
     return sendPasswordResetEmail(auth, email);
   };

   const githubProvider = new GithubAuthProvider();
   const loginWithGithub = () => {
     setLoading(true);
     return signInWithPopup(auth, githubProvider);
   };

   useEffect(() => {
     const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
       setUser(loggedInUser);
       setLoading(false);
     });
     return () => {
       unSubscribe();
     };
   }, []);

   const updateUserProfile = (name, photoUrl) => {
     return updateProfile(auth.currentUser, {
       displayName: name,
       photoURL: photoUrl,
     });
   };
  
   const logout = () => {
     return signOut(auth);
   };



  const authInfo = {
    user,
    setUser,
    loading,
    loginWithGoogle,
    updateUserProfile,
    signUpWithEmail,
    loginWithGithub,
    loginEmailAndPassword,
    logout,
    passwordReset: resetPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;