import React, {Component} from "react";
import GroupImage from "../../assets/LoginIcon/icon-group name.svg"
import PasswordImage from "../../assets/LoginIcon/icon-password.png"
import Logo from "../../assets/LoginIcon/Logo Devcamp (putih).png"
import TextBox from "../../components/TextBox/TextBox";
import Card from "../../components/Card/Index";
import Button from "../../components/Button/Button";

class LoginPage extends Component{
    state = {
        groupName : "",
        password : ""
    }

    onChange = (e) =>{
        const target = e.target
        this.setState({[target.name] : target.value})
    }

    handleSubmitForm = (e) =>{
        e.preventDefault();
        alert("yey")
    }

    render() {
        const {groupName,password} = this.state
        return <div className={"login-page d-flex justify-content-center align-items-center flex-column container-fluid"}>
            <img src={Logo} alt="Logo"/>
            <span>increase your potential and productivity in code</span>

            <Card class={"d-flex flex-column"}>
                <h2 className={"text-center mb-3"}>Login</h2>
                <TextBox
                    placeholder="Group Name"
                    name={"groupName"}
                    value={groupName}
                    type={"text"}
                    onChange={this.onChange}
                    icon = {GroupImage}
                    alt = {"Group Image"}
                ></TextBox>
                <TextBox
                    placeholder="Password"
                    name={"password"}
                    type={"password"}
                    value={password}
                    onChange={this.onChange}
                    icon = {PasswordImage}
                    alt = {"Password Image"}
                ></TextBox>
                <span className="align-self-end font-size-small">Forgot password?</span>
                <Button onClick={this.handleSubmitForm}>Login</Button>
                <span className="text-center"><span className="color-primary">Not registered?</span> Click here!</span>
            </Card>

        </div>
    }
}
export  default LoginPage


