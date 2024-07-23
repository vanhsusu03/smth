import React from 'react'
import ReactDOM from 'react-dom'
import { MantineProvider } from '@mantine/core'
import App from './App'
import '@mantine/core/styles.css'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
