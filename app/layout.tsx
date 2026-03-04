import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BubbleBackground } from "@/components/bubble-background";

export const metadata: Metadata = {
  title: "Mushee for Pharos",
  description: "Identity + Launchpad infrastructure for Pharos builders.",
  metadataBase: new URL("https://mushee.cloud"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="relative min-h-screen overflow-hidden">
          <div className="aurora" />
          <BubbleBackground />
          <div className="relative">
            <SiteHeader />
            <main className="mx-auto w-full max-w-6xl px-5 pb-24 pt-10 md:px-8 md:pt-14">
              {children}
            </main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
