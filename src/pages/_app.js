import RootLayout from "@/app/layout";

function MyApp({ Component, pageProps }) {
  console.log('root')
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
