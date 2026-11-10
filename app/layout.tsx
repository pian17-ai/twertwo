import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twertwo - XII RPL 2 SMKN 64 JAKARTA | Official Portfolio & Yearbook",
  description:
    "The Official Digital Headquarters & Class Portfolio of XII RPL 2 (Twertwo) SMKN 64 Jakarta. Explore student profiles, showcase projects, and hall of fame achievements.",
  keywords: [
    "Twertwo",
    "XII RPL 2",
    "SMKN 64 Jakarta",
    "RPL",
    "Portfolio Kelas",
    "Web Development",
    "Software Engineering",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="selection:bg-brand-yellow selection:text-black antialiased relative min-h-screen">
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        {children}
      </body>
    </html>
  );
}
