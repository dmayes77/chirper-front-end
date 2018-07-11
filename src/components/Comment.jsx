import React, { Component } from 'react';

class Comments extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-8 offset-2">
					<h3 className="text-center mb-4">Recent Comments</h3>
					<div className="card mb-4">
						<div className="card-body">
							<div className="float-left">
								<div className="card-title">name</div>
								<p className="card-text">text</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Comments;
