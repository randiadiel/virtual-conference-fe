import React, { Component } from "react";
import TitleCard from "../../components/TitleCard/TitleCard";
import Button from "../../components/Button/Button";
import FileUpload from "../../components/FileUpload/FileUpload";
import AuthServices from "../../auth/AuthServices";
import Api from "../../api/Api";
import payment_qr from "../../assets/Payment/payment_qr.jpg";

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
  };
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }
  componentDidMount() {
    const user = AuthServices.getUserInfo().user;
    if (user.payment_id === null) {
    } else {
      const payment = {
        image: user.Payment.image,
        name: user.Payment.name,
        status: user.Payment.status,
      };
      this.setState({ payment, flazz: user.flazz, id: user.id });
    }
  }
  handleFileChange = () => {
    this.setState({ file: this.fileInput.current.files[0] });
  };
  handleFileSubmit = async () => {
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
        this.setState({ file: { size: 0, name: "Choose File" }, error: "" });
        Api.refresh();
        const payment = {
          image: promise.data[0].image,
          name: promise.data[0].name,
          status: promise.data[0].status,
        };
        console.log(payment);
        this.setState({ payment: payment });
      }
    }
  };
  render() {
    const { file, error, payment, flazz, id } = this.state;
    return (
      <div className="payment-page">
        <TitleCard title="Payment">
          <div className="ticket-card">
            <h2>Order Details</h2>
            <div className="title">
              <span>Item</span>
              <span>Amount</span>
            </div>
            <div className="ticket">
              <h2>3 Day Pass</h2>
              <span>
                <span>Rp</span>
                <h2>{flazz === "" ? "50.000" : "35.000"}</h2>
              </span>
            </div>
            <hr className="white-lines" />
            <div className="orderid">
              <span>Order ID</span>
              <span>VC-BNCC-4357</span>
            </div>
          </div>
          <h2 className="header">Payment Method Instructions</h2>
          <ol className="outer-list">
            <li>
              Periode Pembayaran : 9 Agustus 2020 hingga 9 September 2020 jam
              21.00
            </li>
            <li>
              Lakukan pembayaran biaya pendaftaran melalui QR code atau ke nomor
              rekening berikut:
            </li>
            <div>
              <div>Nomor Rekening : 5271675071</div>
              <div>Bank : BCA</div>
              <div>Atas Nama : ANNISA VINIDYA LARASATI</div>
              <img className="w-25" src={payment_qr} alt="QRCODE - BCA" />
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

          <h2 className="header">Upload Payment Receipt</h2>
          <div className="w-100">
            <div className="row">
              <div className="col-lg-6 col-xl-4">
                {error !== "" ? (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                ) : (
                  <div></div>
                )}
                <FileUpload
                  onChange={this.handleFileChange}
                  reference={this.fileInput}
                  label={file.name}
                  id="payment_image"
                ></FileUpload>
              </div>
            </div>
            <div className="file-status">
              <div>Size: {file.size} B</div>
              <Button onClick={this.handleFileSubmit}>Upload</Button>

              {payment.image === "" ? (
                "Not yet Uploaded"
              ) : (
                <div>
                  <div>
                    File :{" "}
                    <a
                      href={payment.image}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {payment.name}
                    </a>
                  </div>
                  <div>
                    Status : {payment.status === 0 ? "Unverified" : "Verified"}
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
