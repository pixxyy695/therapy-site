import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://grow-my-therapy.vercel.app"),
  title: {
    default: `${site.therapistName}, ${site.credentials} | Therapy for Anxiety, Trauma & Burnout in Santa Monica`,
    template: `%s | ${site.therapistName}, ${site.credentials}`,
  },
  description: site.metaDescription,
  keywords: [
    "therapy Santa Monica",
    "anxiety therapist Santa Monica",
    "trauma therapy Santa Monica",
    "burnout therapist California",
    "EMDR therapist Santa Monica",
    "licensed clinical psychologist Santa Monica",
  ],
  openGraph: {
    title: `${site.therapistName}, ${site.credentials} | Therapy for Anxiety, Trauma & Burnout in Santa Monica`,
    description: site.metaDescription,
    url: "/",
    siteName: `${site.therapistName}, ${site.credentials}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/images/maya-portrait.png",
        width: 1024,
        height: 1536,
        alt: "Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.therapistName}, ${site.credentials} | Therapy in Santa Monica`,
    description: site.metaDescription,
    images: ["/assets/images/maya-portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/images/icon-192.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#314a43",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="flex min-h-full flex-col bg-background font-sans text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
