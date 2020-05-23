import React from 'react';
import {
  Collapse,  Navbar,  NavbarToggler,  NavbarBrand,
  Nav,  NavItem,  NavLink,  UncontrolledDropdown,
  DropdownToggle,  DropdownItem,  DropdownMenu,
  NavbarText
} from "reactstrap";
import { BrowserRouter as Router , Switch , Route , Link } from "react-router-dom";
import Home from "../Home/Home.js";
import LoginPage from "../LoginPage/LoginPage.js";
import AllArticles from "../AllArticles/AllArticles.js";
import "./ToolBar.css";
import "bootstrap";




class ToolBar extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        isOpen: false
      }

    }

    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render(){
      return(
        <Router>
          <div className="ToolBar">
              <Navbar color="light" light expand="md">
                  <NavbarBrand href="/">OnlineShopLogo</NavbarBrand>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                      <Nav className="mr-auto" navbar >
                        <NavItem >
                              <NavLink><Link to="/" className="btn btn-link">خانه</Link></NavLink>
                        </NavItem>
                        <NavItem>
                              <NavLink><Link to="/suggest" className="btn btn-link">سفارش</Link></NavLink>
                        </NavItem>
                        <NavItem>
                              <NavLink><Link to="/login" className="btn btn-link">ورود</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/allproducts" className="btn btn-link">همه اجناس</Link></NavLink>
                        </NavItem>
                        <UncontrolledDropdown className="btn btn-link" nav inNavbar>
                            <DropdownToggle nav caret> دسته بندی </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>پسرانه</DropdownItem>
                                <DropdownItem>دخترانه</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>تخفیف ها</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                      <NavbarText>[OnlineShopName]</NavbarText>
                  </Collapse>
              </Navbar>


              <Switch>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/allproducts">
                    <AllArticles />
                </Route>
                <Route path="/" >
                    <Home />
                </Route >
              </Switch>

          </div>
        </Router>
      );
    }
}


export default ToolBar;
