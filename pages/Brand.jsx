import React from "react";

const Brand = () => {
    return (
        <div className="min-h-[100dvh] bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800 px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16">

            {/* HEADER */}
            <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    The Essence of London Stubble
                </h1>
                <p className="text-gray-600 text-base sm:text-lg">
                    A brand built on precision, confidence, and modern masculinity.
                </p>
            </div>

            {/* BRAND DNA */}
            <section className="mb-14 md:mb-20 text-center md:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
                    Brand DNA
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto md:mx-0 leading-relaxed text-sm sm:text-base">
                    London Stubble represents more than grooming — it defines a lifestyle.
                    Built for the modern man who values discipline, elegance, and self-respect,
                    our products are designed to enhance confidence and elevate daily rituals.
                </p>
            </section>

            {/* VISUAL IDENTITY */}
            {/* <section className="mb-14 md:mb-20">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
                    Visual Identity
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">

                    
                    <div className="p-5 sm:p-6 rounded-2xl bg-white shadow-sm border text-center md:text-left">
                        <h3 className="font-semibold mb-4">Colour Palette</h3>
                        <div className="flex justify-center md:justify-start gap-3">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#012169]"></div>
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#C8102E]"></div>
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-200"></div>
                        </div>
                    </div>

                    
                    <div className="p-5 sm:p-6 rounded-2xl bg-white shadow-sm border text-center md:text-left">
                        <h3 className="font-semibold mb-4">Typography</h3>
                        <p className="font-serif text-base sm:text-lg">Elegant Serif</p>
                        <p className="text-xs sm:text-sm text-gray-500">Used for headings</p>
                        <p className="mt-2 font-sans text-sm sm:text-base">Modern Sans-serif</p>
                        <p className="text-xs sm:text-sm text-gray-500">Used for body text</p>
                    </div>

                    
                    <div className="p-5 sm:p-6 rounded-2xl bg-white shadow-sm border text-center md:text-left">
                        <h3 className="font-semibold mb-4">Logo Usage</h3>
                        <div className="h-10 sm:h-12 w-28 sm:w-32 bg-gray-200 rounded-md flex items-center justify-center text-xs sm:text-sm mx-auto md:mx-0">
                            Logo
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 mt-2">
                            Minimal, clean, and scalable across all platforms.
                        </p>
                    </div>
                </div>
            </section> */}

            {/* LONDON INFLUENCE */}
            <section className="mb-14 md:mb-20 text-center md:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
                    The London Influence
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto md:mx-0 leading-relaxed text-sm sm:text-base">
                    Inspired by the streets of London — bold, refined, and effortlessly stylish.
                    London Stubble captures the energy of a fast-moving city while maintaining timeless elegance.
                </p>
            </section>

            {/* COMMITMENT */}
            <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
                    Our Commitment
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
                    <div className="p-5 sm:p-6 bg-white border rounded-2xl shadow-sm text-center md:text-left">
                        <h3 className="font-semibold mb-2">Sustainability</h3>
                        <p className="text-gray-600 text-xs sm:text-sm">
                            We focus on eco-friendly packaging and responsible production.
                        </p>
                    </div>

                    <div className="p-5 sm:p-6 bg-white border rounded-2xl shadow-sm text-center md:text-left">
                        <h3 className="font-semibold mb-2">Ethical Sourcing</h3>
                        <p className="text-gray-600 text-xs sm:text-sm">
                            Ingredients are sourced responsibly with strict quality standards.
                        </p>
                    </div>

                    <div className="p-5 sm:p-6 bg-white border rounded-2xl shadow-sm text-center md:text-left">
                        <h3 className="font-semibold mb-2">Long-Term Vision</h3>
                        <p className="text-gray-600 text-xs sm:text-sm">
                            Building a brand that stands the test of time — not trends.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Brand;