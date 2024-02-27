import React, { useState } from "react";

const Conversation = ({ conversation, emoji, lastIndex }) => {
  const [selectedConversation, setSelectedConversation] = useState("");

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div
        className={`flex gap-2 px-2 py-1 cursor-pointer hover:bg-sky-500 rounded ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => {
          setSelectedConversation(conversation);
        }}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePicture} alt="user avatar" />
          </div>
        </div>
        {/* username and icon */}
        <div className="flex flex-col flex-1 ">
          <div className="flex justify-between items-center gap-3">
            <p className="font-bold text-gray-200">{conversation.fullname}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {/* divider */}
      {!lastIndex && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation;
