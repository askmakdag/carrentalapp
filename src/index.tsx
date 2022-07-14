import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from "./store";
import {Provider} from "react-redux";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./components/styles/Global";
import {DarkTheme, DefaultTheme} from "./theme";
import WebFont from 'webfontloader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function Root() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Open Sans']
            }
        });
    }, []);

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <App />
            </ThemeProvider>
        </Provider>
    );
}


// In need, we can add dark theme support...
const theTheme = 'light';
const theme = theTheme === 'light' ? DefaultTheme : DarkTheme;

root.render(<Root />);
