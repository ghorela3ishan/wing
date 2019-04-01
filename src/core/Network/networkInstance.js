import axios from "axios";

const networkInstance = axios.create({
    baseURL: "https://reqres.in",
    timeout: 10000
    // headers: {"X-Custom-Header": "foobar"}
});

export default networkInstance;