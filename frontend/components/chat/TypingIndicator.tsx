"use client";

import { Bot } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div className="mb-6 flex justify-start">
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white">
          <Bot size={18} />
        </div>

        {/* Bubble */}
        <div className="rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
            MetricMind
          </p>

          <div className="flex items-center gap-2">
            <span className="text-gray-700">
              Thinking
            </span>

            <div className="flex gap-1">
              <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500"></span>

              <span
                className="h-2 w-2 animate-bounce rounded-full bg-blue-500"
                style={{ animationDelay: "150ms" }}
              ></span>

              <span
                className="h-2 w-2 animate-bounce rounded-full bg-blue-500"
                style={{ animationDelay: "300ms" }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}