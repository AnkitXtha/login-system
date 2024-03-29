import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.tsx'
import App from './App.tsx'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>

    <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
