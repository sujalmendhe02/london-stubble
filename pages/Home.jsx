// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function HomePage() {
//     const navigate = useNavigate();
//     return (
//         <div className="bg-gradient-to-br from-white via-[#e6ecff] to-[#012169]  text-gray-900">

//             {/* HERO SECTION */}
//             <section className="relative h-screen flex items-center overflow-hidden">

//                 {/* Background Image */}
//                 <img
//                     src="img/WhatsApp-Photoroom.png"
//                     alt="hero"
//                     className="absolute w-full h-full object-contain scale-110 opacity-40 grayscale"
//                 />

//                 {/* Optional overlay */}
//                 <div className="absolute inset-0 bg-white/40"></div>

//                 {/* Content */}
//                 <div className="relative z-10 w-full grid md:grid-cols-2 items-center px-6 md:px-20 gap-10">

//                     {/* LEFT - TEXT */}
//                     <div className="text-left">
//                         <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-[#012169] via-[#1a1a1a] to-[#C8102E] bg-clip-text text-transparent leading-tight">
//                             SHARP <br />
//                             LOOKS. <br />
//                             SMARTER <br />
//                             GROOMING.
//                         </h1>

//                         {/* <p className="mt-4 text-gray-700 text-lg">
//                             High-performance grooming essentials designed for modern men.
//                         </p>

//                         <p className="mt-2 text-sm text-gray-800">
//                             London Stubble – Built for men who expect more.
//                         </p> */}

//                         <div className="mt-6 flex gap-4">
//                             <button className="bg-gradient-to-r from-[#012169] to-[#C8102E] text-white px-6 py-3 rounded-full hover:scale-105 transition">
//                                 Shop Now
//                             </button>
//                             <button className="border border-gray-800 text-gray-800 px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
//                                 Build Routine
//                             </button>
//                         </div>
//                     </div>

//                     {/* RIGHT - HERO IMAGE */}
//                     <div className="flex justify-center">
//                         <img
//                             src="/img/pngegg.png"
//                             alt="beard model"
//                             className="h-[420px] md:h-[520px] object-contain scale-x-[-1] drop-shadow-2xl scale-105 contrast-110"
//                         />
//                     </div>

//                 </div>
//             </section>

//             {/* INTRO */}
//             <section className="py-20 px-6 md:px-20 text-center ">

//                 {/* LOGO */}
//                 <div className="flex justify-center mb-6">
//                     <img
//                         src="img/logo.png" // 👈 apna logo path daal
//                         alt="London Stubble Logo"
//                         className="h-16 md:h-20 object-contain"
//                     />
//                 </div>

//                 {/* TAGLINE */}
//                 <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
//                     London Stubble – Built for men who expect more.
//                 </h2>

//                 {/* DESCRIPTION */}
//                 <p className="max-w-3xl mx-auto text-gray-600">
//                     At London Stubble, we create high-performance grooming essentials designed for modern men.
//                     Clean, effective formulas that work with your skin—not against it.
//                 </p>

//             </section>



//             {/* WHY CHOOSE */}
//             <section className="bg-gradient-to-r from-[#012169] via-black to-[#C8102E] text-white py-20 px-6 md:px-20 text-center">
//                 <h2 className="text-3xl font-semibold mb-10">Why Choose London Stubble</h2>

//                 <div className="grid md:grid-cols-4 gap-6">
//                     {[
//                         "Clean formulations",
//                         "High-performance results",
//                         "Modern masculine design",
//                         "Simple routines",
//                     ].map((item, i) => (
//                         <div key={i} className="bg-white/10 p-6 rounded-xl">
//                             {item}
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* PRODUCTS (ONLY 2) */}
//             <section className=" bg-white text-gray-900">
//                 <h2 className="text-3xl font-semibold text-center mb-12">
//                     Best Sellers
//                 </h2>

//                 <div className="grid grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl">

//                     {/* TOP LEFT - IMAGE */}
//                     <div
//                         onClick={() => navigate("/products")}
//                         className="relative group flex items-end justify-center cursor-pointer bg-white"
//                     >
//                         {/* VERY LIGHT RED GRADIENT */}
//                         <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff5f5] to-[#ffe5e5] opacity-90"></div>

//                         <img
//                             src="/img/nia.png"
//                             alt="Niacinamide Serum"
//                             className="h-100 object-contain relative z-10 group-hover:scale-105 transition"
//                         />
//                     </div>

//                     {/* TOP RIGHT - TEXT */}
//                     <div
//                         onClick={() => navigate("/products")}
//                         className="relative group flex flex-col justify-center text-center py-14 px-8 cursor-pointer bg-white"
//                     >
//                         {/* VERY LIGHT BLUE GRADIENT */}
//                         <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f5f9ff] to-[#eaf2ff] opacity-90"></div>

//                         <div className="relative z-10">
//                             <h3 className="text-xl font-semibold text-[#001f3f]">
//                                 Brighten & Even Skin Tone
//                             </h3>

//                             <p className="text-gray-600 mt-2">
//                                 Lightweight serum that fades dark spots and boosts glow.
//                             </p>

//                             <p className="text-sm mt-3 text-gray-500">
//                                 • 10% Niacinamide <br />
//                                 • Fades dark spots <br />
//                                 • Evens tone & glow <br />
//                                 • Suitable for all skin types
//                             </p>
//                         </div>
//                     </div>

//                     {/* BOTTOM LEFT - TEXT */}
//                     <div
//                         onClick={() => navigate("/products")}
//                         className="relative group flex flex-col justify-center text-center py-14 px-8 cursor-pointer bg-white"
//                     >
//                         <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f5f9ff] to-[#eaf2ff] opacity-90"></div>

//                         <div className="relative z-10">
//                             <h3 className="text-xl font-semibold text-[#001f3f]">
//                                 Stronger Beard. Healthier Growth.
//                             </h3>

//                             <p className="text-gray-600 mt-2">
//                                 Deep nourishing oil for beard growth and smooth texture.
//                             </p>

//                             <p className="text-sm mt-3 text-gray-500">
//                                 • Boosts beard growth <br />
//                                 • Deep moisturization <br />
//                                 • Smooth & shiny hair <br />
//                                 • Protects from damage
//                             </p>
//                         </div>
//                     </div>

//                     {/* BOTTOM RIGHT - IMAGE */}
//                     <div
//                         onClick={() => navigate("/products")}
//                         className="relative group flex items-center justify-center cursor-pointer bg-white"
//                     >
//                         <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff5f5] to-[#ffe5e5] opacity-90"></div>

//                         <img
//                             src="/img/beard.png"
//                             alt="Beard Serum"
//                             className="h-100 object-contain relative z-10 group-hover:scale-105 transition"
//                         />
//                     </div>

//                 </div>
//             </section>

//             {/* CATEGORIES */}
//             <section className="bg-gradient-to-r from-[#f5f7fb] via-[#eef2f7] to-[#e4e9f2] py-16">
//                 <div className="grid md:grid-cols-3 gap-6 px-6 md:px-20">

//                     {[
//                         {
//                             title: "Face Wash",
//                             desc: "Deep cleansing that keeps your skin fresh and strong.",
//                         },
//                         {
//                             title: "Face Serum",
//                             desc: "Hydration and repair in one powerful step.",
//                         },
//                         {
//                             title: "Beard Serum",
//                             desc: "Control and nourish your beard effortlessly.",
//                         },
//                     ].map((cat, i) => (
//                         <div
//                             key={i}
//                             onClick={() => navigate("/products")}
//                             className="bg-white p-8 rounded-2xl text-center cursor-pointer 
//                 hover:shadow-2xl hover:scale-105 transition duration-300 shadow-md border"
//                         >
//                             <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
//                             <p className="text-gray-600 mb-4">{cat.desc}</p>
//                             <button className="text-blue-700 font-medium">
//                                 Explore →
//                             </button>
//                         </div>
//                     ))}

//                 </div>
//             </section>

//             <section className="bg-white">

//                 <div className="grid md:grid-cols-2">

//                     {/* BOX 1 - IMAGE (POLYGON) */}
//                     <div className="relative h-[350px] md:h-[450px] overflow-hidden">
//                         <img
//                             src="img/WhatsApp Image 2026-04-16 at 3.24.23 PM.jpeg"
//                             className="w-full h-full object-cover transition duration-500 hover:scale-105"

//                         />
//                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

//                         </div>
//                     </div>

//                     {/* BOX 2 - TEXT */}
//                     <div className="bg-gradient-to-br from-[#f9fafc] to-[#e6ecff] text-gray-800 p-10 flex flex-col justify-center">

//                         <h2 className="text-black text-3xl font-semibold mb-4">
//                             Our <span className="block">Philosophy</span>
//                         </h2>

//                         <p>
//                             Skincare that actually cares for your skin.
//                         </p>

//                     </div>

//                     {/* BOX 3 - TEXT */}
//                     <div className="bg-gradient-to-br from-white via-[#f9fafc] to-[#ffe5ea] text-gray-800 p-10 flex flex-col justify-center">

//                         <h2 className="text-black text-3xl font-semibold mb-4 leading-tight">
//                             Effective <span className="block">Grooming</span>
//                         </h2>

//                         <p>
//                             Clean. Effective. Built for modern men.
//                         </p>

//                     </div>

//                     {/* BOX 4 - IMAGE (REVERSE POLYGON) */}
//                     <div className="relative h-[350px] md:h-[450px] overflow-hidden">
//                         <img
//                             src="img/WhatsApp Image 2026-04-16 at 3.34.27 PM.jpeg"
//                             className="w-full h-full object-cover transition duration-500 hover:scale-105"

//                         />
//                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

//                         </div>
//                     </div>

//                 </div>

//             </section>


//             {/* FINAL CTA */}
//             <section className="relative py-20 px-6 md:px-20 overflow-hidden">

//                 {/* Background Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#012169] via-black to-[#C8102E]"></div>

//                 {/* Glow Effects */}
//                 <div className="absolute left-10 top-10 w-72 h-72 bg-[#012169]/30 blur-3xl rounded-full"></div>
//                 <div className="absolute right-10 bottom-10 w-72 h-72 bg-[#C8102E]/30 blur-3xl rounded-full"></div>

//                 {/* Content */}
//                 <div className="relative z-10 text-center max-w-3xl mx-auto text-white">

//                     <h2 className="text-3xl md:text-5xl font-bold leading-tight">
//                         Upgrade Your Grooming Routine
//                     </h2>

//                     <p className="mt-4 text-lg text-gray-200">
//                         Clean. Effective. Built for modern men. Experience high-performance grooming
//                         designed to keep you sharp, confident, and ahead every day.
//                     </p>

//                     <div className="mt-8 flex justify-center gap-4 flex-wrap">

//                         <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition">
//                             Shop Now
//                         </button>

//                         <button className="border border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition">
//                             Explore Products
//                         </button>

//                     </div>

//                 </div>
//             </section>
//         </div>
//     );
// }



// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function HomePage() {
//     const navigate = useNavigate();

//     return (
//         <div className="bg-[#f8f9fc] text-gray-900 overflow-hidden">

//             {/* HERO */}
//             <section className="relative min-h-screen flex items-center px-6 md:px-20">

//                 {/* Background */}
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,16,46,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(1,33,105,0.10),transparent_35%),linear-gradient(to_bottom,#ffffff,#f8f9fc,#eef2ff)]"></div>

//                 {/* Grid */}
//                 <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

//                 <div className="relative z-10 grid md:grid-cols-2 gap-14 items-center w-full">

//                     {/* LEFT */}
//                     <div>

//                         <img
//                             src="/img/logo.png"
//                             alt="Logo"
//                             className="h-20 mb-5 object-contain  p-0 m-0 "
//                         />

//                         <p className="uppercase tracking-[0.4em] text-sm text-gray-500 mb-5">
//                             London Stubble
//                         </p>

//                         <h1 className="text-5xl md:text-7xl font-black leading-tight">
//                             Grooming
//                             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#012169] via-black to-[#C8102E]">
//                                 Refined.
//                             </span>
//                         </h1>

//                         <p className="mt-6 text-gray-600 text-lg max-w-xl leading-relaxed">
//                             Premium skincare and beard essentials built for men who move with confidence.
//                             Powerful formulas. Elevated design.
//                         </p>

//                         <div className="mt-8 flex gap-4 flex-wrap">
//                             <button
//                                 onClick={() => navigate("/products")}
//                                 className="bg-[#C8102E] text-white px-7 py-3 rounded-full font-semibold hover:scale-105 transition"
//                             >
//                                 Shop Now
//                             </button>

//                             <button
//                                 onClick={() => navigate("/products")}
//                                 className="border border-gray-300 px-7 py-3 rounded-full hover:bg-black hover:text-white transition"
//                             >
//                                 View Collection
//                             </button>
//                         </div>
//                     </div>

//                     {/* RIGHT */}
//                     <div className="flex justify-center">
//                         <div className="relative">
//                             <div className="absolute -inset-6 bg-gradient-to-r from-[#012169] to-[#C8102E] blur-3xl opacity-15 rounded-full"></div>

//                             <img
//                                 src="img/model.png"
//                                 alt="model"
//                                 className="relative h-[420px] md:h-[560px] object-contain drop-shadow-2xl scale-x-[-1]"
//                             />
//                         </div>
//                     </div>

//                 </div>
//             </section>

//             {/* TRUST BAR */}
//             <section className="border-y border-gray-200 bg-white">
//                 <div className="grid md:grid-cols-4 text-center">
//                     {[
//                         "Premium Ingredients",
//                         "Made For Men",
//                         "Fast Results",
//                         "Modern Design",
//                     ].map((item, i) => (
//                         <div key={i} className="py-5 text-sm uppercase tracking-[0.25em] text-gray-600">
//                             {item}
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* BRAND STORY / PHILOSOPHY SECTION - Pitch Theme Inspired */}
//             <section className="bg-white">
//                 <div className="grid md:grid-cols-2">

//                     {/* BOX 1 - TEXT */}
//                     <div className="bg-gradient-to-br from-white via-[#f8f9fc] to-[#eef3ff] text-gray-900 p-10 md:p-14 flex flex-col justify-center">
//                         <p className="uppercase tracking-[0.35em] text-sm text-[#C8102E] font-bold mb-3">
//                             London Standard
//                         </p>

//                         <h2 className="text-4xl md:text-5xl font-black leading-tight mb-5">
//                             Our <span className="block text-[#012169]">Philosophy</span>
//                         </h2>

//                         <p className="text-lg text-gray-700 leading-relaxed max-w-md font-semibold">
//                             Precision skincare crafted for men who value class, confidence,
//                             and results.
//                         </p>
//                     </div>

//                     {/* BOX 2 - IMAGE */}
//                     <div className="relative h-[350px] md:h-[450px] overflow-hidden">
//                         <img
//                             src="img/WhatsApp Image 2026-04-16 at 3.24.23 PM.jpeg"
//                             className="w-full h-full object-cover transition duration-700 hover:scale-105"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//                     </div>

//                     {/* BOX 3 - IMAGE */}
//                     <div className="relative h-[350px] md:h-[450px] overflow-hidden order-2 md:order-none">
//                         <img
//                             src="img/WhatsApp Image 2026-04-16 at 3.34.27 PM.jpeg"
//                             className="w-full h-full object-cover transition duration-700 hover:scale-105"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//                     </div>

//                     {/* BOX 4 - TEXT */}
//                     <div className="bg-gradient-to-br from-[#fff8f8] via-white to-[#eef2ff] text-gray-900 p-10 md:p-14 flex flex-col justify-center">
//                         <p className="uppercase tracking-[0.35em] text-sm text-[#C8102E] font-bold mb-3">
//                             Premium Grooming
//                         </p>

//                         <h2 className="text-4xl md:text-5xl font-black leading-tight mb-5">
//                             Effective <span className="block text-[#012169]">Grooming</span>
//                         </h2>

//                         <p className="text-lg text-gray-700 leading-relaxed max-w-md font-semibold">
//                             Clean formulas, sharp styling, and timeless British-inspired care
//                             for the modern man.
//                         </p>
//                     </div>

//                 </div>
//             </section>

//             {/* PRODUCTS */}
//             <section className="py-24 px-6 md:px-20">
//                 <div className="text-center mb-14">
//                     <h2 className="text-4xl md:text-5xl font-bold">Best Sellers</h2>
//                     <p className="text-gray-500 mt-3">
//                         Engineered for performance. Styled for confidence.
//                     </p>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-8">

//                     {[
//                         {
//                             title: "Face Serum",
//                             img: "/img/WhatsApp Image 2026-04-18 at 8.55.51 PM.jpeg",
//                             desc: "Hydrate, repair and brighten your skin with a lightweight formula.",
//                         },
//                         {
//                             title: "Beard Serum",
//                             img: "/img/WhatsApp Image 2026-04-18 at 8.49.33 PM.jpeg",
//                             desc: "Control, nourish and define your beard with premium care.",
//                         },
//                     ].map((item, i) => (
//                         <div
//                             key={i}
//                             onClick={() => navigate("/products")}
//                             className="group cursor-pointer rounded-3xl border border-gray-200 bg-white p-6 hover:-translate-y-2 hover:shadow-2xl transition"
//                         >
//                             <img
//                                 src={item.img}
//                                 alt={item.title}
//                                 className="w-full h-80 object-contain group-hover:scale-105 transition duration-300"
//                             />

//                             <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
//                             <p className="text-gray-500 mt-2">{item.desc}</p>

//                             <button className="mt-5 text-[#C8102E] font-semibold">
//                                 Explore →
//                             </button>
//                         </div>
//                     ))}

//                 </div>
//             </section>



//             {/* WHY US */}
//             <section className="py-24 px-6 md:px-20 bg-gradient-to-r from-[#012169] via-[#1a1a1a] to-[#C8102E] text-white">
//                 <div className="grid md:grid-cols-2 gap-12 items-center">

//                     <div>
//                         <h2 className="text-4xl md:text-5xl font-bold">
//                             Why Choose Us
//                         </h2>

//                         <p className="mt-5 text-gray-200 leading-relaxed">
//                             London Stubble combines clean formulations with premium aesthetics.
//                             Designed for men who value results and style.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-2 gap-5">
//                         {[
//                             "Clean Formulas",
//                             "Powerful Results",
//                             "Luxury Feel",
//                             "Simple Routine",
//                         ].map((item, i) => (
//                             <div
//                                 key={i}
//                                 className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center"
//                             >
//                                 {item}
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//             </section>

//             <section className="w-full bg-white">
//                 <div className="grid grid-cols-1 md:grid-cols-2">

//                     {/* LEFT CARD */}
//                     <div className="bg-[#fdf7f7] flex flex-col items-center justify-center px-6 py-14 text-center">

//                         {/* Artistic Shape */}
//                         <div className="w-full max-w-[440px] bg-[#f8eaea] rounded-[42%_58%_55%_45%/42%_38%_62%_58%] p-6 shadow-md">
//                             <img
//                                 src="img/WhatsApp Image 2026-04-19 at 5.01.08 PM.jpeg"
//                                 alt="Serum"
//                                 className="w-full h-auto rounded-3xl object-cover"
//                             />
//                         </div>

//                         <p className="mt-8 text-sm tracking-[4px] uppercase font-semibold text-[#C8102E]">
//                             London Formula
//                         </p>

//                         <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#8B0000]">
//                             SERUMS
//                         </h2>
//                     </div>

//                     {/* RIGHT CARD */}
//                     <div className="bg-[#f7f9ff] flex flex-col items-center justify-center px-6 py-14 text-center">

//                         {/* Artistic Shape */}
//                         <div className="w-full max-w-[440px] bg-[#e9eeff] rounded-[58%_42%_40%_60%/45%_60%_40%_55%] p-6 shadow-md">
//                             <img
//                                 src="img/WhatsApp Image 2026-04-19 at 5.01.13 PM.jpeg"
//                                 alt="Face Wash"
//                                 className="w-full h-auto rounded-3xl object-cover"
//                             />
//                         </div>

//                         <p className="mt-8 text-sm tracking-[4px] uppercase font-semibold text-[#012169]">
//                             Premium Cleanse
//                         </p>

//                         <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#012169]">
//                             FACE WASH
//                         </h2>
//                     </div>

//                 </div>
//             </section>

//             {/* CTA */}
//             <section className="py-24 px-6 md:px-20 text-center bg-white">

//                 <h2 className="text-4xl md:text-6xl font-black leading-tight">
//                     Look Sharp.
//                     <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#012169] via-black to-[#C8102E]">
//                         Feel Powerful.
//                     </span>
//                 </h2>

//                 <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
//                     Upgrade your grooming routine with products built for the modern man.
//                 </p>

//                 <button
//                     onClick={() => navigate("/products")}
//                     className="mt-8 bg-[#C8102E] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
//                 >
//                     Start Shopping
//                 </button>

//             </section>

//         </div>
//     );
// }


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const features = [
        {
            icon: "💎",
            title: "Premium Ingredients",
            desc: "Clean and effective formulas built for visible results.",
        },
        {
            icon: "✨",
            title: "Luxury Grooming",
            desc: "Designed for modern men who value premium care.",
        },
        {
            icon: "🛡️",
            title: "Skin Safe",
            desc: "Gentle products crafted for daily use.",
        },
        {
            icon: "🔄",
            title: "Easy Returns",
            desc: "Simple and smooth replacement experience.",
        },
    ];

    const faqs = [
        {
            q: "Are your products suitable for all skin types?",
            a: "Yes, our formulas are designed for most skin types including oily, dry and combination skin.",
        },
        {
            q: "How long does delivery take?",
            a: "Orders usually arrive within 3-7 business days depending on your location.",
        },
        {
            q: "Can I use beard serum daily?",
            a: "Yes, daily use is recommended for best nourishment and styling.",
        },
        {
            q: "Do you offer returns?",
            a: "Yes, we offer hassle-free returns on eligible products.",
        },
    ];

    return (
        <div className="bg-stone-50 text-stone-900 overflow-hidden">

            {/* HERO */}
            <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-stone-200">

                {/* Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,16,46,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(1,33,105,0.10),transparent_35%),linear-gradient(to_bottom,#ffffff,#f8f9fc,#eef2ff)]"></div>

                <div className="relative z-10 max-w-3xl">

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">

                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#012169] via-black to-[#C8102E]">
                            LONDON STUBBLE
                        </span>
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-600">
                        Premium grooming essentials crafted for modern men.
                    </p>

                    <div className="mt-8 flex gap-4 justify-center flex-wrap">
                        <button
                            onClick={() => navigate("/products")}
                            className="bg-[#C8102E] text-white px-8 py-3 hover:scale-105 transition"
                        >
                            Shop Now
                        </button>

                        <button
                            onClick={() => navigate("/products")}
                            className="border border-black px-8 py-3 hover:bg-black hover:text-white transition"
                        >
                            View Collection
                        </button>
                    </div>

                </div>
            </section>

            {/* COLLECTION GRID */}
            {/* <section className="max-w-7xl mx-auto py-16 px-4">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-serif">Shop By Collections</h2>

                    <button
                        onClick={() => navigate("/products")}
                        className="underline underline-offset-4"
                    >
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="relative group h-96 overflow-hidden cursor-pointer">
                        <img
                            src="img/WhatsApp Image 2026-04-16 at 3.24.23 PM.jpeg"
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        />
                        <h3 className="absolute bottom-6 left-6 text-white text-2xl font-bold">
                            Face Care
                        </h3>
                    </div>

                    <div className="relative group h-96 overflow-hidden cursor-pointer">
                        <img
                            src="img/WhatsApp Image 2026-04-16 at 3.34.27 PM.jpeg"
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        />
                        <h3 className="absolute bottom-6 left-6 text-white text-2xl font-bold">
                            Beard Care
                        </h3>
                    </div>

                </div>
            </section> */}

            {/* VISUAL BRAND STORY SECTION */}
            <section className="max-w-7xl mx-auto py-16 px-4">

                <div className="text-center mb-12">
                    <p className="uppercase tracking-[0.35em] text-sm text-gray-500 mb-3">
                        London Standard
                    </p>

                    <h2 className="text-4xl md:text-5xl font-black">
                        Crafted Through Care
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Premium grooming essentials designed to elevate your everyday routine.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

                    {/* BIG LEFT */}
                    <div className="md:col-span-2 relative h-[520px] overflow-hidden group cursor-pointer rounded-2xl">
                        <img
                            src="img/WhatsApp Image 2026-04-16 at 3.24.23 PM.jpeg"
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                        <div className="absolute bottom-8 left-8 text-white max-w-md">
                            <p className="uppercase text-xs tracking-[0.3em] mb-3">
                                Precision Formula
                            </p>

                            <h3 className="text-3xl md:text-4xl font-bold">
                                Face Care That Performs
                            </h3>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex flex-col gap-6 h-[520px]">

                        {/* RIGHT TOP IMAGE */}
                        <div className="relative flex-1 overflow-hidden group cursor-pointer rounded-2xl">
                            <img
                                src="img/WhatsApp Image 2026-04-16 at 3.34.27 PM.jpeg"
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                            />

                            <div className="absolute inset-0 bg-black/30"></div>

                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-bold">
                                    Beard Control
                                </h3>
                            </div>
                        </div>

                        {/* RIGHT BOTTOM CARD */}
                        <div
                            onClick={() => navigate("/products")}
                            className="flex-1 rounded-2xl bg-gradient-to-br from-[#012169] via-black to-[#C8102E] text-white flex flex-col justify-center px-8 cursor-pointer hover:scale-[1.02] transition"
                        >
                            <p className="uppercase tracking-[0.3em] text-xs mb-3">
                                Discover More
                            </p>

                            <h3 className="text-3xl font-bold leading-tight">
                                Explore Our Full Collection
                            </h3>

                            <span className="mt-5 text-sm">
                                Shop Now →
                            </span>
                        </div>

                    </div>

                </div>
            </section>

            {/* FEATURE PRODUCT */}
            {/* <section className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 border-t border-stone-200">

                <div>
                    <div className="bg-white h-[500px] border flex items-center justify-center">
                        <img
                            src="/img/WhatsApp Image 2026-04-18 at 8.55.51 PM.jpeg"
                            className="h-full object-contain"
                        />
                    </div>

                    <div className="flex gap-4 mt-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-24 w-24 border bg-white"></div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <span className="uppercase text-xs tracking-widest text-gray-500">
                        Best Seller
                    </span>

                    <h2 className="text-4xl font-bold mt-2">
                        Face Serum
                    </h2>

                    <p className="text-gray-600 mt-5 leading-relaxed">
                        Hydrate, repair and brighten your skin with a lightweight formula crafted for men.
                    </p>

                    <div className="text-2xl mt-6 font-semibold">
                        ₹699
                        <span className="line-through text-gray-400 ml-3 text-lg">
                            ₹999
                        </span>
                    </div>

                    <div className="flex flex-col gap-3 mt-8">
                        <button className="bg-black text-white py-4 uppercase font-semibold">
                            Add To Cart
                        </button>

                        <button className="border py-4 uppercase font-semibold">
                            Buy It Now
                        </button>
                    </div>
                </div>

            </section> */}

            {/* FEATURES */}
            <section className="bg-stone-100 py-16 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {features.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white border p-6 text-center"
                        >
                            <div className="text-3xl mb-4">{item.icon}</div>
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
                        </div>
                    ))}

                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-4xl mx-auto py-20 px-6">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Common Asked Questions
                </h2>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border bg-white">

                            <button
                                onClick={() =>
                                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                                }
                                className="w-full p-5 flex justify-between text-left"
                            >
                                <span>{faq.q}</span>
                                <span>{openFaqIndex === index ? "−" : "+"}</span>
                            </button>

                            {openFaqIndex === index && (
                                <div className="px-5 pb-5 text-gray-600">
                                    {faq.a}
                                </div>
                            )}

                        </div>
                    ))}
                </div>
            </section>

            {/* PRODUCTS */}
            <section className="max-w-7xl mx-auto py-20 px-6">

                <div className="text-center mb-14">
                    <p className="uppercase tracking-[0.35em] text-sm text-gray-500 mb-3">
                        London Stubble
                    </p>

                    <h2 className="text-4xl md:text-5xl font-black">
                        Best Sellers
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {[
                        {
                            title: "Face Serum",
                            img: "/img/WhatsApp Image 2026-04-18 at 8.55.51 PM.jpeg",
                        },
                        {
                            title: "Beard Serum",
                            img: "/img/WhatsApp Image 2026-04-18 at 8.49.33 PM.jpeg",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300"
                        >

                            {/* IMAGE */}
                            <div className="h-[430px] bg-[#f8f8f8] overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="p-6 flex items-center justify-between gap-4">

                                <div>
                                    <h3 className="text-2xl font-semibold">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Premium daily grooming essential
                                    </p>
                                </div>

                                <button
                                    onClick={() => navigate("/products")}
                                    className="bg-black text-white px-6 py-3 hover:bg-[#C8102E] transition whitespace-nowrap"
                                >
                                    Buy Now
                                </button>

                            </div>

                        </div>
                    ))}

                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden bg-[#050505] text-white py-24 px-6 text-center">

                {/* Union Jack Inspired Background */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(125deg,transparent_42%,#C8102E_42%,#C8102E_48%,transparent_48%,transparent_52%,#012169_52%,#012169_58%,transparent_58%),linear-gradient(-125deg,transparent_42%,#C8102E_42%,#C8102E_48%,transparent_48%,transparent_52%,#012169_52%,#012169_58%,transparent_58%)]"></div>

                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black"></div>

                <div className="relative z-10 max-w-4xl mx-auto">

                    <p className="uppercase tracking-[0.45em] text-sm text-gray-400 mb-5">
                        London Standard Grooming
                    </p>

                    <h2 className="text-5xl md:text-7xl font-black leading-tight">
                        Look Sharp.
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C8102E] to-[#012169]">
                            Feel Powerful.
                        </span>
                    </h2>

                    <p className="text-gray-300 mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Premium grooming essentials inspired by timeless British style and built for the modern man.
                    </p>

                    <div className="mt-10 flex justify-center gap-4 flex-wrap">

                        <button
                            onClick={() => navigate("/products")}
                            className="bg-[#C8102E] hover:bg-[#a80f27] px-8 py-4 font-semibold tracking-wide rounded-full shadow-2xl transition hover:scale-105"
                        >
                            Start Shopping
                        </button>

                        <button
                            onClick={() => navigate("/products")}
                            className="border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
                        >
                            View Collection
                        </button>

                    </div>

                </div>
            </section>

            {/* FOOTER */}
            {/* <footer className="bg-black text-gray-400 py-12 px-6 text-center">
                <h2 className="text-white text-2xl mb-5">London Stubble</h2>

                <div className="flex justify-center gap-8 mb-6 text-sm uppercase">
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Privacy</a>
                </div>

                <p className="text-xs">
                    © 2026 London Stubble. All rights reserved.
                </p>
            </footer> */}

        </div>
    );
};

export default Home;


// import React from "react";

// export default function Home() {
//     return (
//         <div className="bg-[#f8f8f6] min-h-screen px-4 md:px-10 py-6 text-[#121212]">

//             {/* Hero Section */}
//             <div className="relative max-w-6xl mx-auto mt-10 px-4 md:px-0">
//                 <div className="flex flex-col md:flex-row items-center">

//                     {/* Right Image */}
//                     <div className="w-full md:w-4/5 ml-auto">
//                         <img
//                             src="img/WhatsApp Image 2026-04-20 at 11.46.43 AM.jpeg"
//                             alt="hero"
//                             className="rounded-[2.5rem] shadow-sm w-full h-[300px] md:h-[550px] object-cover"
//                         />
//                     </div>

//                     {/* Left Text Card */}
//                     <div className="relative md:absolute md:left-0 bg-gradient-to-br from-white via-[#eef2ff] to-[#dbe7ff] p-8 md:p-12 rounded-[2rem] shadow-xl max-w-sm md:max-w-md mt-[-50px] md:mt-0 md:ml-4 border border-white/60 z-10">
//                         <p className="uppercase tracking-[0.35em] text-xs text-[#C8102E] mb-3">
//                             London Standard
//                         </p>

//                         <h1 className="text-3xl md:text-5xl font-medium mb-5 leading-[1.1] text-[#012169]">
//                             Look Sharp, <br className="hidden md:block" /> Naturally
//                         </h1>

//                         <p className="text-gray-700 mb-8 text-sm md:text-lg leading-relaxed">
//                             Premium grooming essentials crafted for modern men.
//                         </p>

//                         <button className="bg-[#C8102E] text-white px-10 py-3 rounded-full text-sm font-medium hover:bg-[#a50e27] transition">
//                             Shop Now
//                         </button>
//                     </div>

//                 </div>
//             </div>

//             {/* Best Sellers */}
//             <div className="mt-16 max-w-6xl mx-auto">
//                 <h2 className="text-2xl font-semibold mb-2 text-[#012169]">
//                     Shop our most trusted formulas
//                 </h2>

//                 <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-8">
//                     Best Sellers
//                 </p>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//                     {/* Product 1 */}
//                     <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100">
//                         <div className="overflow-hidden">
//                             <img
//                                 src="/img/WhatsApp Image 2026-04-18 at 8.55.51 PM.jpeg"
//                                 alt="Face Serum"
//                                 className="h-[420px] w-full object-cover group-hover:scale-105 transition-transform duration-700"
//                             />
//                         </div>

//                         <div className="p-6 flex items-center justify-between">
//                             <h3 className="font-semibold text-xl">Face Serum</h3>

//                             <button className="bg-[#C8102E] text-white px-6 py-3 rounded-full text-sm hover:bg-[#a50e27] transition">
//                                 Buy Now
//                             </button>
//                         </div>
//                     </div>

//                     {/* Product 2 */}
//                     <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100">
//                         <div className="overflow-hidden">
//                             <img
//                                 src="/img/WhatsApp Image 2026-04-18 at 8.49.33 PM.jpeg"
//                                 alt="Beard Serum"
//                                 className="h-[420px] w-full object-cover group-hover:scale-105 transition-transform duration-700"
//                             />
//                         </div>

//                         <div className="p-6 flex items-center justify-between">
//                             <h3 className="font-semibold text-xl">Beard Serum</h3>

//                             <button className="bg-[#C8102E] text-white px-6 py-3 rounded-full text-sm hover:bg-[#a50e27] transition">
//                                 Buy Now
//                             </button>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             {/* Quote Section */}
//             <div className="mt-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
//                 <div className="relative overflow-hidden rounded-none bg-gradient-to-br from-white via-[#fafafa] to-[#f2f4f7] px-8 md:px-16 py-14 border-y border-gray-200">

//                     {/* Soft Accent */}
//                     <div className="absolute -top-12 -left-12 w-60 h-60 bg-[#012169]/5 blur-3xl rounded-full"></div>
//                     <div className="absolute -bottom-12 -right-12 w-60 h-60 bg-[#C8102E]/5 blur-3xl rounded-full"></div>

//                     {/* Premium Top Line */}
//                     <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent"></div>

//                     <div className="relative text-center">
//                         <p className="text-2xl md:text-3xl font-serif text-gray-900 leading-relaxed max-w-2xl mx-auto">
//                             Built for the modern gentleman.
//                         </p>

//                         <p className="mt-6 text-xs tracking-[0.35em] uppercase text-gray-500 font-semibold">
//                             London Stubble
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Featured Section */}
//             <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

//                 {/* Left Side */}
//                 <div className="space-y-8">

//                     {/* Philosophy Card */}
//                     <div className="bg-gradient-to-br from-white via-[#eef2ff] to-[#f8f8f6] rounded-[2rem] p-8 shadow-sm border border-gray-100 h-64 flex flex-col justify-center">
//                         <p className="uppercase tracking-[0.35em] text-xs text-[#C8102E] mb-4">
//                             Our Philosophy
//                         </p>

//                         <h3 className="text-4xl md:text-5xl font-semibold text-[#012169] leading-tight">
//                             Built With Care
//                         </h3>

//                         <p className="text-gray-600 text-lg mt-4">
//                             Premium grooming for modern men.
//                         </p>
//                     </div>

//                     {/* Bottom Image */}
//                     <div className="group cursor-pointer">
//                         <div className="rounded-2xl overflow-hidden shadow-sm mb-3">
//                             <img
//                                 src="img/WhatsApp Image 2026-04-16 at 3.34.27 PM.jpeg"
//                                 className="w-full object-cover h-64 group-hover:scale-105 transition-transform"
//                             />
//                         </div>

//                         <p className="font-medium">Beard Control</p>
//                     </div>

//                 </div>

//                 {/* Right Big */}
//                 <div className="group cursor-pointer">
//                     <div className="rounded-[2.5rem] overflow-hidden shadow-sm h-full relative">
//                         <img
//                             src="img/WhatsApp Image 2026-04-16 at 3.24.23 PM.jpeg"
//                             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                         />

//                         <div className="absolute bottom-8 left-8">
//                             <p className="font-bold text-xl text-white drop-shadow-md">
//                                 Face Care That Performs
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//             {/* Features */}
//             <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-10 text-center max-w-5xl mx-auto">

//                 <div className="flex flex-col items-center">
//                     <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-4 text-2xl">
//                         💎
//                     </div>
//                     <h4 className="font-bold text-xs uppercase tracking-widest">
//                         Premium
//                     </h4>
//                     <p className="text-xs text-gray-400 mt-1">Luxury ingredients</p>
//                 </div>

//                 <div className="flex flex-col items-center">
//                     <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-4 text-2xl">
//                         ✨
//                     </div>
//                     <h4 className="font-bold text-xs uppercase tracking-widest">
//                         Grooming
//                     </h4>
//                     <p className="text-xs text-gray-400 mt-1">Modern care routine</p>
//                 </div>

//                 <div className="flex flex-col items-center">
//                     <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-4 text-2xl">
//                         🛡️
//                     </div>
//                     <h4 className="font-bold text-xs uppercase tracking-widest">
//                         Skin Safe
//                     </h4>
//                     <p className="text-xs text-gray-400 mt-1">Gentle daily use</p>
//                 </div>

//                 <div className="flex flex-col items-center">
//                     <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-4 text-2xl">
//                         🔄
//                     </div>
//                     <h4 className="font-bold text-xs uppercase tracking-widest">
//                         Returns
//                     </h4>
//                     <p className="text-xs text-gray-400 mt-1">Hassle free support</p>
//                 </div>

//             </div>

//             {/* CTA Section */}
//             <div className="mt-24 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] pb-20">
//                 <div className="relative overflow-hidden rounded-none px-8 md:px-16 py-16 text-center text-[#121212] bg-[#f8f8f6] border-y border-gray-200">

//                     {/* Light Cool Background */}
//                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,16,46,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(1,33,105,0.16),transparent_32%),radial-gradient(circle_at_center,rgba(255,255,255,0.7),transparent_45%),linear-gradient(135deg,#ffffff,#f7f8fc,#eef2ff)]"></div>

//                     {/* Soft Blur */}
//                     <div className="absolute inset-0 backdrop-blur-[2px]"></div>

//                     {/* Soft Glow */}
//                     <div className="absolute -top-10 left-1/4 w-52 h-52 bg-[#C8102E]/10 blur-3xl rounded-full"></div>
//                     <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[#012169]/10 blur-3xl rounded-full"></div>

//                     <div className="relative z-10 max-w-3xl mx-auto">
//                         <p className="uppercase tracking-[0.45em] text-xs text-gray-500 mb-4">
//                             London Standard Grooming
//                         </p>

//                         <h2 className="text-4xl md:text-6xl font-bold leading-tight">
//                             Look Sharp.
//                             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#012169] via-[#C8102E] to-[#4d73ff]">
//                                 Feel Powerful.
//                             </span>
//                         </h2>

//                         <p className="mt-5 text-gray-600 text-sm md:text-lg">
//                             Premium grooming essentials inspired by timeless British style.
//                         </p>

//                         <button className="mt-8 bg-[#C8102E] hover:bg-[#a50e27] text-white px-8 py-4 rounded-full font-medium transition shadow-xl hover:scale-105">
//                             Shop Now
//                         </button>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }
