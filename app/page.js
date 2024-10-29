"use client"
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Customer from "./components/Customer";
import Technicians from "./components/Technicians";
import Assistance from "./components/Assistance";
import Avoid from "./components/Avoid";
import Helppage from "./components/Helppage";

import PrinterSetup from "./services/content/PrinterSetup";
import { Help, Support } from "@mui/icons-material";
import Digonode from "./components/Digonode";
import ChatSection from "./components/ChatSection";
import Solutions from "./services/content/Solutions";
import PrinterGuide from "./services/content/PrinterGuide";
import FooterSection from "./components/FooterSection";
import Chatlink from "./services/content/Chatlink";

function Home() {
  return (
    <>

      {/* <NavBar /> */}

      <Chatlink/>
      <PrinterSetup/>
      <Digonode/>
      {/* <ChatSection/> */}
      
      <Technicians/>
      <Assistance/>
      <Avoid/>
      <Helppage/>
      {/* <Support/> */}
      <Solutions/>
      <PrinterGuide/>
      {/* <Customer/> */}
      <FooterSection/>


    </>

  )
}
export default Home;


{/* <Head>
        <title>My Page</title>
      </Head>
      <Chatlink/>
      <PrinterSetup />
      <Digonode/>
      {/* <ChatSection/> */}
      // <Technicians/>
      // <Assistance/>
      // <Avoid/>
      // <Helppage/>
      // <Support />
      // <Solutions />
      // <PrinterGuide />
      // <FooterSection/>
      // */}