import React from "react";
import { Col , Button , Form , FormGroup , Label , Input } from "reactstrap";
import "./LoginPage.css";


class LoginPage extends React.Component
{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="login-page">
        <Form >
            <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmail" className="mr-sm-2" >UserName: </Label>
                <Col sm={10}>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                </Col>
            </FormGroup>
            <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="examplePassword" className="mr-sm-2 form-label" >Password :  </Label>
              <Col sm={10}>
                  <Input type="password" name="password" id="examplePassword" placeholder="Password " />
              </Col>
           </FormGroup>
            <Button color="info" block>ورود</Button>
        </Form>
      </div>
    );
  }
}


export default LoginPage;
