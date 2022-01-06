/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import logo from './logo.svg';
import './App.css';
import liff from '@line/liff';
import React, { useEffect, useState } from 'react';
import RequestNotify from './RequestNotify';

function App() {

	const [pictureUrl, setPictureUrl] = useState(logo);
	const [idToken, setIdToken] = useState("");
	const [displayName, setDisplayName] = useState("");
	const [statusMessage, setStatusMessage] = useState("");
	const [userId, setUserId] = useState("");
	const [accessToken, setAccessToken] = useState("")
	const [email, setEmail] = useState("")

	const logout = () => {
		liff.logout();
		window.location.reload();
	}

	const initLine = () => {
		liff.init({ liffId: '1656749683-PyOq0W5X' }, () => {
			if (liff.isLoggedIn()) {
				runApp();
			} else {
				liff.login();
			}
		}, err => console.error(err));
	}

	const runApp = () => {
		const idToken = liff.getIDToken();
		setIdToken(idToken);
		const accessToken = liff.getAccessToken();
		setAccessToken(accessToken);
		const decoded = liff.getDecodedIDToken();
		console.log(decoded);
		setEmail(decoded.email);
		liff.getProfile().then(profile => {
			console.log(profile);
			setDisplayName(profile.displayName);
			setPictureUrl(profile.pictureUrl);
			setStatusMessage(profile.statusMessage);
			setUserId(profile.userId);
		}).catch(err => console.error(err));
	}

	useEffect(() => {
		initLine();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<div style={{ textAlign: "center" }}>
					<h1>React with LINE Login test bot1</h1>
					<hr />
					<img src={pictureUrl} width="300px" height="300px" />
					<p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%", wordBreak: "break-all" }}><b>id token: </b> {idToken}</p>
					<p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%", wordBreak: "break-all" }}><b>display name: </b> {displayName}</p>
					<p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%", wordBreak: "break-all" }}><b>status message: </b> {statusMessage}</p>
					<p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%", wordBreak: "break-all" }}><b>user id: </b> {userId}</p>
					<p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%", wordBreak: "break-all" }}><b>access token: </b> {accessToken}</p>
					<p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%", wordBreak: "break-all" }}><b>email: </b> {email}</p>
					<button onClick={() => logout()} style={{ width: "100%", height: 30 }}>Logout</button>
				</div>
			</header>
		</div>
	);
}

export default App;
