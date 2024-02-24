import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContextProvider";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullname,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const ok = handleInputErrors({
      fullname,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!ok) return;
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("User signup successfully");
        localStorage.setItem("chat-user", JSON.stringify(data));
        setAuthUser(data);
        setLoading(false);
      }
      if (!res.ok) {
        setLoading(false);
        toast.error(data?.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

const handleInputErrors = ({
  fullname,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("All fields are required");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("password do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
};

export default useSignUp;
