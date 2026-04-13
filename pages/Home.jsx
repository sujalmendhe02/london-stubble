import React, { useEffect, useState } from "react";

export default function HomePage() {
    const products = [
        {
            title: "Beard Oil",
            desc: "Deep nourishment. Stronger growth. Refined style.",
            points: [
                "Hydrates & softens beard",
                "Promotes healthy growth",
                "Non-greasy finish",
            ],
            img: "/img/bgimg.jpg",
        },
        {
            title: "Hair Wax",
            desc: "Strong hold. Matte finish. All-day control.",
            points: [
                "Long-lasting hold",
                "Natural matte look",
                "Easy to wash",
            ],
            img: "/img/bgimg.jpg",
        },
        {
            title: "Face Wash",
            desc: "Clean skin. Fresh feel. Daily essential.",
            points: [
                "Removes dirt & oil",
                "Brightens skin",
                "Gentle formula",
            ],
            img: "/img/bgimg.jpeg",
        },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % products.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const product = products[index];

    return (
        <div className="bg-[#0a0a0a] text-white min-h-screen">

            {/* HERO */}
            <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-5 sm:px-8 md:px-16 lg:px-24 py-12 bg-white text-black gap-10">

                {/* TEXT */}
                <div className="text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                        Premium Grooming for the Modern Man
                    </h1>

                    <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-6">
                        Crafted for confidence. Designed for everyday excellence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                        <button className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-xl font-semibold hover:scale-105 transition">
                            Shop Now
                        </button>
                        <button className="w-full sm:w-auto px-6 py-3 border border-black/30 rounded-xl hover:bg-black/5 transition">
                            Explore Collection
                        </button>
                    </div>
                </div>

                {/* IMAGE */}
                <div className="flex justify-center">
                    <img
                        src="/img/bgimg.jpeg"
                        alt="Grooming Product"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl shadow-xl object-cover"
                    />
                </div>
            </section>

            {/* FEATURED PRODUCT */}
            <section
                className="py-16 sm:py-20 px-5 sm:px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative overflow-hidden"
                style={{
                    background: `
                    linear-gradient(120deg, rgba(30,58,138,0.6) 0%, rgba(255,255,255,0.1) 40%, rgba(59,130,246,0.6) 100%)
                    `
                }}
            >
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

                {/* IMAGE */}
                <div className="flex justify-center relative z-10">
                    <img
                        key={index}
                        src={product.img}
                        alt=""
                        className="w-56 sm:w-64 md:w-72 lg:w-80 h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-2xl shadow-lg transition-all duration-700"
                    />
                </div>

                {/* TEXT */}
                <div key={index} className="relative z-10 text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        {product.title}
                    </h2>

                    <p className="text-gray-200 mb-4 text-sm sm:text-base">
                        {product.desc}
                    </p>

                    <ul className="space-y-2 text-gray-300 mb-6 text-sm sm:text-base">
                        {product.points.map((p, i) => (
                            <li key={i}>✔ {p}</li>
                        ))}
                    </ul>

                    <button className="w-full sm:w-auto px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition">
                        View Product
                    </button>
                </div>
            </section>

            {/* BRAND PROMISE */}
            <section
                className="py-16 sm:py-20 px-5 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden"
                style={{
                    background: `
                    linear-gradient(120deg, rgba(1,33,105,0.4) 0%, rgba(255,255,255,0.15) 30%, rgba(200,16,46,0.4) 70%)
                    `
                }}
            >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

                <div className="relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12">
                        Why Choose Us
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                        {["Quality Ingredients", "Modern Design", "Effortless Grooming"].map((title, i) => (
                            <div key={i} className="p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition">
                                <h3 className="text-lg sm:text-xl font-semibold mb-3">{title}</h3>
                                <p className="text-gray-300 text-sm sm:text-base">
                                    High-performance grooming built for modern lifestyle.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section
                className="py-16 sm:py-20 px-5 text-center relative overflow-hidden"
                style={{
                    background: `
                    linear-gradient(120deg, rgba(2,6,23,0.95) 0%, rgba(15,23,42,0.95) 40%, rgba(30,58,138,0.8) 100%)
                    `
                }}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>

                <div className="relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        Upgrade your grooming game today
                    </h2>

                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6">
                        <button className="w-full sm:w-auto px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition">
                            Shop Now
                        </button>

                        <button className="w-full sm:w-auto px-6 py-3 border border-white/30 rounded-xl hover:bg-white/10 transition">
                            Explore Collection
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}