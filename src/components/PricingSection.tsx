"use client";

import { useState, useEffect } from "react";
import { foodPrices } from "@/data/sampleData";

const PricingSection = () => {
  const [prices, setPrices] = useState(foodPrices);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    const fetchPrices = async () => {
      try {
        setLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPrices(foodPrices);
        setError(null);
      } catch (err) {
        setError("Failed to load food prices");
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  if (loading) {
    return (
      <section className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Harga Pangan</h2>
            <div className="text-sm">Loading...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Harga Pangan</h2>
            <div className="text-sm text-red-200">{error}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Harga Pangan</h2>
        </div>
        
        {/* Scrolling price ticker */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {prices.concat(prices).map((price, index) => (
              <div key={`${price.id}-${index}`} className="flex-shrink-0 mx-8">
                <span className="text-sm">
                  {price.date} {price.name} {price.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
