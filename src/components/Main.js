import React, { Component } from 'react';
import { HashRouter} from "react-router-dom";

import { Container, Row, Col } from 'reactstrap';
import Header from './Header';

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
	            						<div className="content">
	            							os-app4
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
