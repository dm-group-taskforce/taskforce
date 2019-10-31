import React from "react";
import info from './carouselinfo';
import "./Carousel.scss";
import "./carouselinfo.scss"



class Carousel extends React.Component {

    constructor() {
        super();
        this.state = {
            index: 0
        }
    }

    // componentDidMount(){
    //     setTimeout(this.indexUp, 5000);
    // }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.index !== this.state.index) {
            // setTimeout(this.indexUp, 5000);
        }
    }

    indexUp = () => {
        if (this.state.index === info.length - 1) {
            this.setState({ index: 0 });
        }
        else {
            this.setState({ index: this.state.index + 1 })
        }
    }

    indexDown = () => {
        if (this.state.index === 0) {
            this.setState({ index: info.length - 1 })
        }
        else {
            this.setState({ index: this.state.index - 1 })
        }
    }

    render() {
        return (
            <div className="carousel">

                <div className="cards" style={{backgroundColor: `${info[this.state.index].color}`, borderColor: `${info[this.state.index].borderColor}` }}>

                    <div className="cardcontent">

                        <div className="cardwords">
                            <h1>{info[this.state.index].content}</h1>
                        </div>
                        <div className="bothbutts">

                            <div >
                                <button onClick={this.indexDown}
                                className="leftbutt">&lt;</button>
                            </div>

                            <div >
                                <button onClick={this.indexUp}
                                className="rightbutt">></button>
                            </div>


                        </div>

                            <div className="cardimg">
                                <img src={info[this.state.index].img} alt='card image' className={info[this.state.index].style}/>
                            </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Carousel;