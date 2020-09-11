import axios from "axios";
import { API } from "../api/ApiConfig";

class AuthServices {
  login(credentials, sourceToken) {
    credentials = { ...credentials, cancelToken: sourceToken };
    const promise = new Promise((resolve, reject) => {
      axios.post(`${API.BASE_URL}/auth/login`, credentials).then(
        (res) => {
          resolve(res.data);
        },
        (err) => {
          reject(err);
        }
      );
    });
    return promise;
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem("userInfo"));
  }

  getAuthHeader() {
    return {
      headers: { Authorization: `Bearer ${this.getUserInfo().access_token}` },
    };
  }

  logout() {
    axios.post("/auth/logout", {}, this.getAuthHeader());
    localStorage.removeItem("userInfo");
    localStorage.clear();
  }
}

export default new AuthServices();
