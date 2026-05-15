import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";

import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aung Zin Latt · Senior Full-Stack Engineer",
    template: "%s · Aung Zin Latt",
  },
  description:
    "Senior full-stack engineer (Laravel, Vue/React, AWS, Kubernetes) seeking Singapore on-site roles — rostering, visitor management, and enterprise PWAs.",
  metadataBase: new URL("https://aungzinlatt.netlify.app"),
  openGraph: {
    title: "Aung Zin Latt · Senior Full-Stack Engineer",
    description:
      "Mission-critical systems, microservices on AWS, and full-stack delivery for security operations platforms.",
    url: "https://aungzinlatt.netlify.app",
    siteName: "Aung Zin Latt",
    locale: "en_SG",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} ${inter.variable} h-full overflow-x-hidden`}>
      <body className="min-h-full min-w-0 font-body">
        <div className="relative isolate min-h-full w-full min-w-0 overflow-x-hidden">
          <ThemeProvider>{children}</ThemeProvider>
        </div>
      </body>
    </html>
  );
}
