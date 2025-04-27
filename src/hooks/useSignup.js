// firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

// toast
import { toast } from "sonner";

// custom hook
import { useGlobalContext } from "./useGlobalContext";
import { useState } from "react";

export const useSignup = () => {
  const { dispatch } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const signup = (displayname, email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success(`Welcome`);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        toast.error(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { signup, loading };
};
