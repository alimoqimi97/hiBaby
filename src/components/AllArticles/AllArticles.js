import React from "react";
import Vitrin from "../Vitrin/Vitrin.js";
import ArtDetail from "../ArtDetail/ArtDetail.js";
import "./AllArticles.css";



function importAll(r){
  return r.keys().map(r);
}

const imgs = importAll(require.context("./allproducts",false,/\.(png|jpe?g|svg)$/));


class AllArticles extends React.Component
{
  constructor(props){
    super(props);

    this.state ={
      currentArtc: {
        img: "",
        name: "کالایی جهت مشاهده ی با جزییات بیشتر انتخاب نشده!",
        price: "",
        id: 0,
        sizes: [""],
        colors: [],
        description: ""
      },
    }
  }


  setCurrentProduct = (prdcInfo) => {

    this.setState({currentArtc: prdcInfo});
  }

  render(){

    let prdcs = imgs.map((elem, indx) => {
      return ({
        prdcSrc: elem,
        prdcName: indx + "نام محصول " ,
        prdcDesc: "توضیحات مخصول " + indx
      });
    });

    debugger;

    return(
      <div>
        <Vitrin products={prdcs} allarticlesfnc={this.setCurrentProduct} mode="allarticles" />
        <ArtDetail artInfo={this.state.currentArtc} />
      </div>
    );
  }
}

export default AllArticles;
