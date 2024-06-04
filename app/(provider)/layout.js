import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Clear Solution",
    description: "Autamation of payments car allowed, ",
};

export default function RootLayout({ children }) {
    return (
        <>
        <div className="flex h-screen overflow-y-hidden bg-white text-black">
            {children}
        </div>
            
        </>
    );
}
