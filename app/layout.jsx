import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "./ui/context/auth";
import { ServiceProvider } from "./ui/context/services";
import { SideProvider } from "./ui/context/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clear Solution",
  description: "Autamation of payments car allowed, ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideProvider>
          <SessionProvider>
            <ServiceProvider>
              <div>{children}</div>
            </ServiceProvider>
          </SessionProvider>
        </SideProvider>
      </body>
    </html>
  );
}
