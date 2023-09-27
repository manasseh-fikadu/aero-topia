"use client";

import store, { persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <Provider store={store}>
      <>
        <Head>
          <title>aerotopia - We are not different, only excellent!</title>
          <meta name="We are not different, only excellent!" />
        </Head>

        <Navbar />
        <Hero />
        <SectionTitle pretitle="aerotopia Benefits" title=" Why should you us">
          Aerotopia has a lot of features that you will love. Check out some of
          them below.
        </SectionTitle>
        <Benefits data={benefitOne} />
        <SectionTitle
          pretitle="Watch a video"
          title="Learn how to fullfil your needs"
        ></SectionTitle>
        <Video />
        <SectionTitle
          pretitle="Testimonials"
          title="Here's what our customers said"
        ></SectionTitle>
        <Testimonials />
        <SectionTitle
          pretitle="FAQ"
          title="Frequently Asked Questions"
        ></SectionTitle>
        <Faq />
        <Footer />
        <PopupWidget />
        <PersistGate loading={null} persistor={persistor} />
      </>
    </Provider>
  );
};

export default Home;
