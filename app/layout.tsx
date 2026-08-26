import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Alexogoth Akademija",
    template: "%s | Alexogoth Akademija",
  },

  description:
    "Alexogoth Akademija je online platforma za lični razvoj, manifestaciju i praktičnu duhovnost kroz profesionalne online kurseve.",

  keywords: [
    "Alexogoth",
    "online kursevi",
    "lični razvoj",
    "manifestacija",
    "duhovnost",
    "online akademija",
    "samorazvoj",
    "zakon privlačenja",
  ],

  authors: [{ name: "Alexogoth" }],

  creator: "Alexogoth",

  applicationName: "Alexogoth Akademija",

  metadataBase: new URL("https://alexogoth.com"),

  openGraph: {
    title: "Alexogoth Akademija",
    description:
      "Online platforma za lični razvoj, manifestaciju i praktičnu duhovnost.",
    url: "https://alexogoth.com",
    siteName: "Alexogoth Akademija",
    locale: "hr_HR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alexogoth Akademija",
    description:
      "Online platforma za lični razvoj, manifestaciju i praktičnu duhovnost.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}