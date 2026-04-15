import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <div className="relative min-h-screen text-white overflow-hidden">

            {/* 🇬🇧 Light Union Jack Background (matches header) */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
                        linear-gradient(90deg,
                            rgba(1,33,105,0.35) 0%,
                            rgba(255,255,255,0.12) 10%,
                            rgba(200,16,46,0.25) 60%,
                            rgba(1,33,105,0.35) 100%
                        )
                    `
                }}
            />

            {/* 🔥 Top Blend (header se smooth merge) */}
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(to bottom, rgb(255, 255, 255) 0%, transparent 35%)"
                }}
            />

            {/* ✨ Soft light glow for premium feel */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
                        radial-gradient(circle at 25% 20%, rgb(255, 255, 255), transparent 40%),
                        radial-gradient(circle at 80% 70%, rgba(56, 31, 219, 0.79), transparent 40%)
                    `
                }}
            />

            {/* 🔥 Light overlay (readability) */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

            {/* 🔥 Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    About London Stubble
                </h1>

                {/* Glass Card */}
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 space-y-12 shadow-xl">

                    {/* Our Story */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">✨ Our Story</h2>
                        <p className="text-gray-200 leading-relaxed">
                            London Stubble was born from a simple idea — modern men deserve grooming that matches their ambition.
                            In a world full of cluttered products and false promises, we set out to create something different.
                            Built with passion and precision, London Stubble is more than grooming — it’s a statement of confidence.
                        </p>
                    </section>

                    {/* Philosophy */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">🧠 Our Philosophy</h2>
                        <ul className="space-y-2 text-gray-200">
                            <li>• Clean – No unnecessary ingredients</li>
                            <li>• Premium – Designed for quality seekers</li>
                            <li>• Performance-Driven – Visible results</li>
                        </ul>
                    </section>

                    {/* Craftsmanship */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">🧪 Craftsmanship</h2>
                        <ul className="space-y-2 text-gray-200">
                            <li>• High-quality ingredients</li>
                            <li>• Precision manufacturing standards</li>
                            <li>• Tested for real performance</li>
                        </ul>
                    </section>

                    {/* Values */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">💎 Brand Values</h2>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                                <h3 className="font-semibold text-lg">Confidence</h3>
                                <p className="text-sm text-gray-300">Feel unstoppable</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                                <h3 className="font-semibold text-lg">Simplicity</h3>
                                <p className="text-sm text-gray-300">Only what works</p>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                                <h3 className="font-semibold text-lg">Authenticity</h3>
                                <p className="text-sm text-gray-300">Be real</p>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="text-center pt-6">
                        <p className="text-lg text-gray-200 mb-4">
                            London Stubble isn’t just grooming. It’s a lifestyle.
                        </p>
                        
                        <NavLink to="/products" >
                            <button className="w-full sm:w-auto px-6 py-3 border border-black/30 rounded-xl hover:bg-white/10 transition">
                                Explore Collection
                            </button>
                        </NavLink>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;