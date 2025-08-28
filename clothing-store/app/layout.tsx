// app/layout.tsx
import type { Metadata } from "next";
import { Toaster } from "sonner";
import SiteHeader from "@/components/ui/site-header";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Nunito, Montserrat, Parisienne } from "next/font/google";

// (Optional) Font imports from next/font
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
});

export const metadata: Metadata = {
  title: "Clothing Store",
  description: "Modern womenswear, thoughtfully made.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={[
          nunito.variable,
          montserrat.variable,
          parisienne.variable,
        ].join(" ")}
      >
        {/* Site-wide Header */}
        <SiteHeader />
        {/* Page Content */}
        <main>{children}</main>

        {/* Site-wide Footer */}
        {/* <footer>
          <div className="text-muted-foreground container py-6 text-sm">
            © {new Date().getFullYear()} Clothing Store. All rights reserved.
          </div>
        </footer> */}

        {/* Toast notifications */}
        <Toaster richColors />
      </body>
    </html>
  );
}
