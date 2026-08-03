"use client";

import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import TypingIndicator from "./TypingIndicator";

import { useChat } from "@/hooks/useChat";

export default function ChatWindow() {
  const {
    messages,
    loading,
    sendMessage,
  } = useChat();

  return (
    <div className="flex h-screen flex-col bg-slate-100">

      <ChatHeader />

      <div className="flex-1 overflow-y-auto">
        <MessageList messages={messages} />

        {loading && (
          <div className="mx-auto max-w-5xl px-6">
            <TypingIndicator />
          </div>
        )}
      </div>

      <ChatInput
        onSend={sendMessage}
        disabled={loading}
      />

    </div>
  );
}