import React from "react";
import Slider from "react-slick";
import Product from "../Product/Product.js";
import PropTypes from "prop-types";
import "./Vitrin.css";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// function importAll(r){
//   return r.keys().map(r);
// }
//
// const imgs = importAll(require.context("./Vtrimgs",false,/\.(png|jpe?g|svg)$/));


class Vitrin extends React.Component{
  constructor(props){
    super(props);

    this.state = {

      products: this.props.products,

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

  render(){
    let settings = this.state.settings;

    return(

      <div className="vitrin-container">
        <div className="vitrin">
            <Slider {...settings}>
                {
                  this.state.products.map((elem,indx) => {
                        return (
                              <Product
                                  productSrc={elem.prdcSrc}
                                  prdcName={elem.prdcName}
                                  prdcPrice="0"
                                  prdcId="0"
                                  prdcSizes={["large" , "xlarge" , "small"]}
                                  prdcColors={["brown","white" , "darkblue"]}
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
