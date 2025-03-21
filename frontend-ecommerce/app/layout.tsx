import type { Metadata } from "next";
import { Urbanist} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { ThemeProvider } from "@/components/ui/theme-provider";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Natura Consciente",
  description: "Tu mejor lugar para conseguir tus productos natura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${urbanist.className} antialiased`}
      >

        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        > 

        <Navbar />

        {children}

        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
