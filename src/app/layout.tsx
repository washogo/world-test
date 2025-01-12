"use client";

import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "@/components/Header";
import Link from "next/link";
import { SessionProvider } from "next-auth/react";
import { CountryProvider } from "@/components/CountryContext";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <SessionProvider>
          <ChakraProvider>
            <Link href="/world">
              <Header />
            </Link>
            <Suspense>
              <CountryProvider>{children}</CountryProvider>
            </Suspense>
          </ChakraProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
