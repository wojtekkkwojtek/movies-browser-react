import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { GlobalStyle } from './core/App/GlobalStyle';
import { Normalize } from 'styled-normalize';
import App from './core/App/App';
import store from './core/store';
import { theme } from './core/App/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Normalize />
                <GlobalStyle />
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);


