import React, { Component } from 'react';
import Comment from './Comment';
import Post from './Post';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<main role="main">
					<div className="row jumbotron bg-primary justify-content-center">
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
