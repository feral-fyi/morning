import Head from "next/head"
import Script from "next/script"
import Header from "@components/Header"
import Footer from "@components/Footer"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Morning!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
      </main>

      <Footer />
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <Script id="netlify">
        {`
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
              if (!user) {
                window.netlifyIdentity.on("login", () => {
                  document.location.href = "/admin/";
                });
              }
            });
          }
        `}
      </Script>
    </div>
  )
}
