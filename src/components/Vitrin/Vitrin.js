import React from "react";
import Slider from "react-slick";
import Product from "../Product/Product.js";
import PropTypes from "prop-types";
import "./Vitrin.css";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import fs from "fs";

//          under testing part          //
// import Products from "./Vtrimgs/ProductsDetails.js";
// import Products from "./ProductsDetails.js";

// console.log(Products);
//        ---------------------         //



// let Products =  [{
// 	productName: "shalvar1",
// 	prdcPrice: "100000",
// 	prdcId: "0",
// 	prdcSizes: ["xs" , "L"],
// 	prdcColors: ["brown","black"],
// 	prdcDescription: "این کالا دارای تخفیف 20% می باشد."
// },{
// 	productName: "shalvar2",
// 	prdcPrice: "200000",
// 	prdcId: "1",
// 	prdcSizes: ["L" , "xL"],
// 	prdcColors: ["yellow","white"],
// 	prdcDescription: "این کالا شامل تخفیف نمی باشد."
// },{
// 	productName: "shalvar3",
// 	prdcPrice: "300000",
// 	prdcId: "2",
// 	prdcSizes: ["small" , "medium"],
// 	prdcColors: ["green","darkblue"],
// 	prdcDescription: "10% تخفیف"
// }
// ];



function importAll(r){
  return r.keys().map(r);
}

const imgs = importAll(require.context("./Vtrimgs",false,/\.(png|jpe?g|svg)$/));


//          under testng part     //
// let fs = require("fs");


// console.log("fs.readFile = " + fs.readFile);
//
// fs.readFile("products-details.json",function(err,data){
//        if(err){throw err;}
//        let obj = JSON.parse(data);
//         console.log(obj);
//         this.setState({products: obj});
// });

//        ------------------      //



class Vitrin extends React.Component{
  constructor(props){
    super(props);

    this.state = {

      products: this.props.products,
      // products: Products,
      // products: [],

      settings: {
        dots: true,
        arrows: true,
        infinitive: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        // autoplay: true,

        responsive:[
          {
            breakpoint:1024,
            settings:{
              slidesToShow: 3,
              slidesToScroll: 3,
              infinitive: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings:{
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],

      }
    }
  }

  readProductsInfo(){
    // let fs = require("fs");

    // console.log("fs.readFile = " + fs.readFile);
    // fs.readFile("products-details.json",function(err,data){
	  //        if(err){throw err;}
	  //        let obj = JSON.parse(data);
    //        	console.log(obj);
    //         this.setState({products: obj});
    // });

  }

  render(){
    let settings = this.state.settings;
    let articles = this.state.products;

    // this.readProductsInfo();

    return(

      <div className="vitrin-container">
        <div className="vitrin">
            <Slider {...settings}>
                {
                  articles.map((elem,indx) => {
                        return (
                              <Product
                                  productSrc={elem.prdcSrc}
                                  prdcName={elem.prdcName}
                                  prdcPrice={elem.prdcPrice}
                                  prdcId={elem.prdcId}
                                  prdcSizes={elem.prdcSizes}
                                  prdcColors={elem.prdcColors}
                                  prdcDescription={elem.prdcDesc}
                                  setCurrent={this.props.allarticlesfnc}
                                  status={this.props.mode}
                                  />
                            );
                          }
                        )
                }
            </Slider>
        </div>
      </div>
    );
  }
}

Vitrin.propTypes ={
  allarticlesfnc: PropTypes.func,
  mode: PropTypes.string
}


export default Vitrin;
