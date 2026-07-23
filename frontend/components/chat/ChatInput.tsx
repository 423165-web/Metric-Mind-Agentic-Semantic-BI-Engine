"use client";

import { useState } from "react";
import { SendHorizontal } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({
  onSend,
  disabled = false,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const text = message.trim();

    if (!text) return;

    onSend(text);
    setMessage("");
  };

  return (
    <div className="border-t bg-white p-4">
      <div className="mx-auto flex max-w-5xl gap-3">
        <textarea
          value={message}
          rows={1}
          placeholder="Ask MetricMind anything..."
          disabled={disabled}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          className="flex-1 resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        <button
          onClick={handleSend}
          disabled={disabled}
          className="rounded-xl bg-blue-600 px-5 text-white hover:bg-blue-700 disabled:bg-gray-400"
        >
          <SendHorizontal size={20} />
        </button>
      </div>
    </div>
  );
}