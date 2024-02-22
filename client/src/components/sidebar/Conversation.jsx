import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 px-2 py-1 cursor-pointer hover:bg-sky-500 rounded">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              alt="user avatar"
            />
          </div>
        </div>
        {/* username and icon */}
        <div className="flex flex-col flex-1 ">
          <div className="flex justify-between items-center gap-3">
            <p className="font-bold text-gray-200">john doe</p>
            <span className="text-xl">🎃</span>
          </div>
        </div>
      </div>
      {/* divider */}
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default Conversation;
