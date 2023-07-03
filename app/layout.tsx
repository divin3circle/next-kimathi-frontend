import Modal from "./components/modal/Modal";
import RegisterModal from "./components/modal/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modal/LoginModal copy";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Next Kimathi",
  description: "Apartment finder",
};

/* const font = Poppins({
  subsets: ['latin'],
}); */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
