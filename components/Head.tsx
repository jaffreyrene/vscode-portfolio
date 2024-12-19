import Head from "next/head";

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Jeffrey Rene - Software Engineer specializing in modern web applications, e-commerce platforms, and enterprise solutions"
      />
      <meta
        name="keywords"
        content="Jeffrey Rene, software engineer, react, next.js, node.js, three.js, ruby on rails, shopify, wordpress, e-commerce development, enterprise solutions"
      />
      <meta property="og:title" content="Jeffrey Rene's Portfolio" />
      <meta
        property="og:description"
        content="Experienced software engineer specializing in e-commerce platforms, enterprise solutions, and modern web development with React, Next.js, Three.js, and more."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jeffrey-rene.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Jeffrey Rene",
};

# touched on 2025-06-13T17:42:49.916612Z
# touched on 2025-06-13T17:43:28.544937Z
# touched on 2025-06-13T17:43:33.981874Z
# touched on 2025-06-13T17:43:39.512592Z