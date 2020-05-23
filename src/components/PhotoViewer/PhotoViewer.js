import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";


// const importAll = (r) => {
//   return r.keys().map(r);
// }

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

  componentDidMount(){
    let productId = this.props.pId;
    const imgsSource = ("./products-details/" + productId);
    let pImgs = this.importAll(require.context(imgsSource,false , /\.(png|jpe?g|svg)$/));

    // read all information of products from products-details.json file or from database .
    

    console.log(pImgs);


  }

  render(){
    return (
      <Carousel>
      </Carousel>
    );
  }
}

PhotoViewer.propTypes = {
  pId: PropTypes.number
}

export default PhotoViewer;
