import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

import i18nConfig from "../../i18nConfig";
import { dir } from "i18next";
const myFont = localFont({ src: "../../public/Branch/Branch.otf"})
const quicksand = Quicksand({ subsets: ["latin"] });


export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },

}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };

}>) {

  return (
    <html lang="en">
      <head>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>

      </head>
      <body className={myFont.className}>
        {/* Render children if no template component is found */}
        { children }

      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      <script src="../path/to/flowbite/dist/datepicker.js"></script>
      <script src="../path/to/flatpickr.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"></script>
      
      </body>
    </html>
  );
}
