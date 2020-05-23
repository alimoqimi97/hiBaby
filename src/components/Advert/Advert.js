import  React  from "react";
import "./Advert.css";
import  "bootstrap/dist/css/bootstrap.min.css";


class  Advert extends React.Component
{
	 render()
	 {
		 // console.log(this.props.top);
	 	 return (
	 	 		<div className="back-pic w-100 " style={
	 	 			 {
	 	 			 	  backgroundImage: "url(" + this.props.backgroundPic + ")",
						//   top: this.props.top
	 	 			 }
	 	 		}>
				</div>
		 );
	 }
}

export default  Advert
