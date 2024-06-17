import SideBar from '@/app/ui/navbar/sidebar'
import Navbar from "../ui/navbar/navbar";
import Notification from "../ui/navbar/notification";
import { SideProvider } from "../ui/context/sidebar";
import { WishProvider } from '../ui/context/wish';

export default function RootLayout({ children }) {

  return (
    <>
      <WishProvider>
        <SideProvider>
          <SideBar />
          <div className={`w-[100%] bg-gray-200 relative`}>
            <Navbar />
            <Notification />
            {children}
          </div>
        </SideProvider>
      </WishProvider>
    </>
  );
}
