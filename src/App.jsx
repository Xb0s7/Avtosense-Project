import "./index.scss";
import Layout from "./layout/Layout";
import { Intro2 } from "./pages/Intro2";
import { Services } from "./pages/Services";

import { CustomerCare } from "./pages/CustomerCare";
import { Reviews } from "./pages/Reviews";
import { Contact } from "./pages/Contact";
import { ServiceContextProvider } from "./context/ServiceContext";
import { APIProvider } from "@vis.gl/react-google-maps";

function App() {
    return (
        <ServiceContextProvider>
            <APIProvider apiKey="AIzaSyCKFsaQFtlPVe6Q3LgiNPRYwfLMZzaPTM8" libraries={["marker"]}>
                <div className="App">
                    <Layout>
                        <Intro2 id="intro-section" />
                        <CustomerCare id="intro-section" />
                        <Services id="services-section" />
                        <Reviews id="reviews-section" />
                        <Contact id="contact-section" />
                    </Layout>
                </div>
            </APIProvider>
        </ServiceContextProvider>
    );
}

export default App;
