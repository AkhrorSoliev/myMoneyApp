import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

// toast
import { toast } from "sonner";
import { useState } from "react";

export const useSignout = () => {
  const [loading, setLoading] = useState(false);

  const signOutUser = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        toast.success("See you soon");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { signOutUser, loading };
};
