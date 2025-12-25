export default function Preloader() {
return (
<div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
<div className="flex flex-col items-center text-center px-6 max-w-md animate-fadeIn">


<img
src="/img/IMG_2800.jpeg"
alt="Company Logo"
className="w-20 mb-4"
/>


<div className="w-12 h-px bg-gray-300 mb-4"></div>


<h1 className="text-xl font-semibold text-gray-900 mb-2">
P.A. BAWAYA GROUP
</h1>


<p className="text-sm text-gray-600 mb-2">
Delivering smart logistics, trade, and business solutions
with efficiency and trust.
</p>


<p className="text-xs text-gray-400 uppercase tracking-wide mb-6">
Trusted • Efficient • Global
</p>




<div className="w-40 h-[2px] bg-gray-200 overflow-hidden">
<div className="h-full w-1/3 bg-gray-800 animate-loadingLine"></div>
</div>

</div>
</div>
);
}