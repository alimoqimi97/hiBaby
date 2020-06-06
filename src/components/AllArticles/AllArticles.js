import React from "react";
import Vitrin from "../Vitrin/Vitrin.js";
import ArtDetail from "../ArtDetail/ArtDetail.js";
import Products from "../Vitrin/ProductsDetails.js";
import "./AllArticles.css";

function importAll(r){
  return r.keys().map(r);
}

const imgs = importAll(require.context("./allproducts",false,/\.(png|jpe?g|svg)$/));



console.log("products length = " + Products.length);

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


class AllArticles extends React.Component
{
  constructor(props){
    super(props);

    this.state ={
      allProducts: Products,
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

    let articles = this.state.allProducts;

    console.log(articles);


    let prdcs = [];

    for(let i = 0 ; i < imgs.length ; i++){
      prdcs.push({
        prdcSrc: imgs[i],
        prdcName: articles[i].productName,
        prdcDesc: articles[i].prdcDescription,
        prdcPrice: articles[i].prdcPrice,
        prdcId: articles[i].prdcId,
        prdcColors: articles[i].prdcColors,
        prdcSizes: articles[i].prdcSizes
      });
    }

    // console.log(prdcs);

    // let prdcs = imgs.map((elem,indx) => {
    //
    //   return ({
    //     prdcSrc: elem,
    //     prdcName: articles[indx].productName,
    //     prdcDesc: articles[0].prdcDescription,
    //     prdcPrice: articles[0].prdcPrice,
    //     prdcId: articles[0].prdcId,
    //     prdcColors: articles[0].prdcColors,
    //     prdcSizes: articles[0].prdcSizes
    //   });
    // });

    // console.log(prdcs);

    // let prdcs = imgs.map((elem, indx) => {
    //   return ({
    //     prdcSrc: elem,
    //     // productName: " ",
    //     // prdcDesc: " "
    //     prdcName: indx + "نام محصول " ,
    //     prdcDesc: "توضیحات مخصول " + indx
    //   });
    // });



    // let prdcs = imgs.map((elem, indx) => {
    //   return ({
    //     prdcSrc: elem,
    //     prdcName: Products[indx].productName,
    //     prdcDesc: Products[indx].prdcDescription
    //   });
    // });

    // let prdcs;

    return(
      <div>
        <Vitrin products={prdcs} allarticlesfnc={this.setCurrentProduct} mode="allarticles" />
        <ArtDetail artInfo={this.state.currentArtc} />
      </div>
    );
  }
}

export default AllArticles;
