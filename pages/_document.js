import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <head>
          <link rel="stylesheet" href="/preload.css" />
          <meta name="description" content="Lazy Revengers WEB 3.0" />
        </head>
        <script
          src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
          async
        ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body style={{ overflow: "hidden" }}>
        <div id="globalLoader">
          <div className="loading_screen_content">
            <div className="loading_gradient"></div>
            <lottie-player
              src="/lottieLoader.json"
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
