import React from "react";
import { BiLogOut } from "react-icons/bi";
import useSignOut from "../../hooks/useSignOut";
const LogOutButton = () => {
  const { loading, signOut } = useSignOut();

  return (
    <div className="mt-auto">
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <BiLogOut
          className={`w-6 h-6 cursor-pointer text-white`}
          onClick={signOut}
        />
      )}
    </div>
  );
};

export default LogOutButton;
