import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import $ from "jquery";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./PhotoViewer.css";


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
      // productId: this.props.pId,
      // productImages: []
    }

  }

  importAll = (r) => {
    return r.keys().map(r);
  }

  componentDidMount(){
    // let elem = $(".carousel-root");
    //
    // console.log(elem);

    // elem.style.cssText += "width: 50%; margin-left: 22%;";
  }

  render(){

    let images = this.props.productsImages;
    let name = this.props.targetName;

    return (
      <div className="photo-viewer">
          <Carousel>
            {
              images.map((elem) =>{
                return (
                  <div>
                      <img src={elem} />
                      <p className="legend">{name}</p>
                  </div>
                );
              })
            }
          </Carousel>
      </div>
    );
  }
}

PhotoViewer.propTypes = {
  // pId: PropTypes.number
  productsImages: PropTypes.array,
  targetName: PropTypes.string
}

PhotoViewer.defaultProps = {
  productsImages: [],
  targetName: ""
}

export default PhotoViewer;
