import React from "react";

const QuickChat = () => {
  return (
    <div className="mx-auto flex flex-col max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <div className="text-xl font-medium text-black dark:text-white">
        Chit Chat
      </div>
      <p className="text-gray-500 dark:text-gray-400">You have a new Message</p>
    </div>
  );
};

export default QuickChat;
