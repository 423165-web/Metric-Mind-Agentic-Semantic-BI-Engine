"use client";

import { BotMessageSquare } from "lucide-react";

export default function ChatHeader() {
  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
            <BotMessageSquare size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              MetricMind
            </h1>

            <p className="text-sm text-gray-500">
              Enterprise Semantic BI Engine
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>

          <span className="text-sm font-medium text-green-700">
            Online
          </span>
        </div>
      </div>
    </header>
  );
}