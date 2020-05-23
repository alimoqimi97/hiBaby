import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BillBoard from "../BillBoard/BillBoard.js";
import ShopGuide from "../ShopGuide/ShopGuide.js";
// import ToolBar from "../ToolBar/ToolBar.js";
import Vitrin from "../Vitrin/Vitrin.js";
import Introduction from "../Introduction/Introduction.js";
import Advert from "../Advert/Advert.js";
// import LoginPage from "../LoginPage/LoginPage.js";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";
import mario from "../Advert/images/mario.png";

function importAll(r){
  return r.keys().map(r);
}

const imgs = importAll(require.context("./products-images",false,/\.(png|jpe?g|svg)$/));

class Home extends React.Component
{
  constructor(props){
    super(props);

    this.state = {
      modalIsOpen: false
    }
  }

  toggleModal = () => {
    this.setState({
      modalIsOpen: !(this.state.modalIsOpen)
    });
  }

  render(){

    let products = imgs.map((elem, indx) => {
      return ({
        prdcSrc: elem,
        prdcName: indx + "نام محصول " ,
        prdcDesc: "توضیحات مخصول " + indx
      });
    });

    let columns = [ {
      title: "title",
      url: "url",
      description: "description",
      openExternal: true
    },
    {
      title: "title 2",
      url: "url 2",
      description: "description 2",
      openExternal: true
    }
  ];

    return (
      <div style={{width: "100%" , height: "100%" , backgroundColor: "white"}}>
        <BillBoard />
        <Vitrin products={products} allarticlesfnc={this.toggleModal} />
        <ShopGuide show={this.state.modalIsOpen} changeModalStatus={this.toggleModal} />
        <Introduction />
        <Advert backgroundPic={mario} />
        <Footer columns={columns} bottom="Made by Ali Moghimi" />
      </div>
    );
  }
}

export default Home;
