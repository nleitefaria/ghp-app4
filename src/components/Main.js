import React, { Component } from 'react';
import { HashRouter, Route, NavLink } from "react-router-dom";

import { Container, Row, Col } from 'reactstrap';
import Header from './Header';
import Home from './Home';
import Countries from './countries/Countries';
import Departments from './departments/Departments';
import Employees from './employees/Employees';
import Jobs from './jobs/Jobs';

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
	            						<NavLink to="/home"><b>Home</b></NavLink> | <NavLink to="/countries"><b>Countries</b></NavLink> | <NavLink to="/departments"><b>Departments</b></NavLink> | <NavLink to="/employees"><b>Employees</b></NavLink> | <NavLink to="/jobs"><b>Jobs</b></NavLink>
										<div className="content">
	            								<Route exact path="/home" component={Home}/>
	            								<Route exact path="/countries" component={Countries}/>
												<Route exact path="/departments" component={Departments}/>
												<Route exact path="/employees" component={Employees}/>
                                                <Route exact path="/jobs" component={Jobs}/>
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
