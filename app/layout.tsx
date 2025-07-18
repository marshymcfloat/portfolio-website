import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider";
import NavBar from "@/components/NavBar";
import { Krona_One } from "next/font/google";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import { icons } from "lucide-react";

const kronaOne = Krona_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-krona-one",
});

export const metadata = {
  title: "Dani.",
  description: "know more about Daniel Canoy",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kronaOne.variable}>
      <body className={`min-h-screen max-w-screen bg-BGDark text-neutral-300`}>
        <ReduxProvider>
          <NavBar />
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <BackgroundOrbs />
          </div>
          {children}
          {modal}
        </ReduxProvider>
      </body>
    </html>
  );
}
