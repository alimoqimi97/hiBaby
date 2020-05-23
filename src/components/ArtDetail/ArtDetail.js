import React from "react";
import { Button } from "reactstrap";
import ShopGuide from "../ShopGuide/ShopGuide.js";
import "./ArtDetail.css";



class ArtDetail extends React.Component
{
  constructor(props){
    super(props);

    this.state = {
      articleInfo: this.props.artInfo,
      modal: false,
    }
  }

  handleSuggest = () => {
    this.setState({modal: !(this.state.modal)});
  }

  render(){
      let btnLbl = "خرید";
      let info = this.props.artInfo;


      console.log(info);

    return(
      <div className="art-detail">
        <img src={info.img} className="art-detail-img"/>
        <h3>{info.name}</h3>
        <h4>{info.price}</h4>
        <p className="art-detail-sizes">{info.sizes}</p>
        <p>{info.colors}</p>
        <p>{info.description}</p>
        <Button color="info" onClick={this.handleSuggest} block>{btnLbl}</Button>
        <ShopGuide changeModalStatus={this.handleSuggest}  show={this.state.modal} />
      </div>
    );
  }
}

export default ArtDetail;
