import React, { useContext, useState, useEffect, createContext } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Make sure this path is correct

// Create the context
const AuthContext = createContext();

// Custom hook to use the context
export function useAuth() {
  return useContext(AuthContext);
}

// The provider component
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Logout function
  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    // onAuthStateChanged is the key Firebase listener
    // It runs when a user logs in or logs out
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  // The value provided to the rest of the app
  const value = {
    user: currentUser, // Changed from 'user' to 'currentUser' for clarity if you prefer, but we'll use 'user' to match your Navbar
    logout,
  };

  // Don't render the app until the user state is confirmed
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}