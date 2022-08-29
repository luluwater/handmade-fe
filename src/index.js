import React from 'react'
// import App from './App'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import FilterStores from '../src/components/FilterStores/FilterStores'
import FilterTime from '../src/components/FilterStores/FilterTime'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterStores />
      <FilterTime />
    </BrowserRouter>
  </React.StrictMode>
)
