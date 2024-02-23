import React from "react";
import { BsSend } from "react-icons/bs";
const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full bg-gray-700 border-gray-600 flex justify-between rounded-lg p-1">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 text-white bg-transparent border-gray-500 border-none outline-none"
          placeholder="Send a message"
        />
        <button type="submit" className="mr-2">
          <BsSend className="text-lg" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
