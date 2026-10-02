"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar(){
 const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const on=()=>setScrolled(window.scrollY>20); window.addEventListener("scroll",on); return()=>window.removeEventListener("scroll",on)},[]);
 const links=["Services","About Us","Contact"];
 return <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled?"bg-white/95 shadow-sm backdrop-blur-md":"bg-white/80 backdrop-blur-sm"}`}>
  <div className={`container flex items-center justify-between transition-all ${scrolled?"h-16":"h-20"}`}>
   <a href="#home" className="flex items-center gap-3 font-bold text-[15px] text-[#071b3a]"><span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#1258d8] to-[#20a85a] text-white">SS</span><span className="hidden sm:block">SHREE SHYAM INFOTECH</span></a>
   <nav className="hidden items-center gap-8 md:flex">{links.map(x=><a key={x} href={`#${x.toLowerCase().replaceAll(" ","-")}`} className="text-sm font-semibold text-slate-600 hover:text-[#1258d8]">{x}</a>)}<a href="#contact" className="rounded-full bg-[#1258d8] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-200 hover:bg-[#071b3a]">Get a Quote</a></nav>
   <button aria-label="Toggle menu" onClick={()=>setOpen(!open)} className="rounded-lg p-2 md:hidden">{open?<X/>:<Menu/>}</button>
  </div>
  {open&&<nav className="border-t bg-white px-5 pb-5 md:hidden">{links.map(x=><a onClick={()=>setOpen(false)} key={x} href={`#${x.toLowerCase().replaceAll(" ","-")}`} className="block border-b py-4 font-semibold">{x}</a>)}<a onClick={()=>setOpen(false)} href="#contact" className="mt-4 block rounded-xl bg-[#1258d8] p-3 text-center font-bold text-white">Get Started</a></nav>}
 </header>
}
