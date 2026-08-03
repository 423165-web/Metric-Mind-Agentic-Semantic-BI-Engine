"use client";

import { useState } from "react";
import { SendHorizontal } from "lucide-react";

interface Props {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({
  onSend,
  disabled = false,
}: Props) {
  const [message, setMessage] = useState("");

  const send = () => {
    const text = message.trim();

    if (!text || disabled) return;

    onSend(text);
    setMessage("");
  };

  return (
    <div className="border-t bg-white p-4">
      <div className="mx-auto flex max-w-5xl gap-3">

        <textarea
          value={message}
          rows={1}
          disabled={disabled}
          placeholder="Ask MetricMind anything..."
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
          className="flex-1 resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />

        <button
          onClick={send}
          disabled={disabled}
          className="rounded-xl bg-blue-600 px-5 text-white transition hover:bg-blue-700 disabled:bg-gray-400"
        >
          <SendHorizontal size={20} />
        </button>

      </div>
    </div>
  );
}