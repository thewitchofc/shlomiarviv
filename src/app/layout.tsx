import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import PageIntro from "@/components/PageIntro";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const SITE_URL = "https://www.shlomiarviv.co.il";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "שלומי ארביב | עיצוב שיער פרמיום בתל אביב",
    template: "%s | שלומי ארביב עיצוב שיער",
  },
  description:
    "שלומי ארביב – סטודיו לעיצוב שיער פרמיום בתל אביב. מתמחים בבלייאז׳, גוונים, צבעי שיער, החלקות קרטין ותוספות שיער. קבעי ייעוץ חינמי עוד היום.",
  keywords: [
    "שלומי ארביב",
    "Shlomi Arviv",
    "עיצוב שיער תל אביב",
    "מספרה תל אביב",
    "מספרה פרמיום תל אביב",
    "בלייאז' תל אביב",
    "גוונים לשיער תל אביב",
    "צבע שיער תל אביב",
    "החלקת שיער תל אביב",
    "קרטין תל אביב",
    "תוספות שיער תל אביב",
    "בוגרשוב מספרה",
    "הסלקציה שיער",
    "בלונד תל אביב",
    "שיער אורגני",
    "עיצוב שיער נשים",
    "ספא שיער תל אביב",
    "מומחה לצבעי שיער",
    "בלייאז' מחיר",
    "סטייליסט שיער תל אביב",
  ],
  authors: [{ name: "Shlomi Arviv", url: SITE_URL }],
  creator: "Shlomi Arviv Hair Design",
  publisher: "Shlomi Arviv Hair Design",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "he-IL": SITE_URL,
    },
  },
  openGraph: {
    title: "שלומי ארביב | עיצוב שיער פרמיום בתל אביב",
    description:
      "סטודיו לעיצוב שיער פרמיום בתל אביב. בלייאז׳, גוונים, צבעי שיער, קרטין ותוספות שיער. קבעי ייעוץ חינמי עוד היום.",
    url: SITE_URL,
    siteName: "שלומי ארביב עיצוב שיער",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "שלומי ארביב – עיצוב שיער פרמיום תל אביב",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "שלומי ארביב | עיצוב שיער פרמיום בתל אביב",
    description:
      "סטודיו לעיצוב שיער פרמיום בתל אביב. בלייאז׳, גוונים, קרטין ותוספות שיער.",
    images: ["/assets/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
  category: "beauty",
  other: {
    "geo.region": "IL-TA",
    "geo.placename": "Tel Aviv",
    "geo.position": "32.0785;34.7750",
    ICBM: "32.0785, 34.7750",
    "og:phone_number": "+972535220611",
    "og:street-address": "בוגרשוב 37",
    "og:locality": "תל אביב",
    "og:region": "תל אביב",
    "og:postal-code": "6340306",
    "og:country-name": "ישראל",
    "business:contact_data:phone_number": "+972535220611",
    "business:contact_data:street_address": "בוגרשוב 37",
    "business:contact_data:locality": "תל אביב",
    "business:contact_data:country_name": "ישראל",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#F8F6F3] text-[#111111] overflow-x-hidden">
        <JsonLd />
        <PageIntro />
        <AccessibilityWidget />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
