import ContactUs from "./contact-us";
import PerViewProperty from "./per-view-property";
import Search from "../services/search/Search";
import OurProject from "./our-project";
import OurStats from "./ourstats/our-stats";
import Notification from "./notification";
import Footer from "./footer";

export default function Home() {
    return (
        <>
            <div className={`max-w-screen bg-gray-200`}>
                <Search />
                <PerViewProperty start={0} limit={3} />
                <OurProject />
                <OurStats />
                <ContactUs />
                <Footer />
                <Notification />
            </div>
        </>
    )
}