import React, {Component} from "react";

class Button extends Component {

    render() {
        const {children, onClick} = this.props
        return <div className={"button"}>
                <input type="button" value={children} onClick={onClick} />
            </div>

    }
}

export default Button;