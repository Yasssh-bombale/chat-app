import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContextProvider";

const useSignOut = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signOut = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signout");
      const data = await res.json();
      if (res.ok) {
        toast.success(data?.message);
        localStorage.removeItem("chat-user");
        setAuthUser("");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { signOut, loading };
};

export default useSignOut;
