import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './components/app/app';
import {AuthProvider} from "./components/auth-provider/auth-provider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <AuthProvider>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </AuthProvider>
);
