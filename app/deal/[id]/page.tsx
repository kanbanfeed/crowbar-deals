"use client";

import { motion } from "framer-motion";
import { Gift, ArrowLeft, Lock } from "lucide-react";

export default function DealPlaceholder({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  // Convert "Flat_20%_Off_EcoWorldBuy" → "Flat 20% Off EcoWorldBuy"
  function formatId(str: string) {
    return decodeURIComponent(str.replace(/_/g, " ").trim());
  }

  const prettyId = formatId(id);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full"></div>
      </div>

      {/* Lock icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center mb-6"
      >
        <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl shadow-indigo-500/10">
          <Lock className="w-14 h-14 text-indigo-300" />
        </div>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent text-center"
      >
        Deal # {prettyId}
        <span className="block text-lg mt-2 text-white opacity-80">Coming Soon</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-indigo-200 text-lg max-w-xl text-center"
      >
        This exclusive Crowbar member deal is not active yet.  
        New perks unlock every week across the Crowbar Connected Network.
      </motion.p>

      {/* Floating card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl max-w-md text-center shadow-xl shadow-indigo-500/10"
      >
        <Gift className="w-10 h-10 text-indigo-300 mx-auto mb-3" />
        <p className="text-indigo-100 text-sm">
          Deals unlock based on events, credits, activity & membership tier.
        </p>
      </motion.div>

      {/* Back Button */}
      <motion.button
        onClick={() => window.history.back()}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="mt-10 px-6 py-3 flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-indigo-500/30 transition-all"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Deals
      </motion.button>

    </div>
  );
}
