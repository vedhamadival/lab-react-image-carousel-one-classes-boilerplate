import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        }
    }

    handleClick = (operation) =>{
        operation=="left"?this.state.count!=0?this.setState({count: this.state.count - 1}):
        this.setState({count:images.length-1}):this.state.count!=images.length-1?this.setState({count: this.state.count + 1}):
        this.setState({count:0})
} 

    render(){

        return(
            <div id="carousel">
                <div id="innerCarousel" style={{backgroundImage:`url(${images[this.state.count].img})`}}>

                    <div id="left-btn" onClick={()=> this.handleClick("left")}>
                        <ArrowBackIosIcon style={{color:"white" , fontSize:"30px"}}/>
                        </div>

                    <div id="centerText">
                        <h1>{images[this.state.count].title}</h1>
                        <p>{images[this.state.count].subtitle}</p>
                        </div>

                    <div id="right-btn" onClick={()=> this.handleClick("right")}>
                        <ArrowForwardIosIcon style={{color:"white" , fontSize:"30px"}}/>
                        </div>
                </div>
            </div>
        )
    }
}

export default Carousel;