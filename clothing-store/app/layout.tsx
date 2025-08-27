// app/layout.tsx
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import "./globals.css";

// (Optional) Font imports from next/font

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
      <body>
        {/* Site-wide Header */}
        <header className="border-b">
          <div className="container flex h-16 items-center">
            <span className="text-lg font-bold">Clothing Store</span>
          </div>
        </header>

        {/* Page Content */}
        <main>{children}</main>

        {/* Site-wide Footer */}
        <footer className="border-t">
          <div className="text-muted-foreground container py-6 text-sm">
            © {new Date().getFullYear()} Clothing Store. All rights reserved.
          </div>
        </footer>

        {/* Toast notifications */}
        <Toaster richColors />
      </body>
    </html>
  );
}
