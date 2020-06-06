import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


// let json = require("./products-details/products-details.json");
// console.log(json);


// debugger;
// let pimgs = require('require-all')({
//   dirname: "./products-details./0",
//   filter: /\.(png|jpe?g|svg)$/
// });

// console.log("pimgs = " + pimgs);

class PhotoViewer extends React.Component
{
  constructor(props){
    super(props);

    this.state = {
      productId: this.props.pId,
      productImages: []
    }

  }

  importAll = (r) => {
    return r.keys().map(r);
  }

  render(){

    return (
      <Carousel>
          {
            this.state.productImages.map((elem) =>{
              return (
                <div>
                    <img src={elem} />
                    <p className="legend">legend</p>
                </div>
              );
            })
          }
      </Carousel>
    );
  }
}

PhotoViewer.propTypes = {
  pId: PropTypes.number
}

export default PhotoViewer;
