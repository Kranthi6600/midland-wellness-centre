
import Layout from "../../components/layout/Layout";
import Working from "../../components/sections/home/Working";
import AboutTwo from "../../components/sections/home/About_Two";
import Banner from "../../components/sections/home/Banner";
import Chooseus from "../../components/sections/home/Chooseus";
import Service from "../../components/sections/home/Service";
import Cta from "../../components/sections/home/Cta";

export default function Home() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <Banner/>
                <Service/>
                <AboutTwo/>
                <Chooseus/>
                <Working/>
                <Cta/>
            </Layout>
        </div>
    )
}
