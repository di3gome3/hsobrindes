import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingWhatsAppButton from "@/components/FloatWpp";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "HSO BRINDES",
  description: "Brindes Personalizados com criatividade!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <FloatingWhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
