export default function ChatHeader() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-4 shadow-sm">
      <div>
        <h1 className="text-2xl font-bold text-blue-600">
          🤖 MetricMind
        </h1>
        <p className="text-sm text-gray-500">
          Agentic Semantic BI Engine
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <span className="text-sm text-gray-600">
          Connected
        </span>
      </div>
    </header>
  );
}