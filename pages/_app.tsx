import { useEffect } from "react";
import type { AppProps } from "next/app";

import Layout from "@/components/Layout";
import Head from "@/components/Head";

import "@/styles/globals.css";
import "@/styles/themes.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, []);

  return (
    <Layout>
      <Head title={`Jeffrey Rene | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

# touched on 2025-06-13T17:42:12.926709Z
# touched on 2025-06-13T17:42:30.569868Z
# touched on 2025-06-13T17:43:04.853956Z
# touched on 2025-06-13T17:43:10.341747Z
# touched on 2025-06-13T17:43:39.514133Z
# touched on 2025-06-13T17:44:07.098523Z
# touched on 2025-06-13T17:44:10.251217Z