import React from "react";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<blockquote>
					<div id="speech"></div>
					<div id="bottom1"></div>
				</blockquote>
				<div id="cat">😼</div>
				<button id="go" onClick={go}>
					go()
				</button>
			</header>
		</div>
	);
}

function go() {
	console.log("calling...");
	var messages = [
		"Meow!",
		"I'm a talking cat!",
		"Callbacks are fun!",
		"Okay, bye!",
	];

	// old one
	// for (var i = 0; i < messages.length; i++) {
	// 	setTimeout(() => {
	// 		cat.say(messages[i]);
	// 	}, i * 1500);
	// }

	// updated one
	messages.forEach(function (message, i) {
		setTimeout(() => {
			cat.say(message);
		}, i * 1500);
	});

	var cat = {
		speech: document.getElementById("speech"),
		cat: document.getElementById("cat"),
		say: function (quip) {
			this.speech.textContent = "" + quip;
			this.cat.textContent = "😸";
			setTimeout(() => {
				this.speech.textContent = "";
				this.cat.textContent = "😼";
			}, 1200);
		},
	};
}

export default App;
