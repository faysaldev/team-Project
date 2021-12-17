import { Provider } from 'react-redux'
import { store } from '../app/store';
import {ThemeProvider} from 'next-themes'

import '../styles/globals.css'
import '../styles/custom.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </ThemeProvider>
  )
}

export default MyApp
