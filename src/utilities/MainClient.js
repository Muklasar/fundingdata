import axios from "axios";

class MainClient {
  constructor(url, data, header) {
    this.url = url
    this.data = data
    this.header = header
    this.instance = axios.create({
      baseURL: 'http://localhost:8000',
      // baseURL: 'https://stackshares.io',
      // baseURL: location.origin,
    });
  }

  getHeader() {
    // console.log(localStorage.getItem('token'))
    return {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
  }
  postAPI() {
    return this.instance.post(this.url, this.data, this.getHeader())
  }
  getAPI() {
    return this.instance.get(this.url, this.getHeader())
  }
  deleteAPI() {
    return this.instance.delete(this.url, this.data, this.getHeader())
  }
  putAPI() {
    return this.instance.put(this.url, this.data, this.getHeader())
  }
  patchAPI() {
    return this.instance.patch(this.url, this.data, this.getHeader())
  }
}
export default MainClient
