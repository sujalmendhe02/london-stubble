import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function HomePage() {

    const products = [
        {
            title: "London Stubble Charcoal Face Wash",
            desc: "Deep cleansing. Oil control. Pollution defense.",
            points: [
                "Removes dirt & excess oil",
                "Detoxifies skin with charcoal",
                "Prevents acne & breakouts",
            ],
            img: "/img/Charcol Face Wash 1.jpeg",
        },
        {
            title: "London Stubble Collagen Face Wash",
            desc: "Hydration boost. Skin repair. Youthful glow.",
            points: [
                "Improves skin elasticity",
                "Keeps skin hydrated & soft",
                "Reduces fine lines",
            ],
            img: "/img/Collagen Face Wash 1.jpg",
        },
        {
            title: "London Stubble Niacinamide Serum",
            desc: "Clear skin. Even tone. Pore control.",
            points: [
                "Reduces dark spots & marks",
                "Controls oil production",
                "Minimizes pores",
            ],
            img: "/img/Niaciamide Serum 1.jpg",
        },
        {
            title: "London Stubble Beard Serum",
            desc: "Stronger beard. Smooth texture. Healthy shine.",
            points: [
                "Promotes beard growth",
                "Softens & conditions hair",
                "Adds shine without greasiness",
            ],
            img: "/img/Beard Serum 1.jpg",
        },
    ];

    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#e6ecff] to-[#012169] text-black">

            {/* HERO */}
            <section className="relative min-h-screen grid grid-cols-2 items-center px-4 md:px-20 py-16">

                {/* TEXT */}
                <div className="relative z-10 text-left">
                    <h2 className="text-3xl md:text-6xl font-extrabold text-[#001f3f] leading-tight">
                        Premium Grooming for the Modern Man
                    </h2>

                    <p className="text-gray-600 mt-4 mb-6 max-w-md">
                        Crafted for confidence. Designed for everyday excellence.
                    </p>

                    <div className="flex gap-3">
                        <NavLink to="/products">
                            <button className="px-5 py-2 bg-[#012169] text-white rounded-xl hover:scale-105 transition">
                                Shop Now
                            </button>
                        </NavLink>

                        <NavLink to="/products">
                            <button className="px-5 py-2 border border-black/30 rounded-xl hover:bg-[#C8102E] hover:text-white transition">
                                Explore
                            </button>
                        </NavLink>
                    </div>
                </div>

                {/* IMAGE */}
                <div className="flex justify-end">
                    <img
                        src="/img/BackGround.png"
                        alt=""
                        className="w-full max-w-sm md:max-w-md object-contain"
                    />
                </div>

            </section>

            {/* PRODUCT GRID */}

            <section className="py-0 px-6 md:px-20">

                {/* Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
                        OUR PRODUCTS
                    </h2>
                    <p className="text-sm opacity-70 mt-2 italic">
                        Upgrade Your Routine
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">

                    {products.map((p, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedProduct(p)}
                            className="cursor-pointer group text-center"
                        >

                            {/* Product Card */}
                            <div className="
                    rounded-2xl overflow-hidden
                    bg-white/30 backdrop-blur-md
                    border border-white/20
                    shadow-lg hover:shadow-2xl
                    transition duration-300
                    p-4
                ">
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    className="
                            w-full h-36 object-contain
                            group-hover:scale-110
                            transition duration-500
                        "
                                />
                            </div>

                            {/* Title */}
                            <h3 className="mt-3 text-sm font-medium tracking-wide uppercase">
                                {p.title}
                            </h3>

                        </div>
                    ))}

                </div>

                {/* Button */}
                <div className="text-center mt-10">
                    <NavLink to="/products">
                        <button className="
                px-6 py-3 
                bg-[#012169] text-white 
                rounded-xl 
                hover:scale-105 
                transition
            ">
                            Shop Now
                        </button>
                    </NavLink>
                </div>

            </section>

            {/* SPLIT SECTION */}
            {/* <section className="grid md:grid-cols-2">

                <div className="bg-[#012169] text-white p-10 flex items-center">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">
                            British Inspired Grooming
                        </h2>
                        <p className="text-gray-200">
                            Crafted with precision and elegance for the modern man.
                        </p>
                    </div>
                </div>

                <div>
                    <img
                        src="/img/bgimg.jpeg"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section> */}

            {/* WHY CHOOSE US */}
            <section className="py-8 px-6 md:px-20">

                <h2 className="text-3xl md:text-4xl text-center mb-12 font-semibold">
                    Why Choose Us
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    {["Quality Ingredients", "Modern Design", "Effortless Grooming"].map((t, i) => (
                        <div
                            key={i}
                            className="
                            p-6 rounded-2xl 
                            bg-white/40 backdrop-blur-md
                            border border-white/30
                            shadow-md hover:shadow-xl
                            hover:-translate-y-2
                            transition duration-300
                        ">
                            <h3 className="text-xl font-semibold mb-2">
                                {t}
                            </h3>

                            <p className="text-gray-600 text-sm">
                                High-performance grooming built for modern lifestyle.
                            </p>
                        </div>
                    ))}

                </div>
            </section>

            {/* CTA */}
            <section className="py-16 text-center bg-[#012169] text-white">

                <h2 className="text-3xl md:text-4xl mb-4 font-semibold">
                    Upgrade your grooming game today
                </h2>

                <p className="mb-6 text-gray-200">
                    Experience premium grooming like never before.
                </p>

                <div className="flex gap-4 justify-center">
                    <button className="px-6 py-3 bg-white text-[#012169] rounded-xl hover:scale-105 transition">
                        Shop Now
                    </button>

                    <button className="px-6 py-3 border border-white/40 rounded-xl hover:bg-[#C8102E] transition">
                        Explore
                    </button>
                </div>
            </section>

            {/* MODAL */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

                    <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md relative">

                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-3 right-3 text-xl"
                        >
                            ✕
                        </button>

                        <img
                            src={selectedProduct.img}
                            className="w-full h-52 object-cover rounded-xl mb-4"
                        />

                        <h2 className="text-2xl font-semibold mb-2">
                            {selectedProduct.title}
                        </h2>

                        <p className="text-gray-600 mb-3">
                            {selectedProduct.desc}
                        </p>

                        <ul className="text-sm text-gray-500 mb-4 space-y-1">
                            {selectedProduct.points.map((pt, i) => (
                                <li key={i}>• {pt}</li>
                            ))}
                        </ul>

                        <button className="w-full py-3 bg-[#012169] text-white rounded-xl">
                            Shop Now
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}