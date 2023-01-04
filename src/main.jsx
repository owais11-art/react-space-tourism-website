import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styledComponents/Global'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'

const theme = {
  colors: {
    light: "#fff",
    lightBlue: "#D0D6F9",
    hoverLight: "rgba(255, 255, 255, 0.5)"
  },
  breakpoints: {
    x_large: "1200px",
    large: "991px",
    medium: "768px",
    small: "500px"
  },
  fonts: {
    barlowCondensed: "'Barlow Condensed', sans-serif",
    bellefair: "'Bellefair', serif",
    barlow: "'Barlow', sans-serif"
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
  </BrowserRouter>
)
