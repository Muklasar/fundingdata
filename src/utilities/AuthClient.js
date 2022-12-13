import axios from "axios";

class AuthClient {
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

  postAPI() {
    return this.instance.post(this.url, this.data)
  }
  getAPI() {
    return this.instance.get(this.url)
  }
  deleteAPI() {
    return this.instance.delete(this.url, this.data)
  }
  putAPI() {
    return this.instance.put(this.url, this.data)
  }
  patchAPI() {
    return this.instance.patch(this.url, this.data)

  }
}
export default AuthClient

