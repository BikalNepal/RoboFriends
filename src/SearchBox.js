import React from 'react';
import CardList from './CardList';

const SearchBox = ({onSearch}) => {
	return(
		<div className='pa2'>
		<input 
		className='pa3 ba b--green bg-lightest-blue'
		type='search' 
		placeholder='Search for Robot' 
		onChange = {onSearch}
		/>
		</div>

		)
}

export default SearchBox;

