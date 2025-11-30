"use client";

import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import {
  Gift,
  LockOpen,
  ArrowRight,
  BadgePercent,
  ShoppingBag,
  Sparkles,
  Star,
  Crown,
} from "lucide-react";

export default function CrowbarDealsPage() {
  const { user, loading, signInWithCrowbar, signOutUser } = useAuth();

  const deals = [
    {
      id: 1,
      title: "Flat 20% Off – EcoWorldBuy",
      description: "Save on all eco-friendly products.",
      icon: "🌱",
    },
    {
      id: 2,
      title: "Priority Access – TalentKonnect",
      description: "Fast-lane access for job applications.",
      icon: "💼",
    },
    {
      id: 3,
      title: "CareDuel Premium Race Entry",
      description: "Unlock premium wellness challenges.",
      icon: "⚡",
    },
    {
      id: 4,
      title: "Skill Event Bonus Credits",
      description: "Earn double credits on weekly events.",
      icon: "🚀",
    },
    {
      id: 5,
      title: "Exclusive Product Drops",
      description: "Members-only store access.",
      icon: "🎁",
    },
    {
      id: 6,
      title: "Crowbar Merch Discount",
      description: "10% off all Crowbar merchandise.",
      icon: "🛍️",
    },
    {
      id: 7,
      title: "Elite Webinar Access",
      description: "Attend exclusive expert-led sessions.",
      icon: "🎤",
    },
    {
      id: 8,
      title: "Marketplace Cashback",
      description: "Get 5% cashback on selected deals.",
      icon: "💳",
    },
    {
      id: 9,
      title: "Extra Talent Credits",
      description: "Boost your TalentKonnect rank.",
      icon: "⭐",
    },
    {
      id: 10,
      title: "Free Wellness Guide",
      description: "Download Crowbar’s health starter kit.",
      icon: "📘",
    },
    {
      id: 11,
      title: "Study Booster Pack",
      description: "Get curated study materials.",
      icon: "📚",
    },
    {
      id: 12,
      title: "Upgrade Offer",
      description: "Special 30% OFF for membership upgrade.",
      icon: "👑",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900">

      {/* Navbar */}
      {/* <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <BadgePercent className="w-6 h-6 text-indigo-600" />
            <span className="text-lg font-semibold">Crowbar Deals</span>
          </div>

          {!loading && (
            <div>
              {!user ? (
                <button
                  onClick={signInWithCrowbar}
                  className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
                >
                  Sign In
                </button>
              ) : (
                <button
                  onClick={signOutUser}
                  className="px-4 py-2 rounded-xl border border-slate-400 hover:bg-slate-100"
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </header> */}

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm text-indigo-700">Crowbar Member Offers</span>
          </div>

          <h1 className="text-5xl font-bold leading-tight mb-4">
            Unlock <span className="text-indigo-600">Exclusive</span> Member Deals
          </h1>

          <p className="text-lg text-slate-600 font-medium mb-8">
            Your Crowbar membership unlocks premium discounts, rewards, perks and event access.
          </p>

          {!user && (
            <button
              onClick={signInWithCrowbar}
              className="px-8 py-4 text-base font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg"
            >
              Sign In to Unlock Deals
            </button>
          )}
        </motion.div>
      </section>

      {/* DEALS GRID */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        {deals.map((deal, idx) => (
          <motion.div
            key={deal.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{deal.icon}</div>
            <h3 className="text-xl font-semibold">{deal.title}</h3>
            <p className="text-slate-600 text-sm mt-2">{deal.description}</p>

            <button
              className="mt-5 w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white py-3 font-semibold hover:bg-indigo-700"
            >
              Unlock Deal
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </section>

      {/* FOOTER */}
      {/* <footer className="bg-slate-900 text-white py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold">Crowbar Deals</h4>
            <p className="text-slate-400 text-sm">Exclusive perks for Crowbar members.</p>
          </div>
          <div className="text-slate-300 text-sm">© 2024 Crowbar • Connected Network</div>
        </div>
      </footer> */}
    </div>
  );
}
