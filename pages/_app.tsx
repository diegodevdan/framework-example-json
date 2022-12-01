import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import {store} from '../store/store';
import {ModalsProvider} from "@mantine/modals";
import {MantineProvider} from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return(
      <Provider store={store}>
          <MantineProvider>
              <ModalsProvider>
                  <Component {...pageProps} />
              </ModalsProvider>
          </MantineProvider>
      </Provider>
  )
}
