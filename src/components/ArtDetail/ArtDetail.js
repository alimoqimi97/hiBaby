import React from "react";
import { Button } from "reactstrap";
import ShopGuide from "../ShopGuide/ShopGuide.js";
import PhotoViewer from "../PhotoViewer/PhotoViewer.js";
import "./ArtDetail.css";


//          under tesitng part        //
// let id = "0";
// debugger;
// let obj = require("require-all")({
//   dirname: id,
//   filter: /\.(png|jpe?g|svg)$/ ,
//   resolve: function(){
//     console.log("images are loaded successfully!");
//
//   }
// });
//
// console.log(obj);
//          -------------------       //




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

  importAll(r){
    return r.keys().map(r);
  }

  render(){
      let btnLbl = "خرید";

      // gain the product information from out of component
      let info = this.props.artInfo;
      let wrng = null;

      //      preparing selected product for insert to PhotoViewer
      let id = info.id;
      let imagesSrc , filtered = [];

            //        if any product doesn't selected in initial statement, we shouldn't set value of variables
      if(id !== -1){
        imagesSrc = this.importAll(require.context("./otherImages",false,/\.(png|jpe?g|svg)$/));
        filtered = imagesSrc.filter((img) => {return img.includes((id.toString() + "_"))});
      }

          //    when a product is selected and we don't have any pictures of it we display this message(warning) = "عکسی برای کالا موجود نیست!"   //
      if(filtered.length == 0 && info.id !== -1){
        wrng = "تصویری برای کالا موجود نیست!";
      }

    return(
      <div className="art-detail">
        {/* <img src={info.img} className="art-detail-img" /> */}
        <PhotoViewer targetName={info.name} productsImages={filtered}/>
        <h2>{wrng}</h2>
        <h3>
            {
              info.name
            }
        </h3>
        <h4>
            {info.price}
        </h4>
        <p className="art-detail-sizes">
              {
                info.sizes
              }
        </p>
        <p>
          {
            info.colors
          }
        </p>
        <p>
            {
              info.description
            }
        </p>
        <Button color="info" onClick={this.handleSuggest} block>{btnLbl}</Button>
        <ShopGuide changeModalStatus={this.handleSuggest}  show={this.state.modal} />
      </div>
    );
  }
}

export default ArtDetail;
