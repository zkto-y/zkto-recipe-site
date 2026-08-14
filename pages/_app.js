// Self-hosted fonts (via @fontsource) instead of next/font/google, so the site
// builds without needing to reach fonts.googleapis.com at build time.
import '@fontsource/caveat/600.css';
import '@fontsource/caveat/700.css';
import '@fontsource/lora/400.css';
import '@fontsource/lora/500.css';
import '@fontsource/lora/600.css';
import '@fontsource/lora/400-italic.css';
import '@fontsource/lora/500-italic.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
