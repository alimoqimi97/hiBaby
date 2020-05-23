import React from "react";
import "./IndcCard.css";
import {
  Card , CardImg, CardTitle, CardText,
  CardSubtitle, CardBody
} from "reactstrap";



class IndcCard extends React.Component
{
  constructor(props){
    super(props);

    this.state ={
      imgSrc: this.props.imgSrc,
      crdTitle: this.props.crdTitle,
      crdSubttl: this.props.crdSubttl,
      crdText: this.props.crdText,
      crdBtn: this.props.crdBtn,
    }
  }

  render(){

    return (
      <Card>
          <CardImg top className="indc-card-image" src={this.state.imgSrc} alt="Card img cap" />
          <CardBody>
              <CardTitle className="indc-title" >{this.state.crdTitle}</CardTitle>
              <CardSubtitle className="indc-subtitle" >{this.state.crdSubttl}</CardSubtitle>
              <CardText className="indc-description">{this.state.crdText}</CardText>
          </CardBody>
      </Card>

    );
  }
}

export default IndcCard;
