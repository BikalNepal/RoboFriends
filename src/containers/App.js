import React ,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	onSearchChange = (event) => {

		this.setState({searchfield: event.target.value})
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(blabla => this.setState({robots: blabla}));
	}


	render() {
		const {robots, searchfield} = this.state;

		const filteredRobots = robots.filter( robot => {
			return robot.name.toLowerCase().includes(searchfield);
		})

		return !robots.length ?
		<h1>Loading</h1> :

		(
			<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox onSearch={this.onSearchChange}/>
			<Scroll>
			<CardList robots={filteredRobots} />
			</Scroll>
			</div>
			)
	}
}

export default App;
