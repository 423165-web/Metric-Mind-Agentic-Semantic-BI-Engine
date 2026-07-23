"use client";

import { Bot, User } from "lucide-react";
import { Message } from "@/types/chat";

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({
  message,
}: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex w-full mb-6 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex max-w-4xl items-start gap-3 ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        {/* Avatar */}
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
            isUser
              ? "bg-blue-600 text-white"
              : "bg-emerald-600 text-white"
          }`}
        >
          {isUser ? (
            <User size={18} />
          ) : (
            <Bot size={18} />
          )}
        </div>

        {/* Bubble */}
        <div
          className={`rounded-2xl px-5 py-4 shadow-sm ${
            isUser
              ? "bg-blue-600 text-white"
              : "border border-gray-200 bg-white text-gray-900"
          }`}
        >
          <p
            className={`mb-2 text-xs font-semibold uppercase tracking-wide ${
              isUser
                ? "text-blue-100"
                : "text-gray-500"
            }`}
          >
            {isUser ? "You" : "MetricMind"}
          </p>

          <p className="whitespace-pre-wrap leading-7">
            {message.content}
          </p>
        </div>
      </div>
    </div>
  );
}