import * as React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '@store/index';
import 'tailwindcss/tailwind.css';

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <Provider store={store}>
      <Head>
        <title>next-boiler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital@0;1&family=Epilogue:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
