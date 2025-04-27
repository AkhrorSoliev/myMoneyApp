// firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

// custom hook
import { useGlobalContext } from "./useGlobalContext";

// toast
import { toast } from "sonner";
import { useState } from "react";

export const useLogin = () => {
  const { dispatch } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const login = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success("Welcome back !");
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

  return { login, loading };
};
