import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/Shared/NavBar";
import Footer from "@/components/Shared/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MyProvider } from "../context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dr. Nawaz Sarif",
    description: "General Homoeopathic Physician",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ToastContainer />
                <MyProvider>
                    <NavBar />
                    {children}
                    <Footer />
                </MyProvider>
            </body>
        </html>
    );
}
