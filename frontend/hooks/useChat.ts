"use client";

import { useState } from "react";
import { Message } from "@/types/chat";
import { fakeStream } from "@/lib/fakeStream";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (question: string) => {
  console.log("sendMessage called:", question);

  if (!question.trim()) return;

  const userMessage: Message = {
    id: crypto.randomUUID(),
    role: "user",
    content: question,
  };

  setMessages((prev) => [...prev, userMessage]);

  const assistantId = crypto.randomUUID();

  setMessages((prev) => [
    ...prev,
    {
      id: assistantId,
      role: "assistant",
      content: "",
    },
  ]);

  setLoading(true);

  await fakeStream((chunk) => {
    console.log(chunk);

    setMessages((prev) =>
      prev.map((message) =>
        message.id === assistantId
          ? { ...message, content: chunk }
          : message
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