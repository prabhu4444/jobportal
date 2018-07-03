import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';


const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
const borderBtm = {borderBottom:'1px solid #ddd'};
const paddingTop = {padding:'10px 0px'};
const whiteSpace = {whiteSpace:'normal'};

class ControlledTabs extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 1
    };
  }

  handleSelect(key) {   
    this.setState({ key });
  }
  render() {
    return (
      <Tabs
        activeKey={this.state.key}
        onSelect={this.handleSelect}
        id="controlled-tab-example"
      >
        <Tab eventKey={1} title="View Jobs">
        <p>View all jobs:</p>
          {content}
        </Tab>
        <Tab eventKey={2} title="Applied Jobs">
          <p> Applied Jobs:</p>
          {appliedContent}
        </Tab>
        <Tab eventKey={3} title="Shortlisted" disabled>
          Tab 3 content
        </Tab>
      </Tabs>
    );
  }
}

//view list of jobs
const posts = [
  {jobId: 1, jobTitle: 'Front End / UI Developer - Lead',jobCompany:'Verizon', jobDesc: 'Must have experience with Angular, React, Node JS. Albin Engineering Services'},
  {jobId: 2, jobTitle: 'Embedded Developer',jobCompany:'Verizon', jobDesc: 'Front-end development skills with React JS, Angular.'},
  {jobId: 3, jobTitle: 'Senior Java Developer',jobCompany:'Verizon', jobDesc: 'Java, javascript, and React are high on our list. (Other notables: Python,Ruby, Scala, .NET, Clojure.)'},
  {jobId: 4, jobTitle: 'Database Developer – Senior Consultant',jobCompany:'Verizon', jobDesc: 'Core responsibilities include disaster recovery, performance analysis and tuning and database maintenance.'},
];

const appliedPosts = [
  {jobId: 1, jobTitle: 'Front End / UI Developer - Lead',jobCompany:'Verizon', jobDesc: 'Must have experience with Angular, React, Node JS. Albin Engineering Services'}  
];

//View Jobs
const content = posts.map((post) =>
    <div key={post.jobId} className="col-md-12" style={borderBtm}>
    <div className="col-md-8">
      <h4 className="strong btn-link">{post.jobTitle}</h4>
      <div>{post.jobCompany}</div>
      <p>{post.jobDesc}</p></div>
      <div className="col-md-4" style={paddingTop}>
        <Button className="col-md-6" bsStyle="primary" style={whiteSpace}>
            Apply for job
        </Button>
      </div>
    </div>
  );

  //Applied Jobs
  const appliedContent = appliedPosts.map((post) =>
    <div key={post.jobId} className="col-md-12" style={borderBtm}>
    <div className="col-md-8">
      <h4 className="strong btn-link">{post.jobTitle}</h4>
      <div>{post.jobCompany}</div>
      <p>{post.jobDesc}</p></div>
    </div>
  );
class ViewJobs extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="col-md-12">
          <p className="App-intro col-md-12"> All the jobs list, Applied jobs can be shown:</p>
                  
          <div><ControlledTabs/></div>
        </div>          
      </div>
    );
  }
}

export default ViewJobs;
