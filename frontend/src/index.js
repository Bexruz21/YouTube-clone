import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './store/store';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <GoogleOAuthProvider clientId="772384793359-rv7i82deictqfj9lv0h0aetvkcg3gj6o.apps.googleusercontent.com">
            <App />
        </GoogleOAuthProvider>
    </Provider>
)
