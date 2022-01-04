import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
  } from "react-router-dom";
import App from './App';
import RequestNotify from './RequestNotify';

export default function Apptest() {

	return (

		  <Router>
			<Routes>
			  <Route exact path="/" element={<App />} />
			  <Route exact path="/RequestNotify" element={<RequestNotify />} />
			</Routes>
		  </Router>
	)
  }
  
  ReactDOM.render(<Apptest />, document.getElementById('root'))
  
