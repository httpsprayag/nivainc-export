import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Niva Inc",
  description: "Leading Import Export Company",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="font-merriweather">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
