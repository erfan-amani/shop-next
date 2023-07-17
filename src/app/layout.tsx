import "./globals.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { setupAxios } from "@/utils/setupAxios";
import Providers from "./components/Providers";

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
        <Providers>
          <Header className="px-4" />

          <main className="flex-grow container mx-auto my-5 px-4">
            {children}
          </main>

          <Footer className="px-4" />
        </Providers>
      </body>
    </html>
  );
}
