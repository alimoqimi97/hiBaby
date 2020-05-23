import React from "react";
import { Button, Modal , ModalHeader , ModalBody , ModalFooter } from "reactstrap";
import PropTypes from "prop-types";
import "./ShopGuide.css";


class ShopGuide extends React.Component
{
  constructor(props){
    super(props);

    this.state = {
      // modal: this.props.show
    }
  }

  toggle = () => {
    this.props.changeModalStatus();
  }

  render(){

    let understand = "فهمیدم";

    return(
      <div>
          <Modal isOpen={this.props.show} toggle={this.toggle} className={this.props.className} >
              <ModalHeader toggle={this.toggle}>راهنمای خرید</ModalHeader>
              <ModalBody>جهت خرید کالا با شماره ی 09391563006 حمید تهرانی تماس حاصل نمایید.</ModalBody>
              <ModalFooter>
                  <Button color="success" onClick={this.toggle}>{understand}</Button>
                  <a href="/">Telegram</a>
                  <a href="#insta">Instagram</a>
              </ModalFooter>

          </Modal>

      </div>
    );
  }
}

ShopGuide.defaultProps = {
  show: false
}
ShopGuide.propTypes = {
  show: PropTypes.bool
}


export default ShopGuide;
