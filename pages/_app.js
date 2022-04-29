import "../styles/globals.css";
import { PodcasterProvider } from "../context/PodcasterProvider";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <PodcasterProvider>
      <Header />
      <Component {...pageProps} />
    </PodcasterProvider>
  );
}

export default MyApp;
