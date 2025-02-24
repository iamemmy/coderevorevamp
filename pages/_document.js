import { Html, Head, Main, NextScript } from 'next/document';

function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Code Revolution is a dynamic web development agency offering cutting-edge web solutions, UI/UX design, SEO services, and social media management. Grow your online presence with our expert team." />
        <meta name="keywords" content="web development, UI/UX design, SEO, social media management, Code Revolution, website design, digital marketing, SEO services, social media advertising" />
        <meta name="google-site-verification" content="GSU5hBz80ITHh0Uqfs9lQcLQs7PvZnG9uqxhYDI_qN0" />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "m1npoxss1m");
          `,
        }}
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
