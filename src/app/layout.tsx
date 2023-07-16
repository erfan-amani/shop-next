import "./globals.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { setupAxios } from "@/utils/setupAxios";

setupAxios();

export const metadata = {
  title: "Shop Next",
  description: "Shopping app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-mono text-gray-700">
        <Header className="px-4" />

        <main className="flex-grow container mx-auto my-5">{children}</main>

        <Footer className="px-4" />
      </body>
    </html>
  );
}
