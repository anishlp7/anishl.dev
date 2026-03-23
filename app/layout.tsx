import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Anish Lawrence — Senior Frontend Developer & Open Source Builder",
  description:
    "Building AniUI — the React Native component library and ecosystem. Senior Frontend developer, open source builder, based in India.",
  openGraph: {
    title: "Anish Lawrence — Senior Frontend Developer & Open Source Builder",
    description:
      "Building AniUI — the React Native component library and ecosystem. Senior Frontend developer, open source builder, based in India.",
    type: "website",
    url: "https://anishl.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anish Lawrence — Senior Frontend Developer & Open Source Builder",
    description:
      "Building AniUI — the React Native component library and ecosystem.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
