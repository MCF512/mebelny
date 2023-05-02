import React from 'react';
import Header from './components/header/Header';
import './reset.scss'
import './fonts/fonts.module.scss'
import styles from './app.module.scss'

function App() {
  return (
    <div className={styles.App}>
      <Header />
    </div>
  );
}

export default App;
