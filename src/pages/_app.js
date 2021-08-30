import GlobalStyle from "../styles/global.styles.js";
import Footer from "../components/Footer/Footer.js";
import { Store } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </Store>
  );
}

export default MyApp;
