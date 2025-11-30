"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const processTokens = async () => {
      const hash = window.location.hash;

      if (hash.includes("access_token")) {
        const params = new URLSearchParams(hash.substring(1));
        const access = params.get("access_token");
        const refresh = params.get("refresh_token");

        await supabase.auth.setSession({
          access_token: access!,
          refresh_token: refresh!,
        });

        window.history.replaceState({}, "", "/");
      }

      router.push("/");
    };

    processTokens();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center text-slate-700">
      Processing login...
    </div>
  );
}
