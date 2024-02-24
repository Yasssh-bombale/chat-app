import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContextProvider";

const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signIn = async ({ username, password }) => {
    const validData = handlerDataErrors({ username, password });
    if (!validData) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("chat-user", JSON.stringify(data?.user));
        setAuthUser(data?.user);
        toast.success(data?.message);
        setLoading(false);
      } else {
        toast.error(data?.message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  return { loading, signIn };
};

const handlerDataErrors = ({ username, password }) => {
  if (!username || !password) {
    toast.error("All fields are required");
    return false;
  }
  return true;
};

export default useSignIn;
