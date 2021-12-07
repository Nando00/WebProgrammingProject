import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}

export default MyApp;
