"use client";

import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import { Message } from "@/types/chat";

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({
  messages,
}: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  // Empty chat screen
  if (messages.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Welcome to MetricMind
          </h2>

          <p className="mt-3 text-lg text-gray-500">
            Ask your first business question.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto px-6 py-8">
      <div className="mx-auto max-w-5xl">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
          />
        ))}

        {/* Scroll Target */}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}