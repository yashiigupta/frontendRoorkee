import "@/styles/globals.css";
import { PrimeReactProvider } from 'primereact/api';

export default function App({ Component, pageProps }) {
  return (
    <PrimeReactProvider>
      <Component {...pageProps} />;
    </PrimeReactProvider>
  );
}
