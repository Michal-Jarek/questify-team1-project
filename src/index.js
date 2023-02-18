import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from "react-redux";
// import { store, persistor } from "redux/store";

import './index.css';
import App from './components/App.js';
// const LandingPage = React.lazy(() => import('./pages/LandingPage/LandingPage'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					{/* <Route path='landing' element={<LandingPage />} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
