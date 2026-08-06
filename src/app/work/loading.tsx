export default function WorkLoading() {
  return (
    <div className="min-h-screen bg-[#030303]">
      {/* Hero skeleton */}
      <div className="pt-32 pb-20 lg:pt-40 lg:pb-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="w-24 h-3 bg-[#111] rounded animate-pulse mb-6" />
        <div className="w-80 h-10 bg-[#111] rounded animate-pulse mb-4" />
        <div className="w-96 h-4 bg-[#111] rounded animate-pulse" />
      </div>

      <div className="divider mx-6 lg:mx-8" />

      {/* Cards skeleton */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-56 rounded-2xl bg-[#080808] border border-[#111] animate-pulse"
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
