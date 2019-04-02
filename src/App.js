import React, { Component } from 'react';
import './App.css';
import ItemList from './ItemList';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Cart from './Cart';
import db from './items.json';


class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<Switch>
					<Route exact path="/"
						render={() => <ItemList items={db.items} />} />
					<Route exact path="/cart/"
						render={() => <Cart items={db.items}/>} />
					<Redirect to="/" />
				</Switch>
			</div>
		);
	}
}

export default App;
