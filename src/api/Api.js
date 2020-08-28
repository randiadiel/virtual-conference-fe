import axios from "axios";
import { API } from "./ApiConfig";
import AuthServices from "../auth/AuthServices";

class Api {
  refresh = async () => {
    const promise = new Promise((resolve, reject) => {
      axios
        .post(API.BASE_URL + "/auth/refresh", {}, AuthServices.getAuthHeader())
        .then(
          (res) => {
            resolve(res.data);
          },
          (err) => {
            reject(err);
          }
        );
    });
    const data = await promise;
    localStorage.setItem("userInfo", JSON.stringify(data.data.original));
  };
  handleFormDataPost = async (endpoint, form_data, isPrivate) => {
    let url = API.BASE_URL + endpoint;
    let headers;
    if (isPrivate) {
      headers = AuthServices.getAuthHeader();
      headers["content-type"] = "multipart/form-data";
    }
    const promise = new Promise((resolve, reject) => {
      axios
        .post(
          url,
          form_data,
          isPrivate
            ? headers
            : {
                headers: {
                  "content-type": "multipart/form-data",
                },
              }
        )
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => resolve(err.response.data));
    });
    return promise;
  };

  handlePost = async (endpoint, data, isPrivate) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .post(
          API.BASE_URL + endpoint,
          data,
          isPrivate ? AuthServices.getAuthHeader() : {}
        )
        .then(
          (res) => {
            resolve(res.data);
          },
          (err) => {
            reject(err);
          }
        );
    });
    return promise;
  };
  handleGet = async (endpoint, isPrivate) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .get(
          API.BASE_URL + endpoint,
          isPrivate ? AuthServices.getAuthHeader() : {}
        )
        .then(
          (res) => {
            resolve(res.data);
          },
          (err) => {
            reject(err);
          }
        );
    });
    return promise;
  };
}

export default new Api();
