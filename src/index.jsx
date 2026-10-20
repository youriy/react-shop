import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './App.jsx';
import './scss/global.scss';

const container = document.getElementById('root');

createRoot(container).render(
    <StrictMode>
        <App/>
    </StrictMode>
);
