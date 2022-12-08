import { useRef } from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import FAQ from "@/components/FAQ/FAQ";
import WelcomeBlock from "@/components/WelcomeBlock/WelcomeBlock";
import Landing from "@/components/Landing/Landing"
import Landing2 from "@/components/Landing/Landing2"
import AppBlock from "@/components/AppBlock/AppBlock";
import LazyrActivityBlock from "@/components/LazyrActivityBlock/LazyrActivityBlock";
import WebthreeBlock from "@/components/WebthreeBlock/WebthreeBlock";
import PartnersBlock from "@/components/PartnersBlock/PartnersBlock";
import TeamBlock from "@/components/TeamBlock/TeamBlock";
import NFTIntroduction from "@/components/NFTIntroduction/NFTIntroduction";
import Roadmap from "@/components/Roadmap/Roadmap";
import Roadmap2 from "@/components/Roadmap/Roadmap2"

const DynamicHeader = dynamic(
  () => import("@/components/NavbarNew/NavbarNew"),
  {
    ssr: false,
  }
);
const DynamicRoadmap = dynamic(() => import("@/components/Roadmap/Roadmap"), {
  ssr: false,
});

const DynamicFooter = dynamic(
  () => import("@/components/FooterNew/FooterNew"),
  {
    ssr: false,
  }
);

export default function Home() {
  const introRef = useRef();
  const nftRef = useRef();
  const appRef = useRef();
  const roadmapRef = useRef();
  const partnersRef = useRef();
  const teamRef = useRef();
  const faqRef = useRef();

  return (
    <>
      <Suspense fallback={`Loading...`}>
        <DynamicHeader
          intro={introRef}
          nft={nftRef}
          app={appRef}
          roadmap={roadmapRef}
          partners={partnersRef}
          team={teamRef}
          faq={faqRef}
        />
      </Suspense>
      {/* <section ref={introRef}>
        <Landing2 />
      </section> */}
      <section ref={introRef}>
        <WelcomeBlock />
      </section>
      <section ref={nftRef}>
        <NFTIntroduction />
      </section>
      <section>
        <LazyrActivityBlock />
      </section>
      <section ref={appRef}>
        <AppBlock />
      </section>

      <section>
        <WebthreeBlock />
      </section>
      <section ref={roadmapRef}>
        {/* <Suspense fallback={`Loading...`}>
          <DynamicRoadmap />
        </Suspense> */}
        <Roadmap2 />
      </section>
      <section ref={partnersRef}>
        <PartnersBlock />
      </section>
      {/* <section ref={teamRef}>
        <TeamBlock />
      </section> */}
      <section ref={faqRef}>
        <FAQ />
      </section>
      <div style={{ height: 500, width: "100%", background: "#354153" }}></div>
      <Suspense fallback={`Loading...`}>
        <DynamicFooter />
      </Suspense>
    </>
  );
}
