import { Inter } from "next/font/google";
import { SideProvider } from "../ui/context/sidebar";
import Sidebar from "../ui/provider/sidebar";
import Navhead from "../ui/provider/nav-head";
import { Suspense } from "react";
import { SessionProvider } from "../ui/context/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clear Solution",
  description: "Autamation of payments car allowed, ",
};

export default function ProviderLayout({ children }) {
  return (
    <>
      <SideProvider>
        <SessionProvider>
          <div className="flex h-screen overflow-y-hidden bg-white text-black">
            {/* Sidebar backdrop */}
            <div
              className="fixed inset-0 z-10 bg-black bg-opacity-20 lg:hidden"
              style={{
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
              }}
            />
            <Sidebar />
            <div className="flex flex-col flex-1 h-full overflow-hidden">
              {/* Navbar */}
              <Navhead />
              <Suspense>{children}</Suspense>
            </div>
          </div>
        </SessionProvider>
      </SideProvider>
    </>
  );
}
