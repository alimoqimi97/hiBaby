import React from "react";
import { CardDeck } from "reactstrap";
import IndcCard from "../IndcCard/IndcCard.js";
import "./Introduction.css";
import Post from "./icons/post.png";
import Security from "./icons/scr.jpg";
import Quality from "./icons/qlty.png";
import Grnt from "./icons/gnt.svg";



class Introduction extends React.Component
{
  constructor(props){
    super(props);

    this.state = {
      cards: [{
        src: Post,
        title: "تحویل با پست"
      },
      {
        src: Security,
        title: "امنیت خاطر"
      },
      {
        src: Quality,
        title: "کیفیت بالا"
      },
      {
        src: Grnt,
        title: "ضمانت بازگشت کالا"
      }],
      // cards: ["تحویل با پست" , "امنیت خاطر" , "کیفیت بالا" , "ضمانت بازگشت کالا"],
    }
  }

  render(){
    return (
      <div className="introduction-container">
        <div className="introduction">
            <CardDeck>
              {
                this.state.cards.map((elem) => {
                  return (
                    <IndcCard
                      imgSrc={elem.src}
                      crdTitle={elem.title}
                      crdSubttl="card subtitle"
                      crdText="this is card description"
                      crdBtn="بیشتر"
                      />
                    );
                  })
              }
          </CardDeck>
        </div>
      </div>
    );
  }
}

export default Introduction;
