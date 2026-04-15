import React from "react";
import { Mail } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 text-gray-800">

            {/* HEADER */}
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    Get in Touch
                </h1>
                <p className="text-gray-600 text-base sm:text-lg">
                    We’re here to help — whether it’s support, partnerships, or just a question.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                {/* CONTACT FORM */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border">
                    <h2 className="text-xl sm:text-2xl font-semibold mb-6">
                        Send a Message
                    </h2>

                    <form className="space-y-4 sm:space-y-5">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm sm:text-base"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm sm:text-base"
                        />

                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm sm:text-base"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:scale-105 active:scale-95 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* CONTACT INFO */}
                <div className="flex flex-col gap-6 sm:gap-8">

                    {/* Support Email */}
                    <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 flex items-center gap-2">
                            <Mail size={18} /> Customer Support
                        </h3>
                        <p className="text-gray-600 text-sm">
                            support@evairelondon.com
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border">
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center md:text-left">
                            Follow Us
                        </h3>

                        <div className="flex justify-center md:justify-start gap-4">
                            <a href="#" className="p-3 rounded-xl border hover:bg-gray-100 transition">
                                <FaInstagram size={20} />
                            </a>

                            <a href="#" className="p-3 rounded-xl border hover:bg-gray-100 transition">
                                <FaFacebookF size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Extra Section */}
                    <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3">
                            Partnerships & Wholesale
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                            Interested in working with us or stocking Evaire products?
                        </p>
                        <p className="text-gray-800 font-medium text-sm break-all">
                            partnerships@evairelondon.com
                        </p>
                    </div>

                    {/* FAQ */}
                    <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border text-center md:text-left">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3">
                            Need Quick Help?
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Check out our FAQ section for common questions.
                        </p>
                        <button className="px-4 py-2 border rounded-xl hover:bg-gray-100 transition w-full sm:w-auto">
                            Visit FAQ
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;