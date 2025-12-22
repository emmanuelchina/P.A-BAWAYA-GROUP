import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
const [open, setOpen] = useState(false);

const linkClass = ({ isActive }) =>
`block px-4 py-2 rounded-md font-semibold ${
isActive
? "bg-gray-800 text-white"
: "text-gray-800 hover:bg-gray-800 hover:text-white"
}`;

return (
<nav className="bg-cover   bg-center  w-full   shadow-md  sticky top-0 z-50 ">
<div className="max-w-7xl mx-auto px-4">

<div className="flex justify-between items-center h-16">


<div className="flex items-center space-x-2">
<img
src="/img/IMG_2726.png" 
alt="Logo"
className="h-10 w-10 object-contain"
/>
<span className=" head font-bold text-xl text-gray-800">
P.A BAWAYA GROUP
</span>
</div>

{/* Desktop menu */}
<div className="hidden md:flex space-x-4">
<NavLink to="/" end className={linkClass}>Home</NavLink>
<NavLink to="/About" className={linkClass}>About</NavLink>
<NavLink to="/services" className={linkClass}>Services</NavLink>
<NavLink to="/contact" className={linkClass}>Contact</NavLink>
</div>

{/* Mobile menu button */}
<button
onClick={() => setOpen(!open)}
className="md:hidden text-gray-800 focus:outline-none"
>
{/* Hamburger icon */}
<svg
className="w-7 h-7"
fill="none"
stroke="currentColor"
strokeWidth="2"
viewBox="0 0 24 24"
>
{open ? (
<path
strokeLinecap="round"
strokeLinejoin="round"
d="M6 18L18 6M6 6l12 12"
/>
) : (
<path
strokeLinecap="round"
strokeLinejoin="round"
d="M4 6h16M4 12h16M4 18h16"
/>
)}
</svg>
</button>
</div>

{/* Mobile menu */}
{open && (
<div className="md:hidden pb-4 space-y-2">
<NavLink onClick={() => setOpen(false)} to="/" end className={linkClass}>Home</NavLink>
<NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>About</NavLink>
<NavLink onClick={() => setOpen(false)} to="/services" className={linkClass}>Services</NavLink>
<NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>Contact</NavLink>
</div>
)}
</div>
</nav>
);
}