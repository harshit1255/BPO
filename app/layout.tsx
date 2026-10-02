import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shree Shyam Infotech | BPO & Technology Solutions",
  description: "Business process outsourcing and technology solutions for modern businesses.",
  openGraph: { title: "Shree Shyam Infotech", description: "BPO and technology solutions for modern businesses.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
