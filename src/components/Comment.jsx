import React, { Component } from 'react';

class Comments extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<h3 className="text-center">Recent Comments</h3>
					<div className="card mt-3">
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
