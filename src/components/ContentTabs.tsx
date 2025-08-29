"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { foodPrices, bankData } from "@/data/sampleData";

const ContentTabs = () => {
  const [activeTab, setActiveTab] = useState("layanan");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const tabs = [
    { id: "layanan", label: "LAYANAN" },
    { id: "pengumuman", label: "PENGUMUMAN" },
    { id: "agenda", label: "AGENDA" },
    { id: "bankdata", label: "BANK DATA" }
  ];

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    let newIndex = index;
    
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        newIndex = index > 0 ? index - 1 : tabs.length - 1;
        break;
      case 'ArrowRight':
        event.preventDefault();
        newIndex = index < tabs.length - 1 ? index + 1 : 0;
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = tabs.length - 1;
        break;
      default:
        return;
    }
    
    setActiveTab(tabs[newIndex].id);
    tabRefs.current[newIndex]?.focus();
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "layanan":
        return (
          <div className="space-y-4">
            <div className="text-center py-8">
              <p className="text-gray-600">Layanan akan segera tersedia</p>
              <Link
                href="/layanan"
                className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Lihat Semua Layanan
              </Link>
            </div>
          </div>
        );

      case "pengumuman":
        return (
          <div className="space-y-4">
            {foodPrices.map((price) => (
              <div key={price.id} className="border-b pb-4">
                <h3 className="font-semibold text-gray-800">{price.name} {price.price}</h3>
                <p className="text-sm text-gray-600">{price.date} | {price.views} kali</p>
              </div>
            ))}
            <div className="text-center pt-4">
              <Link
                href="/pengumuman"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Lihat Semua Pengumuman
              </Link>
            </div>
          </div>
        );

      case "agenda":
        return (
          <div className="space-y-4">
            <div className="text-center py-8">
              <p className="text-gray-600">Tidak ada agenda yang tersedia saat ini</p>
              <Link
                href="/agenda"
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Lihat Semua Agenda
              </Link>
            </div>
          </div>
        );

      case "bankdata":
        return (
          <div className="space-y-4">
            {bankData.map((data) => (
              <div key={data.id} className="border-b pb-4">
                <Link
                  href={data.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:bg-gray-50 p-2 rounded"
                >
                  <h3 className="font-semibold text-blue-600 hover:text-blue-800">
                    {data.title}
                  </h3>
                  <p className="text-sm text-gray-600">{data.date} | {data.views} kali</p>
                </Link>
              </div>
            ))}
            <div className="text-center pt-4">
              <Link
                href="/bankdata"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Lihat Semua Data
              </Link>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8" role="tablist" aria-label="Content sections">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                ref={(el) => { tabRefs.current[index] = el; }}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`tabpanel-${tab.id}`}
                tabIndex={activeTab === tab.id ? 0 : -1}
                className={`px-6 py-3 mx-1 mb-2 rounded-t-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div 
            className="bg-white border rounded-lg shadow-sm p-6 min-h-[300px]"
            role="tabpanel"
            id={`tabpanel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
          >
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentTabs;
