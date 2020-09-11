import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import TitleCard from "../../components/TitleCard/TitleCard";
import Button from "../../components/Button/Button";
import FileUpload from "../../components/FileUpload/FileUpload";
import AuthServices from "../../auth/AuthServices";
import Api from "../../api/Api";
import payment_qr from "../../assets/Payment/payment_qr.jpg";
import Loader from "../../components/Loader/Loader";
import PaymentVerified from "./PaymentVerified";
import css from "../../styles/index.scss";

class PaymentPage extends Component {
  state = {
    file: { size: 0, name: "Choose File" },
    error: "",
    payment: {
      image: "",
      name: "",
      status: 0,
    },
    flazz: "",
    id: 0,
    loader: false,
    alert: null,
    copy: null,
  };
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }
  componentDidMount() {
    const user = AuthServices.getUserInfo().user;
    if (user.payment_id === null) {
      this.setState({ flazz: user.Binusian.flazz, id: user.id });
    } else {
      const payment = {
        image: user.Payment.image,
        name: user.Payment.name,
        status: user.Payment.status,
      };
      this.setState({
        payment,
        flazz: user.Binusian.flazz,
        id: user.id,
        name: user.name,
      });
    }
  }
  handleFileChange = () => {
    this.setState({ file: this.fileInput.current.files[0] });
  };
  handleFileSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loader: true });
    if (this.state.file.size === 0)
      this.setState({ error: "Please Upload a File" });
    else {
      let form_data = new FormData();
      form_data.append("image", this.state.file, this.state.file.name);
      const promise = await Api.handleFormDataPost(
        "/auth/payment",
        form_data,
        true
      );

      if (promise.status === 201) {
        this.setState({
          file: { size: 0, name: "Choose File" },
          error: "",
          loader: false,
        });
        Api.refresh();
        const payment = {
          image: promise.data[0].image,
          name: promise.data[0].name,
          status: promise.data[0].status,
        };
        this.setState({
          payment: payment,
          loader: false,
          alert: "Uploaded Successfully",
        });
      }
    }
  };
  render() {
    const {
      file,
      error,
      payment,
      flazz,
      loader,
      alert,
      copy,
      name,
    } = this.state;
    if (payment != null && payment.status === 1) {
      return <PaymentVerified payment={payment} name={name}></PaymentVerified>;
    }
    return (
      <div className={`${css["payment-page"]}`}>
        <TitleCard title="Payment">
          <div className={`${css["ticket-card"]}`}>
            <h2>Order Details</h2>
            <div className={`${css["title"]}`}>
              <span>Item</span>
              <span>Amount</span>
            </div>
            <div className={`${css["ticket"]}`}>
              <h2 className={`${css["text-left"]}`}>3 Day Pass</h2>
              <span>
                <span>Rp</span>
                <h2>{flazz === "" || flazz === null ? "50.000" : "35.000"}</h2>
              </span>
            </div>
            <hr className={`${css["white-lines"]}`} />
            <div className={`${css["orderid"]}`}>
              <span>Order ID</span>
              <span>VC-BNCC-4357</span>
            </div>
          </div>
          <h2 className={`${css["header"]}`}>Payment Method Instructions</h2>
          <ol className={`${css["outer-list"]}`}>
            <li>
              Periode Pembayaran : 9 Agustus 2020 hingga 9 September 2020 jam
              21.00
            </li>
            <li>
              Lakukan pembayaran biaya pendaftaran melalui QR code atau ke nomor
              rekening berikut:
            </li>
            <div>
              <div>
                Nomor Rekening :{" "}
                <span
                  className="user-select-all"
                  onClick={() => {
                    document.execCommand("copy");
                    this.setState({ copy: "Copied!" });
                    setTimeout(() => {
                      this.setState({ copy: null });
                    }, 2000);
                  }}
                  data-tip="Click to Copy"
                >
                  {copy !== null ? (
                    <span className={`${css["badge"]} ${css["badge-success"]}`}>
                      {copy}
                    </span>
                  ) : (
                    "5271675071"
                  )}
                </span>
                <ReactTooltip></ReactTooltip>
              </div>
              <div>Bank : BCA</div>
              <div>Atas Nama : ANNISA VINIDYA LARASATI</div>
              <img
                className={`${css["qr-image"]} ${css["w-25"]}`}
                src={payment_qr}
                alt="QRCODE - BCA"
              />
            </div>
            <li>
              Peserta mengunggah file bukti pembayaran dengan batas maksimum 5
              mb dalam bentuk .JPG, .JPEG, .PNG, atau .PDF.
            </li>
            <li>
              Calon peserta yang telah mengupload bukti pembayaran akan memiliki
              status Pending dan akan diverifikasi oleh panitia dalam rentang
              waktu 24 jam. Apabila calon peserta belum diverifikasi dalam
              rentang waktu tersebut, calon peserta dapat menghubungi panitia
              melalui Contact Person.
            </li>
            <li>
              Pendaftar yang telah terverifikasi akan secara resmi terdaftar
              menjadi calon peserta Virtual Conference.
            </li>
            <li>
              Setelah terverifikasi, peserta dapat melihat link ke Virtual
              Conference di Dashboard pada H-1 Virtual Conference.
            </li>
          </ol>

          <h2 className={`${css["header"]}`}>Upload Payment Receipt</h2>
          <div className={`${css["w-100"]}`}>
            <div className={`${css["row"]}`}>
              <div className={`${css["col-lg-6"]} ${css["col-xl-4"]}`}>
                {error !== "" ? (
                  <div
                    className={`${css["alert"]} ${css["alert-danger"]}`}
                    role="alert"
                  >
                    {error}
                  </div>
                ) : (
                  <div></div>
                )}
                {alert !== null && (
                  <div
                    className={`${css["alert"]} ${css["alert-success"]}`}
                    role="alert"
                  >
                    {alert}
                  </div>
                )}
                <FileUpload
                  onChange={this.handleFileChange}
                  reference={this.fileInput}
                  label={file.name}
                  id="payment_image"
                ></FileUpload>
              </div>
            </div>
            <div className={`${css["file-status"]}`}>
              <div>Size: {file.size} B</div>
              {loader === true ? (
                <Loader></Loader>
              ) : (
                <Button onClick={this.handleFileSubmit}>Upload</Button>
              )}

              {payment.image === "" ? (
                "Not yet Uploaded"
              ) : (
                <div>
                  <div>
                    Last Uploaded File :{" "}
                    <a
                      href={`https://virtualconference-app.s3-ap-southeast-1.amazonaws.com/${payment.image}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {payment.image.split("/")[1]}
                    </a>
                  </div>
                  <div>
                    {payment.status === 0
                      ? "Your Payment is Being Processed"
                      : "Verified"}
                  </div>
                </div>
              )}
            </div>
          </div>
        </TitleCard>
      </div>
    );
  }
}

export default PaymentPage;
