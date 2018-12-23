import React, { Component } from 'react';
import axios from 'axios';

import { Breadcrumb, BreadcrumbItem, Card, Row, Col } from 'reactstrap';
import { PagingState, CustomPaging} from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, PagingPanel} from '@devexpress/dx-react-grid-bootstrap4';
import Loading from '../Loading';

const apiURL = 'https://sec-os-app4.193b.starter-ca-central-1.openshiftapps.com';

var divLoading =
{
	'float': 'left', 'width': '300px', 'paddingTop': '0px', 'paddingLeft': '10px'
};

class Jobs extends Component
{
	constructor(props)
	{
		super(props);
        this.state = {
        		results: [],
        		columns: [
        			{ name: 'jobId', title: 'Job Id'},
        			{ name: 'jobTitle', title: 'Job Title' },
					{ name: 'minSalary', title: 'Min Salary' },
					{ name: 'maxSalary', title: 'Max Salary' }
        		],
        		rows: [],
        		totalCount: 0,
        		currentPage: 0,
        		loading: true,
			    modal: false
        };

        this.changeCurrentPage = this.changeCurrentPage.bind(this);
	}

	componentDidMount()
	{
		this.loadData();
	}

	componentDidUpdate()
	{
		this.loadData();
	}

	changeCurrentPage(currentPage)
	{
		this.setState({
			loading: true,
			currentPage: currentPage,
		});
	}

	queryString()
	{
			const { currentPage } = this.state;
			var cPage = Number(currentPage) + 1;
			return apiURL.concat('/jobs/').concat(cPage).concat('/10');
	}

	loadData()
	{
		const queryString = this.queryString();
		if (queryString === this.lastQuery) {
		    return;
		}
		
		axios.get(queryString).then(res =>
	    {
	        const rd = res.data;
	        this.setState({
		        rows: rd.content,
		        totalCount: rd.totalElements,
		        loading: false,
		    }) 
	      })
	 }
	  	

		render()
		{
			const { rows, columns, pageSize, currentPage, totalCount , loading } = this.state;
			return (
			      <div>
			      	<br></br>
			      	<Breadcrumb>
		      			<BreadcrumbItem><a href="#/" rel="noopener noreferrer">Home</a></BreadcrumbItem>
		      			<BreadcrumbItem active>Jobs</BreadcrumbItem>
		      		</Breadcrumb>
		      	  	<br></br>
								<Row>
                    <Col xs="6"><div style={divLoading}>{loading && <Loading />}</div></Col>
                </Row>
			      	<Card style={{ position: 'relative' }}>
  	        			<Grid rows={rows} columns={columns}>
  	        				<PagingState currentPage={currentPage} onCurrentPageChange={this.changeCurrentPage} pageSize={pageSize} />
  	        					<CustomPaging totalCount={totalCount} />
  	          						<Table/>
  	          							<TableHeaderRow />
  	          								<PagingPanel />
  	          		</Grid>
  	          		</Card>
			      </div>
			    );
		}
}

export default Jobs;
