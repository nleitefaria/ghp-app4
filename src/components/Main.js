import React, { Component } from 'react';
import { HashRouter, Route, NavLink } from "react-router-dom";

import { Container, Row, Col } from 'reactstrap';
import Header from './Header';
import Home from './Home';
import Countries from './countries/Countries';

class Main extends Component
{
	render() {
	    return (
		<HashRouter>
	            	<div>
	            		<div>
	            			<Container>
	            				<Row>
	            					<Col>
	            						<Header></Header>														
	            						<NavLink to="/home"><b>Home</b></NavLink> | <NavLink to="/countries"><b>Countries</b></NavLink> 
	            							<div className="content">
	            								<Route exact path="/home" component={Home}/>
	            								<Route exact path="/countries" component={Countries}/>		
	            							</div>
							</Col>
	            				</Row>
	            			</Container>
	            		</div>
	            	</div>
	    	</HashRouter>
	    );
	}
}

export default Main;
