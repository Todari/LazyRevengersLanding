import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import "@/styles/globals.scss";

import en from "../lang/en.json";
import ko from "../lang/ko.json";

const messages = { en, ko };

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) {
        setTimeout(() => {
          loader.remove();
          const body = document.getElementsByTagName("body")[0];
          body.style = "overflow: auto";
        }, 2500);
      }
    }
    window.DOMCon;
  }, []);

  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", appHeight);
    appHeight();
  }, []);

  return (
    <>
      <Head>
        <title>LAZY REVENGERS</title>
        <link rel="shortcut icon" href="/seo/favicon.ico" />
        <link rel="manifest" href="/seo/manifest.json" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KZNNT8P2DR"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-KZNNT8P2DR');
          `}
      </Script>

      <React.Fragment>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <Component {...pageProps} />
        </IntlProvider>
      </React.Fragment>
    </>
  );
}

export default MyApp;
