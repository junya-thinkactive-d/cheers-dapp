import '../styles/globals.css';

import { Layout } from '@/components/shared/layouts';
import { MyProvider } from '@/context/state';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyProvider>
  );
}

export default MyApp;
