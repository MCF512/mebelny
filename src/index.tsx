import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss'
import MainPage from './pages/MainPage';
import { CatalogPage } from './pages/CatalogPage';
import './reset.scss';
import './fonts/fonts.scss'
import './index.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='App'>

    </div>
    <CatalogPage />
    {/* <App /> */}
    {/* <MainPage /> */}
  </React.StrictMode>
);
