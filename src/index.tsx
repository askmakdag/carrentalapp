import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from "./store";
import {Provider} from "react-redux";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./components/styled/Global";
import {DarkTheme, DefaultTheme} from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// In need, we can add dark theme support...
const theTheme = 'light';
const theme = theTheme === 'light' ? DefaultTheme : DarkTheme;

root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </Provider>
);
