import React from 'react';

const Chirp = props => {
	return (
		<React.Fragment>
			<li className="list-group-item">{props.chirp}</li>
		</React.Fragment>
	);
};
export default Chirp;
