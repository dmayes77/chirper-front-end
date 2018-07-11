import React, { Component } from 'react';
class App extends Component {
	render() {
		return (
			<React.Fragment>
				<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
					<a class="navbar-brand" href="#">
						Chirper
					</a>
				</nav>

				<main role="main" class="container">
					<div class="row px-2 py-5 justify-content-center">
						<h1>Chirper</h1>
					</div>
				</main>
			</React.Fragment>
		);
	}
}
export default App;
