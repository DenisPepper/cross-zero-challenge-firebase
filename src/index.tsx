import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './components/app/app';
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./components/auth-provider/auth-provider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <App/>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
