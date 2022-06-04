import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="px-8 md:px-32 h-full w-full">
      <div
        className="h-full w-full fixed inset-0 bg-center bg-no-repeat bg-cover transition dark:duration-300 dark:opacity-0 opacity-100 z-0"
        style={{
          backgroundImage: `url("./assets/images/hero-section-bg-dark.webp");`,
        }}
      ></div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
