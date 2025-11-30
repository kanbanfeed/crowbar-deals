"use client";

import { useAuth } from "@/contexts/AuthContext";
import { BadgePercent } from "lucide-react";

export default function DealsNavbar() {
  const { user, loading, signInWithCrowbar, signOutUser } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BadgePercent className="w-6 h-6 text-indigo-600" />
          <span className="font-semibold text-lg">Crowbar Deals</span>
        </div>

        {!loading && (
          <>
            {!user ? (
              <button
                onClick={signInWithCrowbar}
                className="px-5 py-2 rounded-xl bg-indigo-600 text-white"
              >
                Login with Crowbar
              </button>
            ) : (
              <button
                onClick={signOutUser}
                className="px-5 py-2 rounded-xl border border-slate-400 hover:bg-slate-100"
              >
                Logout
              </button>
            )}
          </>
        )}
      </div>
    </header>
  );
}
