"use client";

import { useEffect, useRef } from "react";

import MessageBubble from "./MessageBubble";

import { Message } from "@/types/chat";

interface Props {
  messages: Message[];
}

export default function MessageList({ messages }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col p-6">
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message}
        />
      ))}

      <div ref={bottomRef} />
    </div>
  );
}