"use client";

import { useState } from "react";
import { fakeStream } from "@/lib/fakeStream";
import { Message } from "@/types/chat";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (question: string) => {
    if (!question.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: question,
    };

    setMessages((prev) => [...prev, userMessage]);

    const assistantId = crypto.randomUUID();

    const assistantMessage: Message = {
      id: assistantId,
      role: "assistant",
      content: "",
    };

    setMessages((prev) => [...prev, assistantMessage]);

    setLoading(true);

    await fakeStream((text) => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantId
            ? { ...msg, content: text }
            : msg
        )
      );
    });

    setLoading(false);
  };

  return {
    messages,
    loading,
    sendMessage,
  };
}