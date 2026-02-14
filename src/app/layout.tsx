import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Carl John D. Haro | Data Analyst Portfolio",
  description: "Data Analyst with hands-on experience in data engineering and cloud technologies. Specializing in SQL, Python, Power BI, AWS, and Azure. Building scalable analytics solutions.",
  keywords: ["Data Analyst", "Python", "SQL", "Power BI", "AWS", "Azure", "Snowflake", "Data Engineering", "ETL", "Portfolio"],
  authors: [{ name: "Carl John D. Haro" }],
  openGraph: {
    title: "Carl John D. Haro | Data Analyst Portfolio",
    description: "Data Analyst specializing in SQL, Python, Power BI, AWS, and Azure. Building scalable analytics solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#0a0a0f] text-white`}>
        {children}
      </body>
    </html>
  );
}
