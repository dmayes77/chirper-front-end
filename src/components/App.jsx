import React, { Component } from 'react';
import Comment from './Comment';
import Post from './Post';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<nav class="navbar text-white bg-primary mb-5">Chirper</nav>
				<main role="main" className="container">
					<div className="row jumbotron bg-secondary justify-content-center">
						<h1 className="text-white">Chirper</h1>
					</div>
					<Comment />
					<Post />
				</main>
			</React.Fragment>
		);
	}
}
export default App;
