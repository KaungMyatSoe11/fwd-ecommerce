import ProductProvider from "@/context/ProductProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import CartProvider from "@/context/CartProvider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <ProductProvider>
            <Header />
            {children}
          </ProductProvider>
        </CartProvider>
      </body>
    </html>
  );
}
