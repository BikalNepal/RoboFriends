import React from 'react';

const Card = ({id, name, email}) => {
	return(
		<div className='bg-light-green dib br5 pa3 ma2 grow bw2 shadow-5'>
		<img alt="robots" src={`https://robohash.org/${id}`} />
		<div className='tc'>
		<h2>{name}</h2>
		<p>{email}</p>
		</div>
		</div>

		)
}

export default Card;