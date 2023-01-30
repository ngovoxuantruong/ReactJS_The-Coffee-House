import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    BrowserRouter,
    Routes,
} from 'react-router-dom';

import Home from './components/Home/Home';
import Collections from './components/Collection/Collections';
import CoffeeAtHome from '../src/components/Collection/CoffeeAtHome';
import TeaAtHome from './components/Collection/TeaAtHome';
import InProgress from './components/InProgress/InProgress';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="/inprogress" element={<InProgress />} />
                </Route>

                <Route path="/collections" element={<App />}>
                    <Route path="ca-phe-tai-nha" element={<CoffeeAtHome />} />
                    <Route path="tra-tai-nha" element={<TeaAtHome />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
