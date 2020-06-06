import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import PropTypes from 'prop-types';
import styles from './BillBoard.module.css';
import "bootstrap";


function importAll(r){
  return r.keys().map(r);
}

const Images = importAll(require.context('./images',false,/\.(png|jpe?g|svg)$/));



class BillBoard extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      Items: Images.map((elem,index) => {
        return {
          src: elem,
          altText: ("Slide" + index),
          caption: "Slide" + index,
          header: "Slide" + index + " Header",
          key: index
        };
      }),
      activeIndex: 0,
      animating: false
    }

    this.slides =  this.state.Items.map((item) => {
     return (
       <CarouselItem
        onExiting={() => this.setState({animating: true})}
        onExited={() => this.setState({animating: false})}
        key={item.src}
         >
         <img src={item.src} style={{height: "100%"}} alt={item.altText} />
         <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
       </CarouselItem>
     );
   });


    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
  }

  next = () => {
    if(this.state.animating){
      return;
    }

    const nextIndex = (this.state.activeIndex === this.state.Items.length - 1) ?  0 : (this.state.activeIndex + 1);
    this.setState({activeIndex: nextIndex});
  }

  previous = () => {
    if(this.state.animating) {return;}

    const nextIndex = (this.state.activeIndex === 0) ? (this.state.Items.length - 1) : (this.state.activeIndex - 1);
    this.setState({activeIndex : nextIndex});
  }

  goToIndex = (newIndex) => {
    if(this.state.animating) { return ;}
    this.setState({activeIndex : newIndex});
  }


  render(){
    return(
      <Carousel
       activeIndex={this.state.activeIndex}
       next={this.next}
       previous={this.previous}
       >
          <CarouselIndicators items={this.state.Items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
          {this.slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="next" onClickHandler={this.next} />
       </Carousel>
     );
  }

}

export default BillBoard;
