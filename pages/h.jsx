import React, { useState } from 'react';

const Home = () => {
  // State for FAQ toggles
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Data for the Features section
  const features = [
    { icon: "💎", title: "Ethically Sourced", desc: "Materials obtained responsibly." },
    { icon: "✨", title: "Handcrafted Design", desc: "Artistry in every detail." },
    { icon: "🛡️", title: "Premium Quality", desc: "Guaranteed excellence." },
    { icon: "🔄", title: "Easy 7 Day Returns", desc: "Shop with confidence." }
  ];

  // Data for the FAQ section
  const faqs = [
    { q: "How Can I Choose The Colors In Your Shop?", a: "You can use the color swatch filters on our collection pages to find your preferred metal or gemstone hue." },
    { q: "Do your products have warranty?", a: "Yes, all our jewelry pieces come with a 1-year manufacturing warranty." },
    { q: "When will my order ship?", a: "Standard orders ship within 48 hours. Custom engravings may take up to 5 business days." },
    { q: "What is your return & exchange policy?", a: "We offer a 7-day hassle-free return policy for all unworn items in original packaging." }
  ];

  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center p-6 bg-stone-200">
        <h1 className="text-4xl md:text-6xl font-serif mb-4 tracking-tight">Timeless Jewelry, Modern Elegance</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-stone-700">Discover pieces that blend classic beauty with contemporary design.</p>
        <div className="flex gap-4">
          <button className="bg-teal-950 text-white px-8 py-3 hover:bg-teal-800 transition shadow-sm">Shop New Arrivals</button>
          <button className="border border-teal-950 px-8 py-3 hover:bg-stone-200 transition">Explore Collections</button>
        </div>
      </section>

      {/* 2. Collection Grid */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-serif">Shop By Collections</h2>
          <a href="#" className="underline underline-offset-4 hover:text-teal-900">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative group overflow-hidden bg-stone-300 h-96 cursor-pointer">
              <div className="w-full h-full bg-stone-200 group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute bottom-6 left-6 text-white drop-shadow-md">
                <h3 className="text-2xl font-serif">Category {i}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Product Detail & Gallery */}
      <section className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-stone-200">
        <div className="space-y-4">
          <div className="bg-stone-100 h-[500px] w-full flex items-center justify-center border border-stone-200">
            <span className="text-stone-400 font-serif italic text-xl">Main Product Image</span>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-stone-100 h-24 w-24 flex-shrink-0 cursor-pointer border border-stone-200 hover:border-stone-800 transition"></div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-xs uppercase tracking-widest text-stone-500 mb-2">New Arrival</span>
          <h1 className="text-4xl font-serif mb-4">Aurora Pearl Necklaces</h1>
          <p className="text-stone-600 mb-6 leading-relaxed">A timeless piece crafted with elegance and grace, featuring sustainably sourced freshwater pearls and 18k gold plating.</p>
          <div className="text-2xl font-serif mb-8 flex items-center gap-4">
            Rs. 6,000.00 <span className="text-stone-400 line-through text-lg italic">Rs. 9,000.00</span>
            <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 uppercase">33% OFF</span>
          </div>
          <div className="flex flex-col gap-3">
            <button className="bg-teal-950 text-white py-4 font-bold uppercase tracking-widest hover:bg-teal-900 transition">Add to Cart</button>
            <button className="border border-stone-900 py-4 font-bold uppercase tracking-widest hover:bg-stone-100 transition">Buy it Now</button>
          </div>
        </div>
      </section>

      {/* 4. Value Propositions */}
      <section className="bg-stone-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white shadow-sm border border-stone-200">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-serif mb-2">{feature.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-serif mb-12 text-center tracking-tight">Common Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-stone-200 overflow-hidden bg-white">
              <button 
                className="flex justify-between items-center w-full text-left font-serif p-5 hover:bg-stone-50 transition"
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              >
                <span className="text-lg">{faq.q}</span>
                <span className="text-2xl text-stone-400">{openFaqIndex === index ? '−' : '+'}</span>
              </button>
              {openFaqIndex === index && (
                <div className="p-5 pt-0 text-stone-600 text-sm leading-relaxed animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>


      {/* 7. Shine with Us (Product Carousel Section) */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-serif text-center mb-10">Shine with Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="relative group">
              <div className="h-[400px] bg-stone-200 mb-4 transition-transform group-hover:scale-[1.02]"></div>
              <div className="flex justify-between items-center px-2">
                <div>
                  <p className="font-medium">Product Name {i}</p>
                  <p className="text-stone-500">Rs. 999.00</p>
                </div>
                <button className="bg-teal-950 text-white p-2">+</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter Section */}
      <section className="bg-stone-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-4">Join Our Inner Circle</h2>
            <p className="text-stone-400 mb-6">Get exclusive offers & early access to new collections.</p>
            <div className="flex flex-col gap-4">
              <input type="text" placeholder="Enter Full Name" className="p-3 bg-transparent border border-stone-700" />
              <input type="email" placeholder="Enter Email Address" className="p-3 bg-transparent border border-stone-700" />
              <button className="bg-teal-950 py-3 hover:bg-teal-800 transition">Subscribe Now ↗</button>
            </div>
          </div>
          <div className="h-64 bg-stone-800"></div> {/* Placeholder for Newsletter Image */}
        </div>
      </section>

      {/* 9. Social/Instagram Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-serif mb-10">#Jewelry – Share Your Shine</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {[1, 2].map((i) => (
            <div key={i} className="h-[400px] bg-stone-200"></div>
          ))}
        </div>
        <button className="border border-stone-900 px-8 py-3 hover:bg-stone-100 uppercase tracking-widest text-sm">Follow Us ↗</button>
      </section>

      {/* 6. Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-6 border-t border-stone-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-white font-serif text-2xl mb-6">Precious Jewelry</h2>
          <div className="flex justify-center gap-8 mb-8 text-sm uppercase tracking-widest">
            <a href="#" className="hover:text-white transition">Shop</a>
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Contact</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
          </div>
          <p className="text-xs">© 2026 Precious Jewelry Co. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;