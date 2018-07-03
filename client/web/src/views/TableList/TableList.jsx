import React, { Component } from "react";
import { Grid, Row, Col, Table,DropdownButton,MenuItem } from "react-bootstrap";

import Card from "../../components/Card/Card.jsx";
import { thArray, tdArray} from "../../variables/Variables.jsx";
import Button from "../../components/CustomButton/CustomButton.jsx";

class TableList extends Component {

  renderDropdownButton= (title,i) => {
    const jobStatus1 = ["Applied","InReview","Shortlisted","Scheduled","InVerification","Offered","Rejected"];
    return(
      <DropdownButton id={"exampleId"} title={title}>
          {Object.values(jobStatus1).map(key => <MenuItem eventKey={key} onSelect={() => this.title} >{key}</MenuItem>)}
        </DropdownButton>
    );
  } 

  onTargetSelect(key){
    
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Candidates applied"
                category="Candidate status can be updated here"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              console.log("Key ::"+key);
                              switch(key){
                                 case 2:return <td>{this.renderDropdownButton(prop, 0)}</td>
                                 case 4:
                                 case 5:return <td><Button bsStyle="info" fill  type="submit">
                                 {prop}
                             </Button></td>;     
                             }
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

            <Col md={12}>             
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  
 
}

export default TableList;
