import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import store from './redux/store';

import App from './App';

import { GlobalStyles } from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URI,
});

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <GlobalStyles />
                    <App />
                </Provider>
            </ApolloProvider>
        </BrowserRouter>
    </React.StrictMode>
);
