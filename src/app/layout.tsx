import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionLazy } from "@/components/animate";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reservy - Votre plateforme de réservation beauté",
  description: "Réservez vos rendez-vous beauté en ligne - Coiffeur, Barbier, Manucure, Institut de beauté",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MotionLazy>{children}</MotionLazy>
      </body>
    </html>
  );
}
