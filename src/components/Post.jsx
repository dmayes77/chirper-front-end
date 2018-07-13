import React, { Component } from 'react';
import Chirps from './Chirps';
import './Post.css';

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			post: '',
			array: [
				'David - This is great!',
				'April - Hello World!',
				'Breslynn - I love my Daddy!'
			]
		};

		this.clearForm = () => {
			this.setState({
				name: '',
				post: ''
			});
		};
	}

	onInputName = value => {
		this.setState({ name: value });
	};

	onInputPost(value) {
		this.setState({ post: value });
	}

	handleForm = event => {
		event.preventDefault();
		console.log(this.state.name);
		console.log(this.state.post);
		let arr = this.state.array;
		arr.push(this.state.name + ' - ' + this.state.post);
		this.setState({ array: arr });
		console.log(arr);
		this.clearForm();
	};
	render() {
		return (
			<React.Fragment>
				<Chirps value={this.state.array} />
				<div className="col-8 offset-2 mt-4">
					<h3 className="text-center mb-4">Add New Post</h3>
					<form className="form-post" onSubmit={e => this.handleForm(e)}>
						<div className="form-group">
							<input
								id="name"
								placeholder="Name"
								className="form-control"
								value={this.state.name}
								onChange={e => this.onInputName(e.target.value)}
								required
								autoFocus
							/>
							<input
								id="post"
								maxLength="150"
								className="form-control"
								placeholder="Post 150 Character Max"
								value={this.state.post}
								onChange={e => this.onInputPost(e.target.value)}
								required
							/>
						</div>
						<div className="form-group text-center">
							<button type="submit" className="btn btn-lg btn-primary px-5">
								Submit!
							</button>
						</div>
					</form>
				</div>
			</React.Fragment>
		);
	}
}

export default Post;
