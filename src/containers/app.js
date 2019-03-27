import React , {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/searchbox';
import Scroll from '../Components/scroll.js';
import './app.css';

class app extends Component {
	constructor(){
		super()
		this.state ={
			robots: [] ,
			searchfield:''
		}
	}
onSearchChange = (event)=> {
	this.setState({searchfield:event.target.value})
}	
componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => this.setState({robots:users}) 
);}
render() {
	const filteredrobots = this.state.robots.filter(robot =>{
	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())	
	})
	if( this.state.robots.length ===  0){
	return <h1> Loading </h1>
	}
	else {
return (
	<div className = 'tc'>
	<h1 className='f1 pa4 ttu tracked-mega mt0'> RoboFriends </h1>
	<SearchBox searchChange = {this.onSearchChange}/>
	<Scroll>
<CardList robots ={filteredrobots}/>
</Scroll>
</div>
)
}
}
}
export default app;