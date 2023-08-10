import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";
import "./globals.scss";
import { Layout } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Electronic Quill",
  description: "A digital diary for documenting my journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
