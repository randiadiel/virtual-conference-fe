import React, {Component} from "react";

class Card extends Component{

    render() {
        return (
            <div className={"card-custom " + this.props.class}>
                {this.props.children}
            </div>
        );
    }
}

export default Card;