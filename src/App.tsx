import '@mantine/core/styles.css';
import "./App.css";
import { createTheme, MantineProvider } from '@mantine/core';
import HomePage from './components/HomePage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function App() {
  useEffect(()=>{
    AOS.init();
  },[])

  const theme = createTheme({
    breakpoints: {
      'xs': '320px',
      'sm': '476px',
      'md': '640px',
      'bs': '768px',
      'lg': '900px',
      'xl': '1020px',
      '2xl': '1280px',
    }
  });
  return (
    <MantineProvider theme={theme}>
      <HomePage />
     </MantineProvider>
   
  );
}

export default App;
