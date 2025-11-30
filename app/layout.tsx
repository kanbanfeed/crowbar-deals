import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import DealsNavbar from "@/components/DealsNavbar";
import DealsFooter from "@/components/DealsFooter";

export const metadata = {
  title: "Crowbar Deals",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <AuthProvider>
          <DealsNavbar />
          {children}
          <DealsFooter />
        </AuthProvider>
      </body>
    </html>
  );
}
