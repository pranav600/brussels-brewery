import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: "BrewMaster Cafe — Premium Coffee & Food",
    template: "%s | BrewMaster Cafe",
  },
  description:
    "Experience the finest coffee, freshly brewed with love. Explore our premium menu, reserve a table, or order online. BrewMaster — Where Every Sip Tells a Story.",
  keywords: ["coffee", "cafe", "restaurant", "espresso", "online order", "table reservation"],
  authors: [{ name: "BrewMaster Cafe" }],
  openGraph: {
    title: "BrewMaster Cafe",
    description: "Premium Coffee & Food Experience",
    type: "website",
    siteName: "BrewMaster Cafe",
  },
  twitter: { card: "summary_large_image", title: "BrewMaster Cafe" },
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
