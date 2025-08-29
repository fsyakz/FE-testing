"use client";

import { useState } from "react";
import { pollOptions } from "@/data/sampleData";

const Polling = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [hasVoted, setHasVoted] = useState(false);
  const [pollResults, setPollResults] = useState(pollOptions);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedOption) {
      alert("Silakan pilih salah satu opsi");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update poll results
      const updatedResults = pollResults.map(option => 
        option.value === selectedOption 
          ? { ...option, count: option.count + 1 }
          : option
      );
      
      setPollResults(updatedResults);
      setHasVoted(true);
    } catch (error) {
      alert("Terjadi kesalahan saat mengirim vote");
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalVotes = pollResults.reduce((sum, option) => sum + option.count, 0);

  const getPercentage = (count: number) => {
    return totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Jajak Pendapat
          </h2>
          
          <p className="text-gray-700 mb-6 text-center">
            <strong>Bagaimanakah menurut Anda dengan Pelayanan dan Kinerja Kami Dinas Pangan</strong>
          </p>

          {!hasVoted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {pollOptions.map((option) => (
                <label
                  key={option.id}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="poll"
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}

              <div className="flex justify-center space-x-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || !selectedOption}
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? "Mengirim..." : "PILIH"}
                </button>
                
                <button
                  type="button"
                  onClick={() => setHasVoted(true)}
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  LIHAT HASIL
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-4">
                Hasil Polling
              </h3>
              
              {pollResults.map((option) => {
                const percentage = getPercentage(option.count);
                return (
                  <div key={option.id} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">{option.label}</span>
                      <span className="text-gray-600">{percentage}% ({option.count} votes)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
              
              <div className="text-center pt-4">
                <p className="text-sm text-gray-600">
                  Total votes: {totalVotes}
                </p>
                <button
                  onClick={() => {
                    setHasVoted(false);
                    setSelectedOption("");
                  }}
                  className="mt-2 text-blue-600 hover:text-blue-800 text-sm"
                >
                  Vote lagi
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Polling;
