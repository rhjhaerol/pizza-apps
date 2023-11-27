import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "ST Pizza",
  description: "Pizza Apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-6xl mx-auto p-4">
          <Header />
          {children}
          <footer className="border-t p-8 text-center text-gray-500 mt-16">
            &copy; 2023 All right reserved
          </footer>
        </main>
      </body>
    </html>
  );
}
