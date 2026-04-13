import React, { useEffect, useState } from "react";

const products = [
  {
    title: "Beard Oil",
    query: "premium beard oil for men",
    approxPrice: 499,
    desc: "Deep nourishment. Stronger growth.",
    img: "/img/beard.jpg",
  },
  {
    title: "Beard Balm",
    query: "beard balm styling men",
    approxPrice: 599,
    desc: "Control, shape & style your beard.",
    img: "/img/balm.jpg",
  },
  {
    title: "Grooming Kit",
    query: "men grooming kit premium",
    approxPrice: 1499,
    desc: "Complete grooming essentials.",
    img: "/img/kit.jpg",
  },
  {
    title: "Beard Comb",
    query: "wooden beard comb anti static",
    approxPrice: 299,
    desc: "Smooth & precise grooming.",
    img: "/img/comb.jpg",
  },
];

const Products = () => {
  const [country, setCountry] = useState("IN");

  useEffect(() => {
    const getCountry = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        setCountry(data.country);
      } catch {
        setCountry("IN");
      }
    };

    getCountry();
  }, []);

  const getAmazonConfig = () => {
    switch (country) {
      case "IN":
        return { domain: "amazon.in", currency: "₹" };
      case "US":
        return { domain: "amazon.com", currency: "$" };
      case "GB":
        return { domain: "amazon.co.uk", currency: "£" };
      default:
        return { domain: "amazon.com", currency: "$" };
    }
  };

  const { domain, currency } = getAmazonConfig();

  return (
    <div className="min-h-screen text-black bg-gradient-to-br from-white via-[#e6ecff] to-[#012169]">

      {/* HEADER */}
      <section className="text-center py-12 sm:py-16 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
          Our Grooming Collection
        </h1>
        <p className="text-gray-700 max-w-md sm:max-w-xl mx-auto text-sm sm:text-base">
          Premium grooming products crafted for confidence and style.
        </p>
      </section>

      {/* PRODUCT GRID */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {products.map((p, i) => {
            const amazonLink = `https://${domain}/s?k=${encodeURIComponent(
              p.query
            )}`;

            return (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-xl transition hover:-translate-y-1"
              >
                {/* IMAGE */}
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-44 sm:h-40 md:h-44 object-cover rounded-lg mb-3"
                />

                {/* TITLE */}
                <h3 className="font-semibold text-base sm:text-lg">
                  {p.title}
                </h3>

                {/* DESC */}
                <p className="text-xs sm:text-sm text-gray-600 mb-2">
                  {p.desc}
                </p>

                {/* PRICE */}
                <p className="font-bold mt-2 text-sm sm:text-base">
                  Starting from {currency}
                  {p.approxPrice}
                </p>

                {/* BUTTON */}
                <a
                  href={amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-4 w-full px-4 py-2 sm:py-2.5 bg-[#012169] text-white rounded-lg text-sm sm:text-base hover:bg-[#001a4d] active:scale-95 transition">
                    View on Amazon
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* FOOT NOTE */}
      <div className="text-center px-4 pb-8 sm:pb-10 text-xs sm:text-sm text-gray-1000">
        *Prices may vary. Check live price on Amazon.
      </div>
    </div>
  );
};

export default Products;