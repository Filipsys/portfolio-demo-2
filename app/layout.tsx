import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const helveticaSans = localFont({
  src: "./fonts/Helvetica.ttf",
  variable: "--font-helvetica-sans",
});

const helveticaBold = localFont({
  src: "./fonts/helvetica-bold.ttf",
  variable: "--font-helvetica-bold",
});

const helveticaLight = localFont({
  src: "./fonts/Helvetica-light.ttf",
  variable: "--font-helvetica-light",
});

const helveticaCompressed = localFont({
  src: "./fonts/Helvetica-compressed.otf",
  variable: "--font-helvetica-compressed",
});

export const metadata: Metadata = {
  title: "Neutrall • High-fit Clothing",
  description: "High-quality, high-style, high-fit clothing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helveticaSans.variable} ${helveticaBold.variable} ${helveticaCompressed.variable} ${helveticaLight.variable} bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
