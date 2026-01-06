// Preloader.jsx - ULTRA-FAST IMAGE LOADING
export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
      <div className="flex flex-col items-center text-center px-6 max-w-md animate-floatIn">
        
        {/* OPTIMIZED LOGO - PRELOADED + MULTIPLE FORMATS */}
        <div className="relative mb-8">
          <picture>
            <source 
              srcSet="/img/IMG_2800.webp" 
              type="image/avif"
            />
            <source 
              srcSet="/img/IMG_2800.webp" 
              type="image/webp"
            />
            <img
              src="/img/IMG_2800.webp"  // Progressive JPEG fallback
              alt="P.A. Bawaya Group Logo"
              className="w-26 h-24 rounded-2xl shadow-2xl ring-2 ring-white/50 backdrop-blur-sm object-cover"
              decoding="async"
              fetchPriority="high"  // CRITICAL: Forces instant load
              // REMOVED: loading="lazy" - defeats preloader purpose
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-gray-500/20 rounded-2xl blur-xl animate-pulse"></div>
        </div>

        {/* Preload critical assets */}
        <link rel="preload" href="/img/IMG_2800.webp" as="image" />
        <link rel="preload" href="/img/IMG_2800.webp" as="image" />
        <link rel="preload" href="/img/IMG_2800.webp" as="image" />

        <div className="w-20 h-px bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-gray-500/30 animate-shimmer"></div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-slate-800 bg-clip-text text-transparent mb-4 leading-tight">
          P.A. BAWAYA GROUP
        </h1>

        <p className="text-base md:text-lg text-gray-600 font-medium mb-6 max-w-sm leading-relaxed opacity-90">
          Delivering smart logistics, trade, and business solutions
          <span className="block text-sm font-light text-gray-500 mt-1">
            with efficiency and trust
          </span>
        </p>

        <div className="flex gap-4 mb-10 opacity-80">
          {['Trusted', 'Efficient', 'Global'].map((tag, index) => (
            <span
              key={tag}
              className="text-xs uppercase tracking-widest font-semibold px-3 py-1.5 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 animate-slideIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="w-48 h-2 bg-gray-100/80 backdrop-blur-sm rounded-full overflow-hidden shadow-inner">
          <div className="h-full bg-blue-600 rounded-full animate-progress w-[0%] shadow-md"></div>
        </div>
      </div>

      <style>{`
        @keyframes floatIn {
          0% { opacity: 0; transform: translateY(30px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes slideIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 60%; }
          100% { width: 100%; }
        }
        .animate-floatIn { animation: floatIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .animate-shimmer { animation: shimmer 2s infinite linear; }
        .animate-slideIn { animation: slideIn 0.6s ease-out forwards; }
        .animate-progress { animation: progress 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite; }
      `}</style>
    </div>
  );
}
