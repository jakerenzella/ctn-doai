"use client"

import { useEffect, useState } from "react"

const tickerItems = [
  "🚨 BREAKING: New team 'CyberGuardians' takes the lead with 2,847 points",
  "📊 LIVE UPDATE: 127 teams registered across Australian schools",
  "⚡ ALERT: Bot deployment phase begins in 2 hours, 34 minutes",
  "🎯 TRENDING: #CaptureTheNarrative reaches 10K mentions on social media",
  "🏆 LEADERBOARD: Top 3 teams separated by just 156 points",
  "📈 STATS: Over 50,000 simulated social media interactions processed",
  "🔥 HOT: Sydney High School team deploys innovative counter-bot strategy",
  "⏰ REMINDER: Registration open soon - AU$5,000 prize pool awaits",
]

export function LiveTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tickerItems.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-red-50 border-b-2 border-red-600">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-4">
          <div className="bg-red-600 text-white px-3 py-1 rounded font-bold text-sm">LIVE</div>
          <div className="flex-1 overflow-hidden">
            <div
              className="whitespace-nowrap transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {tickerItems.map((item, index) => (
                <span key={index} className="inline-block w-full text-gray-900 font-medium text-lg">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="animate-pulse">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
