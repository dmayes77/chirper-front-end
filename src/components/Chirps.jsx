import React, { Component } from 'react';
import Chirp from './Chirp';

class Chirps extends Component {
	constructor(props) {
		super(props);

		this.items = {
			chirp1: 'David - This is great!',
			chirp2: 'April - Hello World!',
			chirp3: 'Breslynn - I love my Daddy!'
		};
	}

	render() {
		return (
			<React.Fragment>
				<div className="row">
					<div className="col-8 offset-2">
						<h3 className="text-center my-4">Recent Posts</h3>
						<div className="col-12">
							<ul className="list-group">
								<li className="list-group-item"> {this.items.chirp1} </li>
								<li className="list-group-item"> {this.items.chirp2} </li>
								<li className="list-group-item"> {this.items.chirp3} </li>
								{this.props.value.map((chirp, index) => {
									return <Chirp chirp={chirp} key={index} />;
								})}
							</ul>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Chirps;
