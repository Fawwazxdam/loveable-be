import { Inter, Pacifico } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

export const metadata = {
  title: "Untuk Kekasihku",
  description: "Sebuah permintaan maaf tulus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
