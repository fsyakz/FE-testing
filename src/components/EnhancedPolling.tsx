"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { pollOptions } from "@/data/sampleData";

const EnhancedPolling = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [hasVoted, setHasVoted] = useState(false);
  const [pollResults, setPollResults] = useState(pollOptions);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedResults = localStorage.getItem("pollResults");
    const savedVoteStatus = localStorage.getItem("hasVoted");
    
    if (savedResults) {
      setPollResults(JSON.parse(savedResults));
    }
    
    if (savedVoteStatus === "true") {
      setHasVoted(true);
    }
  }, []);

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
      
      // Save to localStorage
      localStorage.setItem("pollResults", JSON.stringify(updatedResults));
      localStorage.setItem("hasVoted", "true");
      localStorage.setItem("userVote", selectedOption);
      
    } catch (error) {
      alert("Terjadi kesalahan saat mengirim vote");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetVote = () => {
    setHasVoted(false);
    setSelectedOption("");
    localStorage.setItem("hasVoted", "false");
    localStorage.removeItem("userVote");
  };

  const totalVotes = pollResults.reduce((sum, option) => sum + option.count, 0);

  const getPercentage = (count: number) => {
    return totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
  };

  return (
    <div className="w-full">
      <div className="text-center mb-3">
        <p className="text-xs text-gray-700 font-medium">
          Bagaimanakah menurut Anda dengan Pelayanan dan Kinerja Kami Dinas Pangan?
        </p>
      </div>
      
      {!hasVoted ? (
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="space-y-1">
            {pollOptions.map((option) => (
              <label
                key={option.id}
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <input
                  type="radio"
                  name="poll"
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="w-3 h-3 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-xs text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>

          <div className="flex justify-center space-x-2 pt-3">
            <Button
              type="submit"
              disabled={isSubmitting || !selectedOption}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-xs px-3 py-1 h-auto"
            >
              {isSubmitting ? "Mengirim..." : "PILIH"}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={() => setHasVoted(true)}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 text-xs px-3 py-1 h-auto"
            >
              LIHAT HASIL
            </Button>
          </div>
        </form>
      ) : (
        <div className="space-y-3">
          <div className="text-center">
            <p className="text-xs text-gray-600">
              Total partisipan: {totalVotes} orang
            </p>
          </div>
          
          <div className="space-y-2">
            {pollResults.map((option) => {
              const percentage = getPercentage(option.count);
              return (
                <div key={option.id} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-700">{option.label}</span>
                    <span className="text-xs text-gray-600">
                      {percentage}% ({option.count})
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center pt-2 border-t">
            <Button
              onClick={resetVote}
              variant="outline"
              className="text-blue-600 hover:text-blue-800 text-xs px-3 py-1 h-auto"
            >
              Vote Lagi
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedPolling;
