// "use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import Script from "next/script";
import Header from "@/components/layoutComponents/Header";
import Footer from "@/components/layoutComponents/Footer";
import { Content } from "antd/es/layout/layout";
// import { CategoriesProvider } from "@/apis/categories/CategoriesContext";
import ReactQueryProvider from "@/utils/ReactUtils/ReactQueryProvider";
import FloatBtnGroup from "@/components/layoutComponents/FloatBtnGroup";
import StyledComponentsRegistry from "@/lib/antd.registry";
// import { fetchCategoriesServerSide } from "@/apis/categories/CategoriesClientWrapper";
import { fetchCategoriesServerSide } from "@/apis/categories/CategoriesServices";
import { CategoriesProvider } from "@/apis/categories/CategoriesContext";
import CategoriesClientWrapper from "@/apis/categories/CategoriesClientWrapper";

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

// export const metadata: Metadata = {
//   title: "Eplus Công ty Cổ phần Eplus Research",
//   description: "Generated by create next app",
// };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const categoriesData = await fetchCategoriesServerSide();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" id="favicon" href="/eplus-favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" />
        <meta
          name="description"
          content="Trang thông tin tuyển dụng ECO & Eplus"
        />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:type" content="article" />
        <title id="page-title">Eplus Công ty Cổ phần Eplus Research</title>
        <Script
          src="https://www.google.com/recaptcha/api.js?render=6LfETQcqAAAAAAHZyi5xJPJcP9rcoQdaPdBtcqfU"
          strategy="afterInteractive"
        />
        <Script
          src="https://sp.zalo.me/plugins/sdk.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className="antialiased"
      >
        <ReactQueryProvider>
          <Header />
          <Content className="min-h-screen">{children}</Content>
          <Footer />
        </ReactQueryProvider>
        {/* <FloatBtnGroup /> */}
      </body>
    </html>
  );
}
