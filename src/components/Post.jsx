import React, { Component } from 'react';

class Post extends Component {
	render() {
		return (
			<div className="col-8 offset-2">
				<h3 className="text-center mb-4">Add New Comment</h3>
				<form action="#" method="POST">
					<div className="form-group">
						<textarea
							maxLength="500"
							className="form-control"
							type="text"
							name="comment[text]"
							placeholder="500 Character Max"
							rows="6"
						/>
					</div>
					<div className="form-group text-center">
						<button className="btn btn-lg btn-primary px-5">Submit!</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Post;
