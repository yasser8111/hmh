import Header from "../components/Header";
import Footer from "../components/Footer";
import { Noto_Kufi_Arabic } from "next/font/google";

import "./globals.css";

const notokufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${notokufi.className} antialiased`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
