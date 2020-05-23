import React from "react";
import ArtDetail from "../ArtDetail/ArtDetail.js";
import { BrowserRouter as Router , Link , Route , Switch  } from "react-router-dom";
import { Button , ButtonGroup } from "reactstrap";
// import { matchPatch } from "react-router";
import "./Product.css";



class Product extends React.Component
{
  constructor(props){
    super(props);

    this.state = {
      imgSrc: this.props.productSrc,
      prdcName: this.props.prdcName,
      prdcPrice: this.props.prdcPrice + " تومان",
      prdcId: this.props.prdcId,
      prdcSizes: this.props.prdcSizes,
      prdcColors: this.props.prdcColors,
      prdcDescription: this.props.prdcDescription,
    }
  }

  handleClick = () => {

    let article = {
      img: this.state.imgSrc,
      name: this.state.prdcName,
      price: this.state.prdcPrice,
      id: this.state.prdcId,
      sizes: this.state.prdcSizes,
      colors: this.state.prdcColors,
      description: this.state.prdcDescription
    }

    this.props.setCurrent(article);

  }

  render(){

    // let match = matchPatch("/artdetail",{
    //   path: "artdetail",
    //   exact: true,
    //   strict: false
    // });
    //
    // console.log(match);

    // let article = {
    //   img: this.state.imgSrc,
    //   name: this.state.prdcName,
    //   sizes: this.state.prdcDescription
    // }

    let seeDetails = null;
    let btnTxt = "خرید";

    if(this.props.status === "home"){
        seeDetails = <Link to="/allproducts" className="btn btn-info">مشاهده جزییات</Link>
    }

    if(this.props.status === "allarticles"){
      // btnTxt = "جزییات";

    }



    return(
      <div className="products">
          <img className="prdc-img" src={this.state.imgSrc} alt="productImage" />
          <h4>{this.state.prdcName}</h4>
          <p>{this.state.prdcP}</p>
          <ButtonGroup>
          <Button onClick={this.handleClick} color="info" >{btnTxt}</Button>
            {
              seeDetails
            }
          </ButtonGroup>
      </div>


    );
  }
}


Product.defaultProps = {
  status: "home"
}

export default Product;
