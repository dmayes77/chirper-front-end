import React, { Component } from 'react';

class Post extends Component {
	render() {
		return (
			<div>
				<h3 className="text-center">Add New Comment</h3>
				<div>
					<form action="#" method="POST">
						<div className="form-group">
							<label>Comment</label>
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
			</div>
		);
	}
}

export default Post;
