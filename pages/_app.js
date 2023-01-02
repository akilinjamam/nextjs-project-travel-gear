import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import AppContext from '../AppContext/AppContext';


export default function App({ Component, pageProps }) {


  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
