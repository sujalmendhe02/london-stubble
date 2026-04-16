import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div className="bg-gradient-to-br from-white via-[#e6ecff] to-[#012169]  text-gray-900">

            {/* HERO SECTION */}
            <section className="relative h-screen flex items-center overflow-hidden">

                {/* Background Image */}
                <img
                    src="img/WhatsApp-Photoroom.png"
                    alt="hero"
                    className="absolute w-full h-full object-contain scale-110 opacity-40 grayscale"
                />

                {/* Optional overlay */}
                <div className="absolute inset-0 bg-white/40"></div>

                {/* Content */}
                <div className="relative z-10 w-full grid md:grid-cols-2 items-center px-6 md:px-20 gap-10">

                    {/* LEFT - TEXT */}
                    <div className="text-left">
                        <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-[#012169] via-[#1a1a1a] to-[#C8102E] bg-clip-text text-transparent leading-tight">
                            SHARP <br />
                            LOOKS. <br />
                            SMARTER <br />
                            GROOMING.
                        </h1>

                        {/* <p className="mt-4 text-gray-700 text-lg">
                            High-performance grooming essentials designed for modern men.
                        </p>

                        <p className="mt-2 text-sm text-gray-800">
                            London Stubble – Built for men who expect more.
                        </p> */}

                        <div className="mt-6 flex gap-4">
                            <button className="bg-gradient-to-r from-[#012169] to-[#C8102E] text-white px-6 py-3 rounded-full hover:scale-105 transition">
                                Shop Now
                            </button>
                            <button className="border border-gray-800 text-gray-800 px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
                                Build Routine
                            </button>
                        </div>
                    </div>

                    {/* RIGHT - HERO IMAGE */}
                    <div className="flex justify-center">
                        <img
                            src="/img/pngegg.png"
                            alt="beard model"
                            className="h-[420px] md:h-[520px] object-contain scale-x-[-1] drop-shadow-2xl scale-105 contrast-110"
                        />
                    </div>

                </div>
            </section>

            {/* INTRO */}
            <section className="py-20 px-6 md:px-20 text-center ">

                {/* LOGO */}
                <div className="flex justify-center mb-6">
                    <img
                        src="img/logo.png" // 👈 apna logo path daal
                        alt="London Stubble Logo"
                        className="h-16 md:h-20 object-contain"
                    />
                </div>

                {/* TAGLINE */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                    London Stubble – Built for men who expect more.
                </h2>

                {/* DESCRIPTION */}
                <p className="max-w-3xl mx-auto text-gray-600">
                    At London Stubble, we create high-performance grooming essentials designed for modern men.
                    Clean, effective formulas that work with your skin—not against it.
                </p>

            </section>



            {/* WHY CHOOSE */}
            <section className="bg-gradient-to-r from-[#012169] via-black to-[#C8102E] text-white py-20 px-6 md:px-20 text-center">
                <h2 className="text-3xl font-semibold mb-10">Why Choose London Stubble</h2>

                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        "Clean formulations",
                        "High-performance results",
                        "Modern masculine design",
                        "Simple routines",
                    ].map((item, i) => (
                        <div key={i} className="bg-white/10 p-6 rounded-xl">
                            {item}
                        </div>
                    ))}
                </div>
            </section>

            {/* PRODUCTS (ONLY 2) */}
            <section className=" bg-white text-gray-900">
                <h2 className="text-3xl font-semibold text-center mb-12">
                    Best Sellers
                </h2>

                <div className="grid grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl">

                    {/* TOP LEFT - IMAGE */}
                    <div
                        onClick={() => navigate("/products")}
                        className="relative group flex items-end justify-center cursor-pointer bg-white"
                    >
                        {/* VERY LIGHT RED GRADIENT */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff5f5] to-[#ffe5e5] opacity-90"></div>

                        <img
                            src="/img/nia_Serum.png"
                            alt="Niacinamide Serum"
                            className="h-100 object-contain relative z-10 group-hover:scale-105 transition"
                        />
                    </div>

                    {/* TOP RIGHT - TEXT */}
                    <div
                        onClick={() => navigate("/products")}
                        className="relative group flex flex-col justify-center text-center py-14 px-8 cursor-pointer bg-white"
                    >
                        {/* VERY LIGHT BLUE GRADIENT */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f5f9ff] to-[#eaf2ff] opacity-90"></div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-semibold text-[#001f3f]">
                                Brighten & Even Skin Tone
                            </h3>

                            <p className="text-gray-600 mt-2">
                                Lightweight serum that fades dark spots and boosts glow.
                            </p>

                            <p className="text-sm mt-3 text-gray-500">
                                • 10% Niacinamide <br />
                                • Fades dark spots <br />
                                • Evens tone & glow <br />
                                • Suitable for all skin types
                            </p>
                        </div>
                    </div>

                    {/* BOTTOM LEFT - TEXT */}
                    <div
                        onClick={() => navigate("/products")}
                        className="relative group flex flex-col justify-center text-center py-14 px-8 cursor-pointer bg-white"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f5f9ff] to-[#eaf2ff] opacity-90"></div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-semibold text-[#001f3f]">
                                Stronger Beard. Healthier Growth.
                            </h3>

                            <p className="text-gray-600 mt-2">
                                Deep nourishing oil for beard growth and smooth texture.
                            </p>

                            <p className="text-sm mt-3 text-gray-500">
                                • Boosts beard growth <br />
                                • Deep moisturization <br />
                                • Smooth & shiny hair <br />
                                • Protects from damage
                            </p>
                        </div>
                    </div>

                    {/* BOTTOM RIGHT - IMAGE */}
                    <div
                        onClick={() => navigate("/products")}
                        className="relative group flex items-center justify-center cursor-pointer bg-white"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff5f5] to-[#ffe5e5] opacity-90"></div>

                        <img
                            src="/img/beard_serum.png"
                            alt="Beard Serum"
                            className="h-100 object-contain relative z-10 group-hover:scale-105 transition"
                        />
                    </div>

                </div>
            </section>

            {/* CATEGORIES */}
            <section className="bg-gradient-to-r from-[#f5f7fb] via-[#eef2f7] to-[#e4e9f2] py-16">
                <div className="grid md:grid-cols-3 gap-6 px-6 md:px-20">

                    {[
                        {
                            title: "Face Wash",
                            desc: "Deep cleansing that keeps your skin fresh and strong.",
                        },
                        {
                            title: "Face Serum",
                            desc: "Hydration and repair in one powerful step.",
                        },
                        {
                            title: "Beard Serum",
                            desc: "Control and nourish your beard effortlessly.",
                        },
                    ].map((cat, i) => (
                        <div
                            key={i}
                            onClick={() => navigate("/products")}
                            className="bg-white p-8 rounded-2xl text-center cursor-pointer 
                hover:shadow-2xl hover:scale-105 transition duration-300 shadow-md border"
                        >
                            <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
                            <p className="text-gray-600 mb-4">{cat.desc}</p>
                            <button className="text-blue-700 font-medium">
                                Explore →
                            </button>
                        </div>
                    ))}

                </div>
            </section>

            <section className="bg-white">

                <div className="grid md:grid-cols-2">

                    {/* BOX 1 - IMAGE (POLYGON) */}
                    <div className="relative h-[350px] md:h-[450px] overflow-hidden">
                        <img
                            src="img/WhatsApp Image 2026-04-16 at 3.24.23 PM.jpeg"
                            className="w-full h-full object-cover transition duration-500 hover:scale-105"

                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

                        </div>
                    </div>

                    {/* BOX 2 - TEXT */}
                    <div className="bg-gradient-to-br from-[#f9fafc] to-[#e6ecff] text-gray-800 p-10 flex flex-col justify-center">

                        <h2 className="text-black text-3xl font-semibold mb-4">
                            Our <span className="block">Philosophy</span>
                        </h2>

                        <p>
                            Skincare that actually cares for your skin.
                        </p>

                    </div>

                    {/* BOX 3 - TEXT */}
                    <div className="bg-gradient-to-br from-white via-[#f9fafc] to-[#ffe5ea] text-gray-800 p-10 flex flex-col justify-center">

                        <h2 className="text-black text-3xl font-semibold mb-4 leading-tight">
                            Effective <span className="block">Grooming</span>
                        </h2>

                        <p>
                            Clean. Effective. Built for modern men.
                        </p>

                    </div>

                    {/* BOX 4 - IMAGE (REVERSE POLYGON) */}
                    <div className="relative h-[350px] md:h-[450px] overflow-hidden">
                        <img
                            src="img/WhatsApp Image 2026-04-16 at 3.34.27 PM.jpeg"
                            className="w-full h-full object-cover transition duration-500 hover:scale-105"

                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

                        </div>
                    </div>

                </div>

            </section>


            {/* FINAL CTA */}
            <section className="relative py-20 px-6 md:px-20 overflow-hidden">

                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#012169] via-black to-[#C8102E]"></div>

                {/* Glow Effects */}
                <div className="absolute left-10 top-10 w-72 h-72 bg-[#012169]/30 blur-3xl rounded-full"></div>
                <div className="absolute right-10 bottom-10 w-72 h-72 bg-[#C8102E]/30 blur-3xl rounded-full"></div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-3xl mx-auto text-white">

                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Upgrade Your Grooming Routine
                    </h2>

                    <p className="mt-4 text-lg text-gray-200">
                        Clean. Effective. Built for modern men. Experience high-performance grooming
                        designed to keep you sharp, confident, and ahead every day.
                    </p>

                    <div className="mt-8 flex justify-center gap-4 flex-wrap">

                        <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition">
                            Shop Now
                        </button>

                        <button className="border border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition">
                            Explore Products
                        </button>

                    </div>

                </div>
            </section>
        </div>
    );
}

// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function HomePage() {
//     const navigate = useNavigate();

//     return (
//         <div className="bg-white text-gray-900 overflow-hidden">

//             {/* 🔥 HERO SECTION (UPGRADED) */}
//             <section className="relative h-screen flex items-center overflow-hidden">

//                 {/* Background */}
//                 <img
//                     src="img/WhatsApp-Photoroom.png"
//                     className="absolute w-full h-full object-contain scale-125 opacity-20 grayscale"
//                 />

//                 <div className="absolute inset-0 bg-white/60"></div>

//                 <div className="relative z-10 w-full grid md:grid-cols-2 items-center px-6 md:px-20 gap-10">

//                     {/* TEXT */}
//                     <div>
//                         <h1 className="text-5xl md:text-8xl font-extrabold leading-[0.9] tracking-tight">
//                             SHARP <br />
//                             LOOKS. <br />
//                             SMARTER <br />
//                             GROOMING.
//                         </h1>

//                         <p className="mt-6 text-gray-600 text-lg max-w-md">
//                             High-performance grooming essentials designed for modern men.
//                         </p>

//                         <div className="mt-8 flex gap-4">
//                             <button className="bg-gradient-to-r from-[#012169] to-[#C8102E] text-white px-8 py-3 rounded-full hover:scale-105 transition">
//                                 Shop Now
//                             </button>
//                             <button className="border border-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition">
//                                 Build Routine
//                             </button>
//                         </div>
//                     </div>

//                     {/* IMAGE */}
//                     <div className="flex justify-center">
//                         <img
//                             src="/img/pngegg.png"
//                             className="h-[420px] md:h-[550px] object-contain scale-x-[-1] drop-shadow-2xl hover:scale-110 transition duration-500"
//                         />
//                     </div>

//                 </div>
//             </section>

//             {/* 🔥 INTRO (MINIMAL) */}
//             <section className="py-20 px-6 md:px-20 text-center">
//                 <p className="max-w-2xl mx-auto text-gray-600 text-lg">
//                     Clean. Effective. Built for modern men.
//                 </p>
//             </section>

//             {/* 🔥 CATEGORIES (MORE PREMIUM) */}
//             <section className="grid md:grid-cols-3 gap-8 px-6 md:px-20 pb-24">

//                 {[
//                     {
//                         title: "Face Wash",
//                         desc: "Deep cleansing that keeps your skin fresh.",
//                     },
//                     {
//                         title: "Face Serum",
//                         desc: "Hydration and repair in one step.",
//                     },
//                     {
//                         title: "Beard Serum",
//                         desc: "Control and nourish your beard.",
//                     },
//                 ].map((cat, i) => (
//                     <div
//                         key={i}
//                         onClick={() => navigate("/products")}
//                         className="group bg-white border border-gray-200 p-10 rounded-2xl text-center cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition duration-300"
//                     >
//                         <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#C8102E]">
//                             {cat.title}
//                         </h3>
//                         <p className="text-gray-500">{cat.desc}</p>
//                     </div>
//                 ))}
//             </section>

//             {/* 🔥 WHY CHOOSE (GLASS EFFECT) */}
//             <section className="py-24 px-6 md:px-20 text-center relative">

//                 <div className="absolute inset-0 bg-gradient-to-r from-[#012169] via-black to-[#C8102E]"></div>

//                 <div className="relative z-10">
//                     <h2 className="text-4xl font-bold text-white mb-12">
//                         Why Choose London Stubble
//                     </h2>

//                     <div className="grid md:grid-cols-4 gap-6">
//                         {[
//                             "Clean formulations",
//                             "High-performance results",
//                             "Modern masculine design",
//                             "Simple routines",
//                         ].map((item, i) => (
//                             <div
//                                 key={i}
//                                 className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl text-white hover:scale-105 transition"
//                             >
//                                 {item}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* 🔥 PRODUCTS SECTION (UNCHANGED LOGIC, JUST SPACING FIX) */}
//             <section className=" bg-white text-gray-900">
//                 <h2 className="text-3xl font-semibold text-center mb-12">
//                     Best Sellers
//                 </h2>

//                 <div className="grid grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl">

//                     {/* TOP LEFT - IMAGE */}
//                     <div
//                         onClick={() => navigate("/products")}
//                         className="relative group flex items-center justify-center py-14 cursor-pointer bg-white"
//                     >
//                         {/* VERY LIGHT RED GRADIENT */}
//                         <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff5f5] to-[#ffe5e5] opacity-90"></div>

//                         <img
//                             src="/img/Niaciamide_Serum_5-removebg-preview.png"
//                             alt="Niacinamide Serum"
//                             className="h-56 object-contain relative z-10 group-hover:scale-105 transition"
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
//                         className="relative group flex items-center justify-center py-14 cursor-pointer bg-white"
//                     >
//                         <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff5f5] to-[#ffe5e5] opacity-90"></div>

//                         <img
//                             src="/img/Beard Serum 4-Photoroom.png"
//                             alt="Beard Serum"
//                             className="h-56 object-contain relative z-10 group-hover:scale-105 transition"
//                         />
//                     </div>

//                 </div>
//             </section>


//             {/* 🔥 PHILOSOPHY (SIMPLIFIED + SPLIT FEEL) */}
//             <section className="py-24 px-6 md:px-20">
//                 <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl">

//                     <div className="bg-[#012169] text-white p-14 flex items-center">
//                         <h2 className="text-4xl font-bold leading-tight">
//                             Nothing extra. <br />
//                             Just results.
//                         </h2>
//                     </div>

//                     <div className="bg-gray-50 p-14 flex items-center">
//                         <p className="text-gray-600 text-lg">
//                             Skincare that actually works. Clean ingredients. Simple routines.
//                         </p>
//                     </div>

//                 </div>
//             </section>

//             {/* 🔥 FINAL CTA (MORE IMPACT) */}
//             <section className="relative py-28 px-6 md:px-20 text-center overflow-hidden">

//                 <div className="absolute inset-0 bg-gradient-to-r from-[#012169] via-black to-[#C8102E]"></div>

//                 <div className="relative z-10 text-white">
//                     <h2 className="text-5xl md:text-6xl font-extrabold">
//                         Upgrade Your Routine
//                     </h2>

//                     <p className="mt-6 text-gray-300 text-lg">
//                         Look sharp. Stay confident.
//                     </p>

//                     <button className="mt-10 bg-white text-black px-10 py-4 rounded-full font-medium hover:scale-105 transition">
//                         Shop Now
//                     </button>
//                 </div>
//             </section>

//         </div>
//     );
// }