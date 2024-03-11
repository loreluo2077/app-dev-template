import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
 
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen  font-sans antialiased bg-[#faf6f4] dark:bg-[#1e232a]",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
        <footer className="max-w-screen-xl mx-auto px-4  md:px-8">
                <div className="mt-3 py-3 border-t md:text-center">
                    <p>© 2024 备案号. All rights reserved.</p>
                </div>
    
        </footer>
            </div>
            <TailwindIndicator />
           
 
          </ThemeProvider>
        </body>
      </html>
  )
}
