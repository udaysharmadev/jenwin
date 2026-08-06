export default function CaseStudyLoading() {
  return (
    <div className="min-h-screen bg-[#030303] animate-pulse">
      <div className="pt-24 pb-4 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="w-20 h-4 bg-[#111] rounded" />
      </div>

      <section className="relative pt-8 pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-6 bg-[#111] rounded-sm" />
          </div>
          <div className="w-3/4 h-16 bg-[#111] rounded mb-4" />
          <div className="w-1/2 h-6 bg-[#111] rounded" />
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px rounded-xl overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#0a0a0a] px-8 py-6">
                <div className="w-16 h-10 bg-[#111] rounded mb-2" />
                <div className="w-24 h-3 bg-[#111] rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-8 relative z-20">
        <div className="w-full aspect-video md:aspect-[21/9] bg-[#111] rounded-2xl" />
      </section>

      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="mb-12">
            <div className="w-24 h-4 bg-[#111] rounded mb-4" />
            <div className="space-y-3">
              <div className="w-full h-4 bg-[#111] rounded" />
              <div className="w-full h-4 bg-[#111] rounded" />
              <div className="w-3/4 h-4 bg-[#111] rounded" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
