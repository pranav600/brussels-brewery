import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: "Cafe Forêt — Coffee, Calm & Sweetness",
    template: "%s | Cafe Forêt",
  },
  description:
    "A lush botanical forest sanctuary in downtown Toronto. Experience signature specialty croffles and pistachio cream coffees in our calm, study-friendly plant oasis. Cafe Forêt — Coffee, calm, and a little something sweet.",
  keywords: ["coffee", "cafe", "toronto", "croffle", "pistachio cream coffee", "table reservation", "study space"],
  authors: [{ name: "Cafe Forêt" }],
  openGraph: {
    title: "Cafe Forêt",
    description: "Botanical study sanctuary and specialty cafe experience in Toronto",
    type: "website",
    siteName: "Cafe Forêt",
  },
  twitter: { card: "summary_large_image", title: "Cafe Forêt" },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FEF3C7" },
    { media: "(prefers-color-scheme: dark)", color: "#1C0A00" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#78350F",
                color: "#FEF3C7",
                borderRadius: "12px",
                fontFamily: "Inter, sans-serif",
              },
              success: { iconTheme: { primary: "#FBBF24", secondary: "#78350F" } },
              error: { style: { background: "#7f1d1d", color: "#FEF3C7" } },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
