import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from "./store";
import {Provider} from "react-redux";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./components/styles/global";
import {DarkTheme, DefaultTheme} from "./theme";
import WebFont from 'webfontloader';
import {BrowserRouter} from "react-router-dom";
import {Helmet} from "react-helmet";

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
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Rent The Car</title>
            </Helmet>

            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        </>
    );
}


// In need, we can add dark theme support...
const theTheme = 'light';
const theme = theTheme === 'light' ? DefaultTheme : DarkTheme;

root.render(<Root />);
