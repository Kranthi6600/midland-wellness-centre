
import { GoogleMap } from "@react-google-maps/api";
import Layout from "../../components/layout/Layout";
import About from "../../components/sections/home2/About";
import About_Two from "../../components/sections/home2/About_Two";
import Banner from "../../components/sections/home2/Banner";
import Chooseus from "../../components/sections/home2/Chooseus";
import Contact_Info from "../../components/sections/home3/Contact_Info";
import News from "../../components/sections/home3/News";
import Portfolio from "../../components/sections/home2/Portfolio";
import Service from "../../components/sections/home2/Service";
import Working from "../../components/sections/home2/Working";
export default function Home() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1}>
                <Banner/>
                <Contact_Info/>
                <About/>
                <Service/>
                <Chooseus/>
                <Working/>
                <About_Two/>
                <Portfolio/>
                <News/>
            </Layout>
        </div>
    )
}
