import React, { Component } from "react";
import ModalNim from "../../assets/LoginIcon/modal-nim.svg";
import ModalMajor from "../../assets/LoginIcon/modal-major.svg";
import TextBox from "../../components/TextBox/TextBox";
import Card from "../../components/Card/Index";
import Button from "../../components/Button/Button";
import Api from "../../api/Api";
import css from "../../styles/index.scss";

class InputNim extends Component {
  state = {
    NIM: "",
    jurusan: "",
    error: "",
  };
  onChange = (e) => {
    const target = e.target;
    this.setState({ [target.name]: target.value });
  };

  handleSubmitForm = async (e) => {
    e.preventDefault();
    const { NIM, jurusan } = this.state;
    if (NIM.length !== 10) this.setState({ error: "NIM Lenght Must Be 10" });
    else if (jurusan.length < 4)
      this.setState({ error: "Input a valid Major" });
    let form_data = new FormData();
    form_data.append("NIM", NIM);
    form_data.append("jurusan", jurusan);
    const promise = await Api.handleFormDataPost("/auth/NIM", form_data, true);
    const { status } = promise;
    if (status === 200) this.props.onSuccess(NIM, jurusan);
  };

  render() {
    const { NIM, jurusan } = this.state;
    return (
      <div className={`${css["input-nim"]}`}>
        <Card
          class={`${css["d-flex"]} ${css["flex-column"]} ${css["justify-content-center"]} ${css["align-items-center"]}`}
        >
          <form onSubmit={this.handleSubmitForm}>
            <TextBox
              placeholder="NIM"
              name={"NIM"}
              type={"text"}
              value={NIM}
              onChange={this.onChange}
              icon={ModalNim}
              alt={"NIM Image"}
            ></TextBox>
            <TextBox
              placeholder="Major"
              name={"jurusan"}
              type={"text"}
              value={jurusan}
              onChange={this.onChange}
              icon={ModalMajor}
              alt={"Major Image"}
            ></TextBox>
            <input style={{ display: "none" }} type="submit" />
            <div className={`${css["p-1"]}`}></div>
            <Button onClick={this.handleSubmitForm}>Submit</Button>
          </form>
        </Card>
      </div>
    );
  }
}

export default InputNim;
