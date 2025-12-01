"use client";

import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

import {
  Leaf,
  Briefcase,
  Activity,
  Rocket,
  Gift,
  ShoppingBag,
  Mic,
  CreditCard,
  Star,
  BookOpen,
  Book,
  Crown,
} from "lucide-react";

export default function CrowbarDealsPage() {
  const { user, loading, signInWithCrowbar } = useAuth();

  const deals = [
    { id: "Flat-20-off-Ecoworldbuy", title: "Flat 20% Off – EcoWorldBuy", description: "Save on all eco-friendly products.", icon: Leaf },
    { id: "Access-Talentkonnect", title: "Access – TalentKonnect", description: "Fast-lane access for job applications.", icon: Briefcase },
    { id: "Careduel-Premium-race-entry", title: "CareDuel Premium Race Entry", description: "Unlock premium wellness challenges.", icon: Activity },
    { id: "Skill-Event-Bonus-Credits", title: "Skill Event Bonus Credits", description: "Earn double credits on weekly events.", icon: Rocket },
    { id: "Exclusive-Product-Drops", title: "Exclusive Product Drops", description: "Members-only store access.", icon: Gift },
    { id: "Crowbar-Merch-Discount", title: "Crowbar Merch Discount", description: "10% off all merchandise.", icon: ShoppingBag },
    { id: "Elite-Webinar-Access", title: "Elite Webinar Access", description: "Attend exclusive expert-led sessions.", icon: Mic },
    { id: "Marketplace-Cashback", title: "Marketplace Cashback", description: "Get 5% cashback on selected deals.", icon: CreditCard },
    { id: "Extra-Talent-Credits", title: "Extra Talent Credits", description: "Boost your TalentKonnect rank.", icon: Star },
    { id: "Free-Wellness-Guide", title: "Free Wellness Guide", description: "Download Crowbar’s health starter kit.", icon: BookOpen },
    { id: "Study-Booster-Pack", title: "Study Booster Pack", description: "Get curated study materials.", icon: Book },
    { id:"Upgrade-Offer", title:"Upgrade Offer", description:"Special 30% OFF for membership upgrade.", icon:Crown },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900">

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
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
      {user && (
        <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {deals.map((deal, idx) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 hover:shadow-xl transition"
            >
              <deal.icon className="w-10 h-10 text-indigo-600 mb-4" />

              <h3 className="text-xl font-semibold">{deal.title}</h3>
              <p className="text-slate-600 text-sm mt-2">{deal.description}</p>

              <Link
                href={`/deal/${deal.id}`}
                className="mt-5 w-full flex items-center justify-center gap-2 rounded-xl 
                  bg-indigo-600 text-white py-3 font-semibold hover:bg-indigo-700"
              >
                Unlock Deal
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </section>
      )}
    </div>
  );
}
