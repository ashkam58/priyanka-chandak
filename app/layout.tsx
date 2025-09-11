import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Priyanka Chandak — Rubik's Cube & Calligraphy",
  description: "International coaching in Rubik's Cubing (all forms) and Calligraphy. Day/Night theme with animated backgrounds and parallax sections."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased transition-colors duration-300">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem={true}
          storageKey="priyanka-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
